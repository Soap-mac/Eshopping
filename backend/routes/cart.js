const express = require('express');
const router = express.Router();
const CartProduct = require('../models/cartProduct');
const Product = require('../models/products');
const user = require('../models/user');
const authentication = require('../middlewares/authVerify');


const variantsMatch = (options1, options2) => {
    const map1 = new Map(Object.entries(options1 || {}));
    const map2 = new Map(Object.entries(options2 || {}));

    if (map1.size !== map2.size) return false;

    for (let [key, value] of map1) {
        if (map2.get(key) !== value) return false;
    }
    return true;
};

const findMatchingVariant = (product, selectedOptions) => {
    return product.variants.find(variant => {
        const variantOptions = Object.fromEntries(variant.options);
        return variantsMatch(selectedOptions, variantOptions);
    });
};

router.post('/addToCart', authentication, async (req, res) => {
    try {
        const { productId, quantity, variantSku, selectedOptions } = req.body;

        const qty = Number(quantity);


        if (!productId || !qty) {
            return res.status(400).json({ message: 'Product ID and quantity are required' });
        }
        if (!variantSku && !selectedOptions) {
            return res.status(400).json({ message: 'Either variant SKU or selected options are required' });
        }

        const userData = await user.findById({ email });
        if (!userData) {
            return res.status(404).json({ message: 'User not found' });
        }

        const product = await Product.findById(productId);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        let selectedVariant;
        if (variantSku) {
            selectedVariant = product.variants.find(v => v.sku === variantSku);
        } else if (selectedOptions) {
            selectedVariant = findMatchingVariant(product, selectedOptions);
        }

        if (!selectedVariant) {
            return res.status(404).json({ message: 'Selected variant not found' });
        }

        if (selectedVariant.stock < qty) {
            return res.status(400).json({
                message: `Insufficient stock. Only ${selectedVariant.stock} units available`,
                availableStock: selectedVariant.stock
            });
        }

        const variantPrice = selectedVariant.price || product.price;
        const discount = product.discount || 0;
        const finalPrice = variantPrice - (variantPrice * discount / 100);

        const existingCart = await CartProduct.findOne({
            userId: userData._id,
            productId: product._id,
            variantSku: selectedVariant.sku
        });

        if (existingCart) {
            const newQuantity = existingCart.quantity + qty;

            if (newQuantity > selectedVariant.stock) {
                return res.status(400).json({
                    message: `Cannot add more. Maximum available: ${selectedVariant.stock}`,
                    availableStock: selectedVariant.stock,
                    currentCartQuantity: existingCart.quantity
                });
            }

            existingCart.quantity = newQuantity;
            await existingCart.save();

            return res.status(200).json({
                message: 'Product quantity updated in cart',
                cartProduct: existingCart
            });
        }

        const variantOptions = Object.fromEntries(selectedVariant.options);

        const newCart = new CartProduct({
            productId: product._id,
            quantity: qty,
            userId: userData._id,
            variantSku: selectedVariant.sku,
            variants: variantOptions,
            price: variantPrice,
            discount: discount,
            finalPrice: finalPrice,
        });

        await newCart.save();
        userData.shopping_cart.push(newCart._id);
        await userData.save();

        res.status(200).json({
            message: 'Product added to cart successfully',
            cartProduct: newCart
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
});

router.post('/changeQuantity', authentication, async (req, res) => {
    try {
        const { qty, productId, variantSku, cartItemId } = req.body;
        const newQty = Number(qty);



        if (!Number.isInteger(newQty) || newQty < 0) {
            return res.status(400).json({
                message: 'Valid quantity is required'
            });
        }

        if (!variantSku && !cartItemId) {
            return res.status(400).json({
                message: 'Either variant SKU or cart item ID is required'
            });
        }

        const userData = await user.findById({ email });

        if (!userData) {
            return res.status(404).json({
                message: 'User not found'
            });
        }

        let cart;

        if (cartItemId) {
            cart = await CartProduct.findOne({
                _id: cartItemId,
                userId: userData._id
            });
        } else {
            cart = await CartProduct.findOne({
                productId,
                userId: userData._id,
                variantSku
            });
        }

        if (!cart) {
            return res.status(404).json({
                message: 'Product not found in cart'
            });
        }

        if (newQty === 0) {
            userData.shopping_cart.pull(cart._id);
            await userData.save();

            await CartProduct.deleteOne({
                _id: cart._id
            });

            return res.status(200).json({
                success: true,
                message: 'Product removed from cart successfully'
            });
        }

        const product = await Product.findById(cart.productId);

        if (!product) {
            return res.status(404).json({
                message: 'Product not found'
            });
        }

        const variant = product.variants.find(
            v => v.sku === cart.variantSku
        );

        if (!variant) {
            return res.status(404).json({
                message: 'Variant not found'
            });
        }

        if (variant.stock < newQty) {
            return res.status(400).json({
                message: `Insufficient stock. Only ${variant.stock} units available`,
                availableStock: variant.stock
            });
        }

        cart.quantity = newQty;
        await cart.save();

        res.status(200).json({
            success: true,
            message: 'Cart quantity updated successfully',
            cart
        });

    } catch (error) {
        console.log(error);

        res.status(500).json({
            message: 'Internal Server Error',
            error: error.message
        });
    }
});

router.get('/getCart', authentication, async (req, res) => {
    try {


        const userData = await user.findById({ email });
        if (!userData) {
            return res.status(404).json({ message: 'User not found' });
        }

        if (userData.shopping_cart.length === 0) {
            return res.status(200).json({ message: 'Your cart is empty', cart: [] });
        }

        console.log("till here")

        const allProducts = await CartProduct.find({ userId: userData._id })
            .populate('productId');
        console.log("All Products is going to be printed..................................................................................................................................................................................")
        // console.log(allProducts);
        const enrichedCart = allProducts.map(cartItem => {
            // console.log(cartItem);
            const product = cartItem.productId;
            console.log("----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------")
            console.log(product);
            const variant = product.variants.find(v => v.sku === cartItem.variantSku);

            return {
                ...cartItem.toObject(),
                variantDetails: variant ? {
                    sku: variant.sku,
                    options: Object.fromEntries(variant.options),
                    stock: variant.stock,
                    images: variant.images,
                    isInStock: variant.stock >= cartItem.quantity,
                    availableStock: variant.stock
                } : null,
                stockStatus: !variant ? 'unavailable' :
                    variant.stock === 0 ? 'out_of_stock' :
                        variant.stock < cartItem.quantity ? 'insufficient_stock' : 'in_stock'
            };
        });

        res.status(200).json({
            message: 'Cart fetched successfully',
            cart: enrichedCart
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
});

router.post('/removeFromcart', authentication, async (req, res) => {
    try {
        const { cartItemId, productId, variantSku } = req.body;


        const userData = await user.findById({ email });
        if (!userData) {
            return res.status(404).json({ message: 'User not found' });
        }

        let cartItem;
        if (cartItemId) {
            cartItem = await CartProduct.findOne({ _id: cartItemId, userId: userData._id });
        } else if (productId && variantSku) {
            cartItem = await CartProduct.findOne({
                productId,
                variantSku,
                userId: userData._id
            });
        } else {
            return res.status(400).json({ message: 'Cart item ID or product ID with variant SKU required' });
        }

        if (!cartItem) {
            return res.status(404).json({ message: 'Cart item not found' });
        }

        userData.shopping_cart.pull(cartItem._id);
        await userData.save();


        await CartProduct.deleteOne({ _id: cartItem._id });

        res.status(200).json({ message: 'Product removed from cart successfully' });

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
});


router.get('/validateCart', authentication, async (req, res) => {
    try {


        const userData = await user.findById({ email });
        if (!userData) {
            return res.status(404).json({ message: 'User not found' });
        }

        const cartItems = await CartProduct.find({ userId: userData._id })
            .populate('productId');

        const validationResults = [];
        let allValid = true;

        for (const cartItem of cartItems) {
            const product = cartItem.productId;
            const variant = product.variants.find(v => v.sku === cartItem.variantSku);

            const isValid = variant && variant.stock >= cartItem.quantity;

            if (!isValid) {
                allValid = false;
            }

            validationResults.push({
                cartItemId: cartItem._id,
                productId: product._id,
                productName: product.name,
                variantSku: cartItem.variantSku,
                requestedQuantity: cartItem.quantity,
                availableStock: variant ? variant.stock : 0,
                isValid,
                issue: !variant ? 'Variant no longer available' :
                    variant.stock === 0 ? 'Out of stock' :
                        variant.stock < cartItem.quantity ? `Only ${variant.stock} units available` : null
            });
        }

        res.status(200).json({
            isValid: allValid,
            validationResults,
            message: allValid ? 'All items are available' : 'Some items have stock issues'
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
});


router.delete('/clearCart', authentication, async (req, res) => {
    try {


        const userData = await user.findById({ email });
        if (!userData) {
            return res.status(404).json({ message: 'User not found' });
        }

        await CartProduct.deleteMany({ userId: userData._id });

        userData.shopping_cart = [];
        await userData.save();

        res.status(200).json({ message: 'Cart cleared successfully' });

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
});

module.exports = router;