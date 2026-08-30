const express = require('express');
const router = express.Router();
const multer = require('multer');
const Address = require('../models/address');
const user = require('../models/user');

const upload = multer();

router.post('/addAddress', upload.none(), async (req, res) => {
    const address = req.body;
    console.log(address);
    console.log(address.street);
    const email = req.cookies.email;
    const person = await user.findOne({ email: email });
    console.log(person);

    const exist = Address.find({ address_line: address.street, pincode: address.pin, country: address.country });

    if (exist) {
        res.status(409).json({ message: "Address already exists" })
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

    person.address_details.push(newAddress);
    await person.save();

    await newAddress.save();

    res.status(200).status({ message: "Address added" });
})

router.get('/getAddresses', async (req, res) => {
    try {
        const email = req.cookies.email;

        if (!email) {
            return res.status(401).json({
                success: false,
                message: "User not logged in"
            });
        }

        const person = await user
            .findOne({ email })
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

module.exports = router;