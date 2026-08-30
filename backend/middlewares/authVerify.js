const jwt = require('jsonwebtoken');

const ensureAuthentication = (req, res, next) => {
    try {
        const token = req.cookies.token;
        if (!token) {
            return res.json({
                success: false,
                message: "unauthorized user",
            })
        }

        const decode = jwt.verify(token, process.env.JWT_SECRET)
        req.user = decode;
        next();

    } catch (error) {
        console.log('Internal Server Error' + error);
        return res.status(401).json({
            success: false,
            message: "Invalid token"
        });
    }
}

module.exports = ensureAuthentication;