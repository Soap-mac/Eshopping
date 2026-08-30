const express = require('express');
const router = express.Router();
const user = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const authMiddleware = require("../middlewares/authVerify")

router.post('/signup', async (req, res) => {
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            return res.json({
                success: false,
                message: "Please fill all the credentials",
            })
        }
        const exist = await user.findOne({ email });
        console.log(exist);
        if (exist) {
            return res.json({
                success: false,
                message: "User already registered please login"
            })
        }
        if (password.length < 4) {
            return res.json({
                success: false,
                message: 'password is too short and weak'
            })
        }
        var salt = bcrypt.genSaltSync(10);
        const pass = await bcrypt.hash(password, salt);

        const newUser = await user.create({
            userName: name,
            email: email,
            password: pass,
        });
        return res.json({
            success: true,
            message: "new user created",
            newUser,
        });
    } catch (error) {
        console.log('Internal Server Error' + error);
    }
})


router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.json({
                success: false,
                message: "Please fill all the credentials",
            })
        }
        const exist = await user.findOne({ email });
        // console.log(exist);
        if (!exist) {
            return res.json({
                success: false,
                message: "User not found please Signup"
            })
        }
        if (exist.status === 'inactive') {
            return res.json({
                success: false,
                message: "Your account is inactive, please contact support"
            });
        }
        if (exist.status === 'suspended') {
            return res.json({
                success: false,
                message: "Your account is suspended, please contact support"
            });
        }

        const ismatch = await bcrypt.compare(password, exist.password);
        if (!ismatch) {
            return res.json({
                success: false,
                message: "password or email doesnt match"
            })
        }

        const token = jwt.sign({ email: exist.email, id: exist._id }, process.env.JWT_SECRET, { expiresIn: '1d' });

        exist.last_login = Date.now();
        exist.token = token;
        await exist.save();

        res.cookie('token', token, {
            httpOnly: true,
            secure: true,
            sameSite: 'none',
        });

        res.cookie('email', exist.email, {
            httpOnly: true,
            secure: true,
            sameSite: 'none',
        });

        res.cookie('_id', exist._id, {
            httpOnly: true,
            secure: true,
            sameSite: 'none',
        });

        return res.json({
            success: true,
            message: "login successfull",
            name: exist.userName,
            email: exist.email,
            id: exist._id,
        });
    } catch (error) {
        console.log('Internal Server Error' + error);
    }
});

router.post('/logout', async (req, res) => {
    try {
        const email = req.cookies.email;
        const exists = await user.findOne({ email });
        if (!exists) {
            return res.json({
                success: false,
                message: "User not found"
            });
        }
        console.log(exists);
        console.log('logout called');
        exists.token = null;
        await exists.save();
        console.log('token removed from database');

        res.clearCookie('token', {
            httpOnly: true,
            secure: true,
            sameSite: 'none'
        });

        res.clearCookie('email', {
            httpOnly: true,
            secure: true,
            sameSite: 'none'
        });

        res.clearCookie('_id', {
            httpOnly: true,
            secure: true,
            sameSite: 'none'
        });
        return res.json({
            success: true,
            message: "logout successfull"
        });
    } catch (error) {
        console.log('Internal Server Error' + error);
        return res.json({
            success: false,
            message: "logout failed"
        });
    }
});


router.get("/getUser", authMiddleware, async (req, res) => {

    try {

        const exist = await user.findById(req.user.id)
            .select("-password");

        console.log(exist, "Hii")

        if (!exist) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }


        return res.status(200).json({
            success: true,
            exist
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