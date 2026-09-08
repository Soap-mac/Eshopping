const express = require('express');
const user = require('../models/user');
const products = require('../models/products');
const Review = require('../models/review');
const router = express.Router();
const authentication = require('../middlewares/authVerify');


router.post('/addReview', authentication, async (req, res) => {
    try {
        const { productId, rating, comment } = req.body;


        console.log(productId + "     " + rating + "     " + comment);
        if (!productId || !rating || !comment) {
            return res.status(400).json({ message: 'Product ID and rating and comment are required' });
        }

        const userData = await user.findById(req.user.id);
        if (!userData) {
            return res.status(404).json({ message: 'User not found' });
        }

        const product = await products.findById(productId);
        if (!product) {
            return res.status(401).json({ message: "Product not found" });
        }

        const newReview = new Review({
            userId: userData._id,
            productId: productId,
            rating: rating,
            comment: comment
        });

        await newReview.save();
        return res.status(200).json({ message: "Review added" });
    } catch (error) {
        return res.status(500).json({ message: "Internal server error", error });
    }
});

router.get('/getReview/:id', async (req, res) => {
    try {
        const id = req.params.id;

        const reviews = await Review.find({ productId: id }).populate("userId");
        return res.status(200).json({ message: "reviews fetched", reviews });
    } catch (error) {
        res.status(500).json({ message: "Internal server error", error });
    }
});

router.post('/deleteReview/:id', authentication, async (req, res) => {
    try {
        const revId = req.params.id;

        const exist = await Review.findById(revId);
        if (!exist) {
            return res.status(404).json({ message: "Review not found" });
        }

        const isOwner = exist.userId.toString() === req.user.id;
        const isAdmin = req.user.role === 'admin';

        if (!isOwner && !isAdmin) {
            return res.status(403).json({ message: "You are not allowed to delete this review" });
        }

        await Review.deleteOne({ _id: revId });

        return res.status(200).json({ message: "Review deleted" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error", error: error.message });
    }
});

module.exports = router;