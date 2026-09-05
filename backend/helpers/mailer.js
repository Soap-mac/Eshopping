const nodemailer = require('nodemailer');

// Works with Gmail (using an App Password, not your normal password),
// or any SMTP provider (Resend, Mailtrap, SendGrid SMTP, etc.).
// For Gmail: SMTP_HOST=smtp.gmail.com, SMTP_PORT=587
const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 587,
    secure: Number(process.env.SMTP_PORT) === 465,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
});

const sendOtpEmail = async (toEmail, otp) => {
    await transporter.sendMail({
        from: process.env.EMAIL_FROM || process.env.SMTP_USER,
        to: toEmail,
        subject: 'Your password reset code',
        text: `Your password reset code is ${otp}. It expires in 10 minutes. If you didn't request this, you can safely ignore this email.`,
        html: `
            <p>Your password reset code is:</p>
            <p style="font-size: 28px; font-weight: bold; letter-spacing: 4px;">${otp}</p>
            <p>It expires in 10 minutes. If you didn't request this, you can safely ignore this email.</p>
        `,
    });
};

module.exports = { sendOtpEmail };