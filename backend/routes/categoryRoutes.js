const express = require('express');
const router = express.Router();
const category = require('../models/category');
const { uploadImage, removeImage } = require('../helpers/cloudinary');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: multer.diskStorage({}), limits: { fileSize: 50 * 1024 * 1024 } });

router.post('/addCategory', upload.single('file'), async (req, res) => {
    try {
        const { name } = req.body;
        const image = req.file;
        if (!name || !image) {
            return res.status(400).json({ message: 'Name and image are required' });
        }
        const exists = await category.findOne({ name });
        if (exists) {
            return res.status(400).json({ message: 'Category already exists' });
        }
        const imageUrl = await uploadImage(image.path);
        const newCategory = new category({
            name,
            image: imageUrl,
        });

        newCategory.image = imageUrl;
        await newCategory.save();


        res.status(201).json({ message: 'Category added sucessfully', category: newCategory, success: true });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });

    }

});

router.get('/getcategory', async (req, res) => {
    try {
        const allCategories = await category.find();
        res.status(200).json({ allCategories, success: true });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

router.post('/deletecategory/:name', async (req, res) => {
    try {
        const { name } = req.params;
        const categoryToDelete = await category.findOne({ name: name });
        console.log(categoryToDelete);
        if (!categoryToDelete) {
            return res.status(404).json({ message: 'Category not found' });
        }
        console.log(categoryToDelete.image);
        const publicId = categoryToDelete.image.split('/').pop().split('.')[0];
        const removed = await removeImage('eshopping/' + publicId);
        await category.deleteOne({ name: name });
        res.status(200).json({ message: 'Category deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
        console.log(error);
    }
});

router.post('/updateCategory/:id', upload.single('file'), async (req, res) => {
    try {
        const { id } = req.params;
        const { name } = req.body;
        const image = req.file;
        const categoryToUpdate = await category.findById(id);
        if (!categoryToUpdate) {
            return res.status(400).json({ message: 'Category Not Found' });
        }
        if (!name && !image) {
            return res.status(400).json({ success: false, message: 'Atleast provide a name or image to update' });
        }
        if (!image) {
            categoryToUpdate.name = name;
            await categoryToUpdate.save();
            return res.status(200).json({ message: 'Category Name updated sucessfully' });
        }
        const publicId = categoryToUpdate.image.split('/').pop().split('.')[0];
        if (!name) {
            const removed = await removeImage('eshopping/' + publicId);
            const imgUrl = await uploadImage(image.path);
            categoryToUpdate.image = imgUrl;
            await categoryToUpdate.save();
            return res.status(200).json({ message: 'Category image updated sucessfully' });
        }
        const removed = await removeImage('eshopping/' + publicId);
        const imgUrl = await uploadImage(image.path);
        categoryToUpdate.image = imgUrl;
        categoryToUpdate.name = name;
        await categoryToUpdate.save();
        return res.status(200).json({ message: 'Category updated sucessfully', imgUrl, success: true });
    } catch (error) {
        return res.status(500).json({ message: 'Server error', error });

    }
});

router.get('/getsinglecategory/:id', async (req, res) => {
    const { id } = req.params;
    if (!id) {
        return res.status(400).json({ success: false, message: 'ID not found' })
    };
    const existCategory = await category.findById(id);
    if (!existCategory) {
        return res.status(400).json({ success: false, message: 'Category not found' });
    };
    return res.status(200).json({ success: true, message: 'Category found', existCategory });
})

module.exports = router;