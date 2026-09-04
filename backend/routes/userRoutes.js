const express = require('express');
const router = express.Router();
const user = require('../models/user');
const multer = require('multer');
const path = require('path');
const { uploadImage, removeImage } = require('../helpers/cloudinary');
const authentication = require('../middlewares/authVerify');
const Orders = require("../models/orders");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: multer.diskStorage({}), limits: { fileSize: 50 * 1024 * 1024 } });

router.post('/upload-avatar', authentication, upload.single('file'), async (req, res) => {
    try {
        const file = req.file;
        if (!file) {
            return res.json({
                success: false,
                message: "No file uploaded"
            });
        }

        const userExists = await user.findById({ email });
        if (!userExists) {
            return res.json({
                success: false,
                message: "User not found"
            });
        }
        if (userExists.avatar) {

            const publicId = userExists.avatar.split('/').pop().split('.')[0];
            console.log('Removing old avatar with publicId:', publicId);
            const removed = await removeImage('eshopping/' + publicId);
            console.log(removed);
            console.log('Old avatar removed');

        }
        const imageUrl = await uploadImage(file.path);
        userExists.avatar = imageUrl;
        await userExists.save();
        console.log('Avatar uploaded successfully:', imageUrl);
        return res.json({
            url: imageUrl,
            success: true,
        });
    } catch (error) {
        console.error('Error uploading avatar:', error);
        return res.json({
            success: false,
            message: "Failed to upload avatar"
        });

    }
});

router.post('/remove-avatar', authentication, async (req, res) => {
    try {

        const userExists = await user.findById({ email });
        if (!userExists) {
            return res.json({
                success: false,
                message: "User not found"
            });
        }
        const imgUrl = userExists.avatar;
        if (!imgUrl) {
            return res.json({
                success: false,
                message: "No avatar to remove"
            });
        }
        const publicId = imgUrl.split('/').pop().split('.')[0];
        const removed = await removeImage(publicId);
        console.log('Avatar removed:', removed);
        userExists.avatar = '';
        await userExists.save();

        console.log('Avatar removed successfully');
        return res.json({
            success: true,
            message: "Avatar removed successfully"
        });
    } catch (error) {
        console.error('Error removing avatar:', error);
        return res.json({
            success: false,
            message: "Failed to remove avatar"
        });
    }
});

router.get('/profileDetails', authentication, async (req, res) => {
    try {

        const userExists = await user.findById({ email });
        if (!userExists) {
            return res.json({
                success: false,
                message: "User not found"
            });
        }
        return res.json({
            success: true,
            user: {
                name: userExists.userName,
                email: userExists.email,
                mobile: userExists.mobile,
                avatar: userExists.avatar
            }
        });
    } catch (error) {
        console.log('Internal Server Error' + error);
        return res.json({
            success: false,
            message: "Failed to fetch profile details"
        });
    }
});

router.post('/update-profile', authentication, async (req, res) => {
    try {
        const { name, email, mobile } = req.body;

        const userExists = await user.findById({ email });
        if (!userExists) {
            return res.json({
                success: false,
                message: "User not found"
            });
        }
        userExists.userName = name || userExists.userName;
        userExists.email = email || userExists.email;
        userExists.mobile = mobile || userExists.mobile;
        await userExists.save();

        return res.json({
            success: true,
            message: "Profile updated successfully",
            user: {
                name: userExists.userName,
                email: userExists.email,
                mobile: userExists.mobile,
                avatar: userExists.avatar
            }
        });
    } catch (error) {
        console.log('Internal Server Error' + error);
        return res.json({
            success: false,
            message: "Failed to fetch profile details"
        });
    }
});

router.get('/allusers', authentication, async (req, res) => {
    try {
        const allUsers = await user.find();
        if (allUsers.length === 0) {
            return res.json({
                sucess: false,
                message: "No user found",
            })
        }
        const allInfo = [];
        for (const user of allUsers) {
            const id = user._id.toString();
            const imageUrl = user.avatar;
            const name = user.userName;
            const email = user.email;
            const mobile = user.mobile;
            const info = { id, imageUrl, name, email, mobile };
            allInfo.push(info);
        }

        return res.status(200).json({
            success: true,
            message: "All users fetched successfully",
            users: allInfo,
        })

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        })
    }
});

router.get('/protected', authentication, async (req, res) => {
    return res.json({
        success: true,
        message: "authorized user",
    });
})


router.get("/getMyOrders", authentication, async (req, res) => {
    try {
        const orders = await Orders.find({
            userId: req.user.id
        })
            .sort({
                createdAt: -1
            });

        const formattedOrders = orders.map(order => ({
            id: order.orderId,
            date: order.createdAt,
            items: order.items
                .map(item => item.name)
                .join(", "),

            quantity: order.items.reduce(
                (total, item) => total + item.quantity,
                0
            ),
            total: order.totalAmount,
            status: order.orderStatus,
            trackingId: "Not Assigned"
        }));

        return res.status(200).json({
            success: true,
            orders: formattedOrders
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
});
module.exports = router;