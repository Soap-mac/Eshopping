const mongoose = require('mongoose');

const CartProductSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true,
    },

    variantSku: {
        type: String,
        required: true,
    },

    variants: {
        type: Map,
        of: String,
        default: {},
    },

    price: {
        type: Number,
        required: true
    },

    discount: {
        type: Number,
        default: 0
    },

    finalPrice: {
        type: Number,
        required: true
    },

    quantity: {
        type: Number,
        default: 1,
        min: 1,
    },

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },

    addedAt: {
        type: Date,
        default: Date.now,
    },

}, {
    timestamps: true,
});

module.exports = mongoose.model('CartProduct', CartProductSchema);