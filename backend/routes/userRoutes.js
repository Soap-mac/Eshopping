const express = require('express');
const router = express.Router();
const user = require('../models/user');
const multer = require('multer');
const path = require('path');
const { uploadImage, removeImage } = require('../helpers/cloudinary');
const authentication = require('../middlewares/authVerify');
const isAdmin = require('../middlewares/isAdmin');
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

        const userExists = await user.findById(req.user.id);
        if (userExists.avatar) {
            const publicId = userExists.avatar.split('/').pop().split('.')[0];
            await removeImage('eshopping/' + publicId);
        }
        const imageUrl = await uploadImage(file.path);
        userExists.avatar = imageUrl;
        await userExists.save();
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

        const userExists = await user.findById(req.user.id);
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
        await removeImage(publicId);
        userExists.avatar = '';
        await userExists.save();

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

        const userExists = await user.findById(req.user.id);
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

        const userExists = await user.findById(req.user.id);
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

router.get('/allusers', authentication, isAdmin, async (req, res) => {
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

router.get("/getAllOrders", authentication, isAdmin, async (req, res) => {
    try {
        const orders = await Orders.find()
            .populate("userId", "userName email")
            .sort({ createdAt: -1 });

        const formattedOrders = orders.map(order => ({
            id: order.orderId,
            date: order.createdAt,
            customerName: order.userId?.userName || "Unknown",
            customerEmail: order.userId?.email || "",
            items: order.items.map(item => item.name).join(", "),
            quantity: order.items.reduce((total, item) => total + item.quantity, 0),
            total: order.totalAmount,
            status: order.orderStatus,
            paymentMethod: order.paymentMethod,
            paymentStatus: order.paymentStatus
        }));

        return res.status(200).json({ success: true, orders: formattedOrders });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ success: false, message: "Internal server error" });
    }
});

router.patch("/updateOrderStatus/:orderId", authentication, isAdmin, async (req, res) => {
    try {
        const { orderId } = req.params;
        const { status } = req.body;

        const validStatuses = ["placed", "confirmed", "processing", "shipped", "delivered", "cancelled"];
        if (!status || !validStatuses.includes(status)) {
            return res.status(400).json({
                success: false,
                message: `Status must be one of: ${validStatuses.join(", ")}`
            });
        }

        const order = await Orders.findOneAndUpdate(
            { orderId },
            { orderStatus: status },
            { new: true }
        );

        if (!order) {
            return res.status(404).json({ success: false, message: "Order not found" });
        }

        return res.status(200).json({
            success: true,
            message: "Order status updated",
            order: { id: order.orderId, status: order.orderStatus }
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ success: false, message: "Internal server error" });
    }
});

router.get("/getDashboardStats", authentication, isAdmin, async (req, res) => {
    try {
        const now = new Date();
        const startOfThisMonth = new Date(now.getFullYear(), now.getMonth(), 1);
        const startOfLastMonth = new Date(now.getFullYear(), now.getMonth() - 1, 1);
        const startOfNextMonth = new Date(now.getFullYear(), now.getMonth() + 1, 1);

        const [thisMonthOrders, lastMonthOrders] = await Promise.all([
            Orders.find({ createdAt: { $gte: startOfThisMonth, $lt: startOfNextMonth } }),
            Orders.find({ createdAt: { $gte: startOfLastMonth, $lt: startOfThisMonth } }),
        ]);

        const sumTotal = (orders) => orders.reduce((total, o) => total + (o.totalAmount || 0), 0);
        const sumCollected = (orders) => orders
            .filter(o => o.paymentStatus === 'completed')
            .reduce((total, o) => total + (o.totalAmount || 0), 0);

        // Percentage change vs the previous month, guarding the
        // divide-by-zero case when the previous month had nothing.
        const pctChange = (current, previous) => {
            if (previous === 0) return current > 0 ? 100 : 0;
            return Number((((current - previous) / previous) * 100).toFixed(2));
        };

        const newOrdersThisMonth = thisMonthOrders.length;
        const newOrdersLastMonth = lastMonthOrders.length;

        const salesThisMonth = sumTotal(thisMonthOrders);
        const salesLastMonth = sumTotal(lastMonthOrders);

        // "Sales" = gross value of orders placed. "Revenue" = money actually
        // collected (paymentStatus === 'completed'), which is lower than
        // Sales whenever COD orders haven't been paid/delivered yet.
        const revenueThisMonth = sumCollected(thisMonthOrders);
        const revenueLastMonth = sumCollected(lastMonthOrders);

        // "Customers" is a running total (all registered users right now),
        // compared against the total as of the start of this month.
        const [totalCustomersNow, totalCustomersLastMonth] = await Promise.all([
            user.countDocuments({ role: 'user' }),
            user.countDocuments({ role: 'user', createdAt: { $lt: startOfThisMonth } }),
        ]);

        // Last 12 months of new signups + sales, oldest to newest, for the chart.
        const monthLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const chart = [];

        for (let i = 11; i >= 0; i--) {
            const monthStart = new Date(now.getFullYear(), now.getMonth() - i, 1);
            const monthEnd = new Date(now.getFullYear(), now.getMonth() - i + 1, 1);

            const [monthOrders, newUsersCount] = await Promise.all([
                Orders.find({ createdAt: { $gte: monthStart, $lt: monthEnd } }),
                user.countDocuments({ role: 'user', createdAt: { $gte: monthStart, $lt: monthEnd } }),
            ]);

            chart.push({
                name: monthLabels[monthStart.getMonth()],
                TotalSales: sumTotal(monthOrders),
                TotalUser: newUsersCount,
            });
        }

        return res.status(200).json({
            success: true,
            stats: {
                newOrders: {
                    value: newOrdersThisMonth,
                    changePercent: pctChange(newOrdersThisMonth, newOrdersLastMonth)
                },
                sales: {
                    value: salesThisMonth,
                    changePercent: pctChange(salesThisMonth, salesLastMonth)
                },
                revenue: {
                    value: revenueThisMonth,
                    changePercent: pctChange(revenueThisMonth, revenueLastMonth)
                },
                customers: {
                    value: totalCustomersNow,
                    changePercent: pctChange(totalCustomersNow, totalCustomersLastMonth)
                },
            },
            chart
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