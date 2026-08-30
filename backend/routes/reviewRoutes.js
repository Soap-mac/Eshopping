const express = require('express');
const user = require('../models/user');
const products = require('../models/products');
const Review = require('../models/review');
const router = express.Router();

router.post('/addReview', async (req, res) => {
    try {
        const email = req.cookies.email;
        const { productId, rating, comment } = req.body;

        if (!email) {
            return res.status(400).json({ message: 'You are not logged in, please login to post a review' });
        }
        console.log(productId + "     " + rating + "     " + comment);
        if (!productId || !rating || !comment) {
            return res.status(400).json({ message: 'Product ID and rating and comment are required' });
        }

        const userData = await user.findOne({ email });
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

router.post('/deleteReview/:id', async (req, res) => {
    try {
        const revId = req.params.id;

        const exist = await Review.findById(revId);
        if (!exist) {
            res.status(401).json({ message: "review not found" });
        }
        await Review.deleteOne({ _id: revId });
    } catch (error) {
        return res.status(500).json({ message: "Internal server error", error });
    }
});

module.exports = router;