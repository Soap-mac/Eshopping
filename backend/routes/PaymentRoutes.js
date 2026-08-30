const express = require('express');
const crypto = require('crypto');
const Razorpay = require('razorpay');

const products = require('../models/products');
const user = require('../models/user');
const Order = require('../models/orders');
const CartProduct = require('../models/cartProduct');
const calculatePrice = require("../utils/orderCalculation")
const router = express.Router();

const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
});

router.post('/create-order', async (req, res) => {
    try {
        const email = req.cookies.email;

        const { addressId } = req.body;

        if (!addressId) {
            return res.status(400).json({
                message: "Delivery address required"
            });
        }

        if (!email) {
            return res.status(401).json({
                message: "User not logged in"
            });
        }

        const person = await user.findOne({ email });

        if (!person) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        const cartProducts = await CartProduct.find({
            userId: person._id
        });

        if (!cartProducts || cartProducts.length === 0) {
            return res.status(400).json({
                message: "Cart is empty"
            });
        }

        let orderItems = [];
        let subTotal = 0;

        for (let item of cartProducts) {
            const productId = item.productId._id;
            const variantSku = item.variantSku;
            const purchaseQty = item.quantity;

            const product = await products.findById(productId);

            if (!product) {
                return res.status(404).json({
                    message: `Product not found: ${productId}`
                });
            }

            const variant = product.variants.find(
                v => v.sku === variantSku
            );

            if (!variant) {
                return res.status(404).json({
                    message: `Variant not found: ${variantSku}`
                });
            }

            if (variant.stock < purchaseQty) {
                return res.status(400).json({
                    message: `Not enough stock for SKU: ${variantSku}`
                });
            }

            const unitPrice = variant.price || product.price;

            orderItems.push({
                productId: product._id,
                variantSku: variant.sku,
                quantity: purchaseQty,
                price: unitPrice,
                images: variant.images.length ? variant.images : product.images,
                name: product.name,
                brand: product.brand,
                options: variant.options
            });

            subTotal += unitPrice * purchaseQty;
        }

        const tax = subTotal * 0.10;
        const deliveryCharge = subTotal > 250 ? 0 : 50;

        const totalAmount = subTotal + tax + deliveryCharge;

        const orderId = "ORD_" + Date.now();

        const razorpayOrder = await razorpay.orders.create({
            amount: Math.round(totalAmount * 100),
            currency: "INR",
            receipt: orderId,
            notes: {
                orderId: orderId,
                userId: person._id.toString()
            }
        });

        const newOrder = new Order({
            userId: person._id,
            orderId,
            paymentMethod: "RAZORPAY",
            items: orderItems,
            paymentStatus: "pending",
            subTotal,
            totalAmount,
            deliveryAddress: addressId,
            razorpayOrderId: razorpayOrder.id
        });

        await newOrder.save();

        res.status(200).json({
            success: true,
            message: "Order created, proceed to payment",
            razorpayOrder,
            internalOrderId: newOrder._id,
            key: process.env.RAZORPAY_KEY_ID,
            amount: razorpayOrder.amount,
            currency: razorpayOrder.currency,
            priceDetails: {
                subtotal: subTotal,
                taxes: tax,
                deliveryCost: deliveryCharge,
                totalAmount
            }
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Server error",
            error: error.message
        });
    }
});

router.post('/verify-payment', async (req, res) => {
    try {
        const {
            razorpay_order_id,
            razorpay_payment_id,
            razorpay_signature
        } = req.body;

        if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
            return res.status(400).json({
                message: "Missing payment verification fields"
            });
        }

        const expectedSignature = crypto
            .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
            .update(`${razorpay_order_id}|${razorpay_payment_id}`)
            .digest('hex');

        if (expectedSignature !== razorpay_signature) {
            await Order.findOneAndUpdate(
                {
                    razorpayOrderId: razorpay_order_id
                },
                {
                    paymentStatus: "failed",
                    paymentError: "Invalid payment signature"
                }
            );

            return res.status(400).json({
                success: false,
                message: "Payment verification failed"
            });
        }

        const orderData = await Order.findOne({
            razorpayOrderId: razorpay_order_id
        });

        if (!orderData) {
            return res.status(404).json({
                message: "Order not found"
            });
        }

        if (orderData.paymentStatus === "completed") {
            return res.status(200).json({
                success: true,
                message: "Payment already verified",
                order: orderData
            });
        }

        for (const item of orderData.items) {
            const product = await products.findById(item.productId);

            if (!product) {
                continue;
            }

            const variant = product.variants.find(
                v => v.sku === item.variantSku
            );

            if (!variant) {
                continue;
            }

            if (variant.stock < item.quantity) {
                orderData.paymentStatus = "failed";
                orderData.paymentError = "Stock unavailable after payment";

                await orderData.save();

                return res.status(409).json({
                    message: `Stock unavailable for ${item.name}`
                });
            }


        }

        orderData.paymentStatus = "completed";
        orderData.orderStatus = "confirmed";
        orderData.paymentId = razorpay_payment_id;
        orderData.razorpayPaymentId = razorpay_payment_id;
        orderData.razorpaySignature = razorpay_signature;

        await orderData.save();

        const person = await user.findById(orderData.userId);

        if (person) {
            person.orderHistory.push(orderData._id);
            await person.save();
        }

        await CartProduct.deleteMany({
            userId: orderData.userId
        });

        res.status(200).json({
            success: true,
            message: "Payment verified and order completed",
            order: orderData
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Server error",
            error: error.message
        });
    }
});

router.post('/create-cod-order', async (req, res) => {
    try {

        const email = req.cookies.email;

        const { addressId } = req.body;


        if (!email) {
            return res.status(401).json({
                message: "User not logged in"
            });
        }


        if (!addressId) {
            return res.status(400).json({
                message: "Delivery address required"
            });
        }


        const person = await user.findOne({
            email
        });


        if (!person) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        const cartProducts = await CartProduct.find({
            userId: person._id
        });

        if (!cartProducts || cartProducts.length === 0) {
            return res.status(400).json({
                message: "Cart empty"
            });
        }


        let orderItems = [];
        let subTotal = 0;


        for (let item of cartProducts) {


            const product = await products.findById(
                item.productId._id
            );


            if (!product) {
                return res.status(404).json({
                    message: "Product not found"
                });
            }


            const variant = product.variants.find(
                v => v.sku === item.variantSku
            );


            if (!variant) {
                return res.status(404).json({
                    message: "Variant not found"
                });
            }


            if (variant.stock < item.quantity) {
                return res.status(400).json({
                    message: "Not enough stock"
                });
            }
            await product.save();
            const price = variant.price || product.price;
            orderItems.push({
                productId: product._id,
                variantSku: variant.sku,
                quantity: item.quantity,
                price,
                images:
                    variant.images.length
                        ?
                        variant.images
                        :
                        product.images,
                name: product.name,
                brand: product.brand,
                options: variant.options
            });
            subTotal += price * item.quantity;
        }
        const {
            tax,
            deliveryCharge,
            totalAmount
        } = calculatePrice(subTotal);

        const orderId =
            "ORD_" + Date.now();

        const newOrder = new Order({
            userId: person._id,
            orderId,
            paymentMethod: "COD",
            items: orderItems,
            paymentStatus: "pending",
            orderStatus: "placed",
            subTotal,
            totalAmount,
            deliveryAddress: addressId
        });
        await newOrder.save();

        person.orderHistory.push(
            newOrder._id
        );

        await person.save();

        await CartProduct.deleteMany({
            userId: person._id
        });

        for (const item of orderItems) {
            const product = await products.findById(item.productId);
            const variant = product.variants.find(
                v => v.sku === item.variantSku
            );
            variant.stock -= item.quantity;
            await product.save();
        }

        res.status(200).json({
            success: true,
            message: "COD order placed successfully",
            order: newOrder
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Server error",
            error: error.message
        });
    }
});


router.post('/payment-failed', async (req, res) => {

    try {

        const {
            razorpay_order_id,
            error
        } = req.body;


        await Order.findOneAndUpdate(
            {
                razorpayOrderId: razorpay_order_id
            },
            {
                paymentStatus: "failed",
                paymentError: error
            }
        );


        res.json({
            success: true
        });


    }
    catch (err) {

        res.status(500).json({
            message: err.message
        })

    }

});

module.exports = router;