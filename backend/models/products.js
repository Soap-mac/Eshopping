const mongoose = require('mongoose');
const category = require('./category');

const VariantSchema = new mongoose.Schema({
    options: {
        type: Map,
        of: String,
        required: true,
    },
    sku: {
        type: String,
        required: true,

    },
    price: {
        type: Number,
    },
    stock: {
        type: Number,
        default: 0,
    },
    images: [String],
});

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    images: [{
        type: String,
        required: true
    }],
    brand: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    oldPrice: {
        type: Number,
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
    },
    catName: {
        type: String,
        default: '',
    },

    subCategory: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'SubCategory',
    },
    SubcatName: {
        type: String,
        default: '',
    },

    innerSubCategory: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'InnerSubCategory',
    },
    innersubcatName: {
        type: String,
        default: '',
    },

    rating: {
        type: Number,
        default: 0,
    },

    discount: {
        type: Number,
        default: 0,
    },
    variants: [
        VariantSchema
    ],
    createdAt: {
        type: Date,
        default: Date.now,
    },
})

module.exports = mongoose.model('Product', ProductSchema);