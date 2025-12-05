const jwt = require("jsonwebtoken");

function tokenCheck(req, res, next) {
    const head = req.headers.authorization;
    if (!head) return res.status(401).json({ msg: "Token missing." });

    const token = head.split(" ")[1];
    try {
        const decoded = jwt.verify(token, process.env.JWT_KEY);
        req.user = decoded;
        next();
    } catch (err) {
        res.status(401).json({ msg: "Invalid token." });
    }
}

module.exports = tokenCheck;
