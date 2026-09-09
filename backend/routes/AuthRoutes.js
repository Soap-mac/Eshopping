const express = require('express');
const router = express.Router();
const user = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const authMiddleware = require("../middlewares/authVerify")
const { sendOtpEmail } = require('../helpers/mailer');
const { body } = require('express-validator');
const validate = require('../middlewares/validate');
const authLimiter = require('../middlewares/authLimiter');

router.post('/signup', authLimiter, [
    body('name').trim().notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('A valid email is required'),
    body('password').isLength({ min: 5 }).withMessage('Password must be at least 5 characters'),
], validate, async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const exist = await user.findOne({ email });
        if (exist) {
            return res.json({
                success: false,
                message: "User already registered please login"
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
        return res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
})


router.post('/login', authLimiter, [
    body('email').isEmail().withMessage('A valid email is required'),
    body('password').notEmpty().withMessage('Password is required'),
], validate, async (req, res) => {
    try {
        const { email, password } = req.body;
        const exist = await user.findOne({ email });
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

        const token = jwt.sign({ email: exist.email, id: exist._id, role: exist.role }, process.env.JWT_SECRET, { expiresIn: '1d' });
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

router.post('/logout', authMiddleware, async (req, res) => {
    try {
        const exists = await user.findById(req.user.id);
        if (!exists) {
            return res.json({ success: false, message: "User not found" });
        }
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


router.post('/forgot-password', authLimiter, [
    body('email').isEmail().withMessage('A valid email is required'),
], validate, async (req, res) => {
    try {
        const { email } = req.body;

        const exist = await user.findOne({ email });
        if (!exist) {
            return res.status(200).json({
                success: true,
                message: "If an account exists for that email, a reset code has been sent."
            });
        }

        const otp = Math.floor(100000 + Math.random() * 900000).toString();
        const hashedOtp = await bcrypt.hash(otp, 10);

        exist.forgot_password_otp = hashedOtp;
        exist.forgot_password_expiry = Date.now() + 10 * 60 * 1000; // 10 minutes
        await exist.save();

        try {
            await sendOtpEmail(exist.email, otp);
        } catch (mailError) {
            console.log('Failed to send OTP email: ' + mailError);
            return res.status(500).json({
                success: false,
                message: "Could not send reset email. Please try again shortly."
            });
        }

        return res.status(200).json({
            success: true,
            message: "If an account exists for that email, a reset code has been sent."
        });

    } catch (error) {
        console.log('Internal Server Error' + error);
        return res.status(500).json({ success: false, message: "Internal server error" });
    }
});


router.post('/verify-otp', authLimiter, async (req, res) => {
    try {
        const { email, otp } = req.body;

        if (!email || !otp) {
            return res.status(400).json({ success: false, message: "Email and code are required" });
        }

        const exist = await user.findOne({ email });

        if (!exist || !exist.forgot_password_otp) {
            return res.status(400).json({ success: false, message: "Invalid or expired code" });
        }

        if (Date.now() > exist.forgot_password_expiry) {
            return res.status(400).json({ success: false, message: "This code has expired. Please request a new one." });
        }

        const isMatch = await bcrypt.compare(otp, exist.forgot_password_otp);
        if (!isMatch) {
            return res.status(400).json({ success: false, message: "Invalid or expired code" });
        }

        return res.status(200).json({ success: true, message: "Code verified" });

    } catch (error) {
        console.log('Internal Server Error' + error);
        return res.status(500).json({ success: false, message: "Internal server error" });
    }
});


router.post('/reset-password', authLimiter, async (req, res) => {
    try {
        const { email, otp, newPassword } = req.body;

        if (!email || !otp || !newPassword) {
            return res.status(400).json({ success: false, message: "Email, code, and new password are required" });
        }

        if (newPassword.length < 5) {
            return res.status(400).json({ success: false, message: "Password must be at least 5 characters" });
        }

        const exist = await user.findOne({ email });

        if (!exist || !exist.forgot_password_otp) {
            return res.status(400).json({ success: false, message: "Invalid or expired code" });
        }

        if (Date.now() > exist.forgot_password_expiry) {
            return res.status(400).json({ success: false, message: "This code has expired. Please request a new one." });
        }

        // Re-verify the OTP here too, even though /verify-otp already checked it -
        // never trust that a prior request actually happened.
        const isMatch = await bcrypt.compare(otp, exist.forgot_password_otp);
        if (!isMatch) {
            return res.status(400).json({ success: false, message: "Invalid or expired code" });
        }

        const hashedPassword = await bcrypt.hash(newPassword, 10);
        exist.password = hashedPassword;
        exist.forgot_password_otp = undefined;
        exist.forgot_password_expiry = undefined;
        await exist.save();

        return res.status(200).json({ success: true, message: "Password reset successfully. You can now log in." });

    } catch (error) {
        console.log('Internal Server Error' + error);
        return res.status(500).json({ success: false, message: "Internal server error" });
    }
});

module.exports = router;