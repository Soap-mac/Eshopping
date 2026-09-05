const express = require('express');
const router = express.Router();
const category = require('../models/category');
const SubCategory = require('../models/subcategory');
const InnerSubCategory = require('../models/innerCategory');
const { uploadImage, removeImage } = require('../helpers/cloudinary');
const multer = require('multer');
const authentication = require('../middlewares/authVerify');
const isAdmin = require('../middlewares/isAdmin');

const upload = multer({
    storage: multer.diskStorage({}),
    limits: { fileSize: 50 * 1024 * 1024 }
});


router.post('/addInnerCategory', authentication, isAdmin, upload.single('image'), async (req, res) => {
    try {
        const { name, parentCategory, subCategory } = req.body;
        const image = req.file;

        if (!name || !parentCategory || !subCategory || !image) {
            return res.status(400).json({ message: 'Name, Parent Category, Sub Category and image are required' });
        }

        const exists = await InnerSubCategory.findOne({ name, parentCategory, subCategory });
        if (exists) {
            return res.status(400).json({ message: 'This inner Category already exists', success: false });
        }



        const parent = await category.findOne({ name: parentCategory });
        if (!parent) {
            return res.status(400).json({ message: 'Parent category not Found check the name again', success: false });
        }
        const parentId = parent._id;

        const subCat = await SubCategory.findOne({ name: subCategory, parentId: parentId });
        if (!subCat) {
            return res.status(400).json({ message: 'Sub Category not Found check the name again', success: false });
        }
        const subCatId = subCat._id;
        const imageUrl = await uploadImage(image.path);

        const newInnerCategory = new InnerSubCategory({
            name,
            parentCategory: parentCategory,
            parentCategoryId: parentId,
            subCategory: subCategory,
            subcategoryId: subCatId,
            image: imageUrl,
        });

        newInnerCategory.image = imageUrl;
        await newInnerCategory.save();

        res.status(201).json({
            message: 'Inner Category added sucessfully',
            category: newInnerCategory,
            success: true
        });

    } catch (error) {
        res.status(500).json({ message: 'Server error', error, success: false });
        console.log(error);
    }
});

router.get('/getInnerCategory', async (req, res) => {
    try {
        const innercategories = await InnerSubCategory.find();
        res.status(200).json({ innercategories, success: true });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error, success: false });
    }
});

router.post('/deleteInnerCategory/:id', authentication, isAdmin, async (req, res) => {
    console.log('I am getting this item id in backend ' + req.params.id);
    try {
        const id = req.params.id;
        const innerCategoryToDelete = await InnerSubCategory.findById(id);
        console.log(innerCategoryToDelete);
        if (!innerCategoryToDelete) {
            return res.status(404).json({ message: 'Inner Category not found' });
        }
        const publicId = innerCategoryToDelete.image.split('/').pop().split('.')[0];
        const removed = await removeImage('eshopping/' + publicId);
        await InnerSubCategory.findByIdAndDelete(id);
        res.status(200).json({ message: 'Inner Category deleted successfully', success: true });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
        console.log(error);
    }
});

module.exports = router;