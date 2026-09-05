// Must run AFTER authVerify (authentication) - it relies on req.user
// having already been set from a verified JWT.
const ensureAdmin = (req, res, next) => {
    if (!req.user || req.user.role !== 'admin') {
        return res.status(403).json({
            success: false,
            message: "Admin access required"
        });
    }
    next();
};

module.exports = ensureAdmin;