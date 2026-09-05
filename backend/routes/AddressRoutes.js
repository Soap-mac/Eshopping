const express = require('express');
const router = express.Router();
const multer = require('multer');
const Address = require('../models/address');
const user = require('../models/user');
const authentication = require('../middlewares/authVerify');
const { body } = require('express-validator');
const validate = require('../middlewares/validate');


const upload = multer();

router.post('/addAddress', [
    body('street').trim().notEmpty().withMessage('Street address is required'),
    body('city').trim().notEmpty().withMessage('City is required'),
    body('state').trim().notEmpty().withMessage('State is required'),
    body('pin').trim().notEmpty().withMessage('PIN code is required'),
    body('phone').trim().notEmpty().withMessage('Phone number is required'),
], validate, upload.none(), async (req, res) => {
    try {
        const address = req.body;


        const person = await user.findById({ email: email });
        if (!person) {
            return res.status(404).json({ message: "User not found" });
        }

        const exists = await Address.findOne({
            address_line: address.street,
            pincode: address.pin,
            userId: person._id
        });

        if (exists) {
            return res.status(409).json({ message: "Address already exists" });
        }

        const newAddress = new Address({
            address_line: address.street,
            state: address.state,
            city: address.city,
            pincode: address.pin,
            country: "India",
            mobile: Number(address.phone),
            status: true,
            userId: person._id,
        });

        await newAddress.save();

        person.address_details.push(newAddress._id);
        await person.save();

        return res.status(200).json({ success: true, message: "Address added" });

    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Server error", error: error.message });
    }
})


router.get('/getAddresses', async (req, res) => {
    try {


        const person = await user.findById({ email: email })
            .populate("address_details");

        if (!person) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }

        res.status(200).json({
            success: true,
            addresses: person.address_details || []
        });

    } catch (error) {
        console.log("Get addresses error:", error);

        res.status(500).json({
            success: false,
            message: "Server error",
            error: error.message
        });
    }
});

router.put('/updateAddress/:id', [
    body('street').trim().notEmpty().withMessage('Street address is required'),
    body('city').trim().notEmpty().withMessage('City is required'),
    body('state').trim().notEmpty().withMessage('State is required'),
    body('pin').trim().notEmpty().withMessage('PIN code is required'),
    body('phone').trim().notEmpty().withMessage('Phone number is required'),
], validate, authentication, upload.none(), async (req, res) => {
    try {
        const { id } = req.params;
        const address = req.body;

        const existingAddress = await Address.findById(id);
        if (!existingAddress) {
            return res.status(404).json({ message: "Address not found" });
        }

        if (existingAddress.userId.toString() !== req.user.id) {
            return res.status(403).json({ message: "You are not allowed to edit this address" });
        }

        existingAddress.address_line = address.street ?? existingAddress.address_line;
        existingAddress.state = address.state ?? existingAddress.state;
        existingAddress.city = address.city ?? existingAddress.city;
        existingAddress.pincode = address.pin ?? existingAddress.pincode;
        existingAddress.mobile = address.phone ? Number(address.phone) : existingAddress.mobile;

        await existingAddress.save();

        return res.status(200).json({
            success: true,
            message: "Address updated",
            address: existingAddress
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Server error", error: error.message });
    }
});

router.delete('/deleteAddress/:id', authentication, async (req, res) => {
    try {
        const { id } = req.params;

        const existingAddress = await Address.findById(id);
        if (!existingAddress) {
            return res.status(404).json({ message: "Address not found" });
        }

        if (existingAddress.userId.toString() !== req.user.id) {
            return res.status(403).json({ message: "You are not allowed to delete this address" });
        }

        await Address.deleteOne({ _id: id });

        await user.findByIdAndUpdate(req.user.id, {
            $pull: { address_details: id }
        });

        return res.status(200).json({ success: true, message: "Address deleted" });

    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Server error", error: error.message });
    }
});

module.exports = router;