const bcrypt = require('bcryptjs');
const UserModel = require('../model/User');
const JWT = require('jsonwebtoken');
require('dotenv').config();

const SECRET_JWT_CODE = process.env.SECRET_JWT_CODE;


// ✅ REGISTER USER
const userRegistration = async (req, res) => {

    const { name, email, password, Type_of_User, phone } = req.body;

    try {

        // 🔒 Validate fields
        if (!name || !email || !password || !Type_of_User || !phone) {
            return res.status(400).json({ message: "All fields are required" });
        }
        if(phone.length !== 10){
            return res.status(400).json({ message: "Invalid phone number" });
        }
        const existingUser = await UserModel.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists with this email" });
        }
    

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new UserModel({
            name,
            email,
            password: hashedPassword,
            Type_of_User,
            phone // ✅ NEW FIELD
        });

        await newUser.save();

        // ❌ Don't send password back
        const userResponse = newUser.toObject();
        delete userResponse.password;

        return res.status(201).json({
            message: "User Registered Successfully",
            user: userResponse
        });

    } catch (err) {
        return res.status(500).json({ message: "Server Error in Registration" });
    }
};



// ✅ LOGIN USER
const LoginUser = async (req, res) => {

    const { email, password } = req.body;

    try {

        const existingUser = await UserModel.findOne({ email });
        if (!existingUser) {
            return res.status(404).json({ message: "User not found with this email" });
        }

        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);
        if (!isPasswordCorrect) {
            return res.status(400).json({ message: "Invalid Credentials" });
        }

        const Token = JWT.sign(
            { id: existingUser._id },
            SECRET_JWT_CODE,
            { expiresIn: '1h' }
        );

        // ❌ Remove password
        const userResponse = existingUser.toObject();
        delete userResponse.password;

        return res.status(200).json({
            message: "Login Successful",
            user: userResponse,
            JWT_Token: Token
        });

    } catch (err) {
        return res.status(500).json({ message: "Server Error in Login" });
    }
};



// ✅ GET ALL USERS
const Get_Data = async (req, res) => {
    try {
        const users = await UserModel.find();
        // const DecreptPaassword = 
        return res.status(200).json({ users });
    } catch (err) {
        return res.status(500).json({ message: "Server Error in Fetching Users" });
    }
};



// ✅ UPDATE USER DATA
const Update_Data = async (req, res) => {

    const { id } = req.params;
    const { name, email, phone } = req.body;

    try {

        const updateUser = await UserModel.findOneAndUpdate(
            { _id: id },
            { name, email, phone }, // ✅ include phone
            { new: true }
        ).select("-password"); // 🔒 hide password

        if (!updateUser) {
            return res.status(400).json({ message: "User Not Found" });
        }

        return res.status(200).json({
            message: "User Profile Updated Successfully",
            user: updateUser
        });

    } catch (err) {
        return res.status(500).json({ message: "Server Error User Profile Not Updated" });
    }
};



module.exports = {
    userRegistration,
    LoginUser,
    Get_Data,
    Update_Data
};