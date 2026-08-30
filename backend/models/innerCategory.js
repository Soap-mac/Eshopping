const mongoose = require('mongoose');

const InnerSubCategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    image: {
        type: String,
        required: true,
    },
    parentCategory: {
        type: String,
    },
    parentCategoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        default: null,
    },
    subCategory: {
        type: String,
    },
    subcategoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        default: null,
    },
});

module.exports = mongoose.model('InnerSubCategory', InnerSubCategorySchema);