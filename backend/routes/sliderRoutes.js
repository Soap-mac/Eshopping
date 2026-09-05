const express = require('express');
const { uploadImage } = require('../helpers/cloudinary');
const sliders = require('../models/sliders');
const router = express.Router();
const multer = require('multer');
const authentication = require('../middlewares/authVerify');
const isAdmin = require('../middlewares/isAdmin');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: multer.diskStorage({}), limits: { fileSize: 50 * 1024 * 1024 } });

router.post('/addSlider', authentication, isAdmin, upload.single('file'), async (req, res) => {
    try {
        const img = req.file;
        if (!img) {
            return res.status(400).json({ success: false, message: "image is not there please provide the slider image" });
        }
        const imgUrl = await uploadImage(img.path);

        const newSlider = new sliders({
            image: imgUrl,
        });
        await newSlider.save();
        res.status(201).json({ success: true, message: "Slider is added" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ success: false, message: "Internal Server Error", error });
    }
});

router.get('/allSliders', async (req, res) => {
    try {
        const allSliders = await sliders.find();
        if (allSliders.length == 0) {
            return res.status(200).json({
                success: true,
                allSliders: []
            });
        }
        return res.json({ success: true, allSliders });
    } catch (error) {
        return res.status(500).json({ success: false, message: "Internal Server Error" });
    }
})

module.exports = router;
