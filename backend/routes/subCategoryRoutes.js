const express = require('express');
const router = express.Router();
const subcategory = require('../models/subcategory');
const { uploadImage, removeImage } = require('../helpers/cloudinary');
const multer = require('multer');
const category = require('../models/category');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: multer.diskStorage({}), limits: { fileSize: 50 * 1024 * 1024 } });



router.post('/addSubCategory', upload.single('image'), async (req, res) => {
    try {
        const { name, parentcategory } = req.body;
        const image = req.file;
        if (!name || !parentcategory || !image) {
            return res.status(400).json({ message: 'Name and image and parentCategory are required' });
        }
        const exists = await subcategory.findOne({ name });
        if (exists) {
            return res.status(400).json({ message: 'Sub Category already exists', success: false });
        }

        const parent = await category.findOne({ name: parentcategory });
        if (!parent) {
            return res.status(400).json({ message: 'Parent category not Found check the name again', success: false });
        }
        const parentId = parent._id;
        const imageUrl = await uploadImage(image.path);
        const newSubCategory = new subcategory({
            name,
            parentId,
            parentCategory: parentcategory,
            image: imageUrl,
        });

        newSubCategory.image = imageUrl;
        await newSubCategory.save();


        res.status(201).json({ message: 'Sub Category added sucessfully', category: newSubCategory, success: true });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error, success: false });
        console.log(error);

    }

});

router.get('/getsubcategory', async (req, res) => {
    try {
        const allSubCategories = await subcategory.find();
        res.status(200).json({ allSubCategories, success: true, message: 'All Sub Categories are sent' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

router.post('/deletesubcategory/:id', async (req, res) => {
    console.log('I am getting this item id in backend ' + req.params.id);
    try {
        const id = req.params.id;
        console.log(id);
        const subcategoryToDelete = await subcategory.findById(id);
        console.log(subcategoryToDelete);
        if (!subcategoryToDelete) {
            return res.status(404).json({ message: 'Category not found' });
        }
        console.log(subcategoryToDelete.image);
        const publicId = subcategoryToDelete.image.split('/').pop().split('.')[0];
        const removed = await removeImage('eshopping/' + publicId);
        await subcategory.findByIdAndDelete(id);
        res.status(200).json({ message: 'Sub Category deleted successfully', success: true });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
        console.log(error);
    }
});

router.post('/updateCategory/:name', upload.single('file'), async (req, res) => {
    try {
        const { name } = req.params;
        const { newName } = req.body;
        const image = req.file;
        const subcategoryToUpdate = await subcategory.findOne({ name: name });
        if (!subcategoryToUpdate) {
            return res.status(400).json({ message: 'Category Not Found' });
        }
        if (!image) {
            subcategoryToUpdate.name = newName;
            await subcategoryToUpdate.save();
            return res.status(200).json({ message: 'Category Name updated sucessfully' });
        }
        const publicId = subcategoryToUpdate.image.split('/').pop().split('.')[0];
        if (!newName) {
            const removed = await removeImage('eshopping/' + publicId);
            const imgUrl = await uploadImage(image.path);
            subcategoryToUpdate.image = imgUrl;
            await subcategoryToUpdate.save();
            return res.status(200).json({ message: 'Category image updated sucessfully' });
        }
        const removed = await removeImage('eshopping/' + publicId);
        const imgUrl = await uploadImage(image.path);
        subcategoryToUpdate.image = imgUrl;
        subcategoryToUpdate.name = newName;
        await subcategoryToUpdate.save();
        return res.status(200).json({ message: 'Category updated sucessfully' });
    } catch (error) {

    }
});


module.exports = router;