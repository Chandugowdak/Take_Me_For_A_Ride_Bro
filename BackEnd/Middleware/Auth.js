const JWT = require('jsonwebtoken');
require('dotenv').config();

const SECRET_JWT_CODE = process.env.SECRET_JWT_CODE;

const Verify_User = (req, res, next) => {
    const User_Token = req.header('authorization');

    if (!User_Token) {
        return res.status(401).json({ message: "No token provided, authorization denied" });
    }

    const Decode_Token = User_Token.split(' ')[1];

    try {
        // ⬇ THIS RETURNS THE DECODED OBJECT DIRECTLY
        const decoded = JWT.verify(Decode_Token, SECRET_JWT_CODE);

        req.user = decoded;  // ⬅ Now req.user = { id: "...mongoId..." }

        next();
    } catch (err) {
        return res.status(401).json({ message: "Invalid or expired token",err });
    }
};

module.exports = Verify_User;
