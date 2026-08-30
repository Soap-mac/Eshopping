const express = require('express');
const router = express.Router();

const Wishlist = require('../models/wishlist');
const Product = require('../models/products');

const authentication = require('../middlewares/authVerify');

router.post('/addwishlist', authentication, async (req, res) => {

    try {

        const userId = req.user.id;
        const { productId } = req.body;


        const existProduct = await Product.findById(productId);

        if (!existProduct) {
            return res.status(404).json({
                success: false,
                message: "Product not found"
            });
        }


        const alreadyAdded = await Wishlist.findOne({
            userId,
            productId
        });


        if (alreadyAdded) {

            return res.status(400).json({
                success: false,
                message: "Product already in wishlist"
            });

        }


        const newWish = new Wishlist({
            userId,
            productId
        });


        await newWish.save();


        res.status(200).json({
            success: true,
            message: "Item added to wishlist"
        });


    } catch (error) {

        console.log(error);

        res.status(500).json({
            success: false,
            message: "Internal server error"
        });

    }

});


router.get('/getwishlist', authentication, async (req, res) => {

    try {

        const wishlist = await Wishlist.find({
            userId: req.user.id
        })
            .populate("productId");


        const allProducts = wishlist.map(
            item => item.productId
        );


        res.status(200).json({
            success: true,
            allProducts
        });


    } catch (error) {

        console.log(error);

        res.status(500).json({
            success: false,
            message: "Internal server error"
        });

    }

});


router.delete('/deletewishlist/:productId', authentication, async (req, res) => {

    try {

        const { productId } = req.params;


        const item = await Wishlist.findOneAndDelete({

            userId: req.user.id,

            productId

        });


        if (!item) {

            return res.status(404).json({

                success: false,
                message: "Item not found"

            });

        }


        res.status(200).json({

            success: true,
            message: "Removed from wishlist"

        });


    }
    catch (error) {

        console.log(error);

        res.status(500).json({

            success: false,
            message: "Internal server error"

        });

    }

});


module.exports = router;