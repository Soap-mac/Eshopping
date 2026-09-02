const express = require('express');
const crypto = require('crypto');
const Razorpay = require('razorpay');

const products = require('../models/products');
const user = require('../models/user');
const Order = require('../models/orders');
const CartProduct = require('../models/cartProduct');
const calculatePrice = require('../utils/orderCalculation');

const router = express.Router();

if (!process.env.RAZORPAY_KEY_ID || !process.env.RAZORPAY_KEY_SECRET) {
    console.warn('Razorpay credentials are not configured. Set RAZORPAY_KEY_ID and RAZORPAY_KEY_SECRET in backend/.env.');
}

const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// ============================================
// CREATE RAZORPAY ORDER
// ============================================
router.post('/create-order', async (req, res) => {
    try {
        const email = req.cookies.email;
        const { addressId } = req.body;

        if (!email) {
            return res.status(401).json({
                success: false,
                message: 'User not authenticated'
            });
        }

        if (!addressId) {
            return res.status(400).json({
                success: false,
                message: 'Delivery address required'
            });
        }

        if (!process.env.RAZORPAY_KEY_ID || !process.env.RAZORPAY_KEY_SECRET) {
            return res.status(500).json({
                success: false,
                message: 'Payment gateway is not configured'
            });
        }

        const person = await user.findOne({ email });

        if (!person) {
            return res.status(404).json({
                success: false,
                message: 'User not found'
            });
        }

        const cartProducts = await CartProduct.find({
            userId: person._id
        });

        if (!cartProducts.length) {
            return res.status(400).json({
                success: false,
                message: 'Cart is empty'
            });
        }

        const orderItems = [];
        let subTotal = 0;

        for (const item of cartProducts) {
            const product = await products.findById(item.productId);

            if (!product) {
                return res.status(404).json({
                    success: false,
                    message: `Product not found: ${item.productId}`
                });
            }

            const variant = product.variants.find(
                (v) => v.sku === item.variantSku
            );

            if (!variant) {
                return res.status(404).json({
                    success: false,
                    message: `Variant not found: ${item.variantSku}`
                });
            }

            const quantity = Number(item.quantity);

            if (!Number.isInteger(quantity) || quantity < 1) {
                return res.status(400).json({
                    success: false,
                    message: `Invalid quantity for SKU: ${item.variantSku}`
                });
            }

            if (variant.stock < quantity) {
                return res.status(400).json({
                    success: false,
                    message: `Not enough stock for SKU: ${item.variantSku}`
                });
            }

            const unitPrice = Number(variant.price || product.price || 0);

            if (!Number.isFinite(unitPrice) || unitPrice < 0) {
                return res.status(400).json({
                    success: false,
                    message: `Invalid price for SKU: ${item.variantSku}`
                });
            }

            orderItems.push({
                productId: product._id,
                variantSku: variant.sku,
                quantity,
                price: unitPrice,
                images: variant.images?.length ? variant.images : product.images,
                name: product.name,
                brand: product.brand,
                options: variant.options
            });

            subTotal += unitPrice * quantity;
        }

        const { tax, deliveryCharge, totalAmount } = calculatePrice(subTotal);
        const amount = Math.round(totalAmount * 100);

        // Razorpay accepts INR amounts in paise. Minimum allowed here is ₹1.
        if (!Number.isInteger(amount) || amount < 100) {
            return res.status(400).json({
                success: false,
                message: 'Order amount must be at least ₹1 (100 paise)'
            });
        }

        const orderId = `ORD_${Date.now()}_${crypto.randomBytes(3).toString('hex')}`;

        let razorpayOrder;
        try {
            razorpayOrder = await razorpay.orders.create({
                amount,
                currency: 'INR',
                receipt: orderId,
                notes: {
                    orderId,
                    userId: person._id.toString()
                }
            });
        } catch (error) {
            console.error('Razorpay order creation failed:', error);

            const razorpayStatus = error?.statusCode || error?.status;
            if (razorpayStatus === 401 || error?.error?.code === 'BAD_REQUEST_ERROR' && error?.error?.description?.toLowerCase().includes('authentication')) {
                return res.status(401).json({
                    success: false,
                    message: 'Razorpay authentication failed. Check the server credentials.'
                });
            }

            return res.status(500).json({
                success: false,
                message: 'Unable to create Razorpay order'
            });
        }

        const newOrder = await Order.create({
            userId: person._id,
            orderId,
            paymentMethod: 'RAZORPAY',
            items: orderItems,
            paymentStatus: 'pending',
            orderStatus: 'placed',
            subTotal,
            taxes: tax,
            deliveryCharge,
            totalAmount,
            deliveryAddress: addressId,
            razorpayOrderId: razorpayOrder.id
        });

        return res.status(201).json({
            success: true,
            order_id: razorpayOrder.id,
            amount: razorpayOrder.amount,
            currency: razorpayOrder.currency,
            internalOrderId: newOrder._id,
            priceDetails: {
                subtotal: subTotal,
                taxes: tax,
                deliveryCost: deliveryCharge,
                totalAmount
            }
        });
    } catch (error) {
        console.error('Create order error:', error);
        return res.status(500).json({
            success: false,
            message: 'Server error while creating order'
        });
    }
});

// ============================================
// VERIFY RAZORPAY PAYMENT SIGNATURE
// ============================================
router.post('/verify-payment', async (req, res) => {
    try {
        const {
            razorpay_order_id,
            razorpay_payment_id,
            razorpay_signature
        } = req.body;

        if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
            return res.status(400).json({
                success: false,
                message: 'Missing payment verification fields'
            });
        }

        if (!process.env.RAZORPAY_KEY_SECRET) {
            return res.status(500).json({
                success: false,
                message: 'Payment gateway is not configured'
            });
        }

        const expectedSignature = crypto
            .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
            .update(`${razorpay_order_id}|${razorpay_payment_id}`)
            .digest('hex');

        const expectedBuffer = Buffer.from(expectedSignature, 'hex');
        const receivedBuffer = Buffer.from(razorpay_signature, 'hex');

        const signatureValid =
            expectedBuffer.length === receivedBuffer.length &&
            crypto.timingSafeEqual(expectedBuffer, receivedBuffer);

        if (!signatureValid) {
            await Order.findOneAndUpdate(
                { razorpayOrderId: razorpay_order_id },
                {
                    paymentStatus: 'failed',
                    paymentError: 'Invalid payment signature'
                }
            );

            return res.status(400).json({
                success: false,
                message: 'Payment verification failed'
            });
        }

        const orderData = await Order.findOne({
            razorpayOrderId: razorpay_order_id
        });

        if (!orderData) {
            return res.status(404).json({
                success: false,
                message: 'Order not found'
            });
        }

        if (orderData.paymentStatus === 'completed') {
            return res.status(200).json({
                success: true,
                message: 'Payment already verified',
                order: orderData
            });
        }

        // Re-check stock immediately before marking the order as paid.
        for (const item of orderData.items) {
            const product = await products.findById(item.productId);

            if (!product) {
                return res.status(409).json({
                    success: false,
                    message: `Product no longer exists: ${item.name}`
                });
            }

            const variant = product.variants.find(
                (v) => v.sku === item.variantSku
            );

            if (!variant || variant.stock < item.quantity) {
                orderData.paymentError = `Stock unavailable for ${item.name}`;
                await orderData.save();

                return res.status(409).json({
                    success: false,
                    message: `Stock unavailable for ${item.name}. Payment may require a refund.`
                });
            }
        }

        // Payment is now cryptographically verified; consume the reserved stock.
        for (const item of orderData.items) {
            const product = await products.findById(item.productId);
            const variant = product?.variants.find(
                (v) => v.sku === item.variantSku
            );

            if (variant) {
                variant.stock -= item.quantity;
                await product.save();
            }
        }

        orderData.paymentStatus = 'completed';
        orderData.orderStatus = 'confirmed';
        orderData.paymentId = razorpay_payment_id;
        orderData.razorpayPaymentId = razorpay_payment_id;
        orderData.razorpaySignature = razorpay_signature;
        orderData.paymentError = '';

        await orderData.save();

        const person = await user.findById(orderData.userId);

        if (person && !person.orderHistory.some(
            (id) => id.toString() === orderData._id.toString()
        )) {
            person.orderHistory.push(orderData._id);
            await person.save();
        }

        await CartProduct.deleteMany({
            userId: orderData.userId
        });

        return res.status(200).json({
            success: true,
            message: 'Payment verified and order completed',
            order: orderData
        });
    } catch (error) {
        console.error('Payment verification error:', error);
        return res.status(500).json({
            success: false,
            message: 'Server error while verifying payment'
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