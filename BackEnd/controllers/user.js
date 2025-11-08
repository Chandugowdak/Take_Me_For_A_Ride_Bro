const bcrypt = require('bcryptjs');
const UserModel = require('../model/Model');
const JWT = require('jsonwebtoken');
require('dotenv').config();


const SECRET_JWT_CODE = process.env.SECRET_JWT_CODE; // Use the same secret code from .env file


const userRegistration = async(req,res,next)=>{

    const {name , email , password} = req.body;
    try{

        const existingUser = await UserModel.findOne({email: email});
        if(existingUser){
            return res.status(400).json({message: "User already exists with this email"});
        }
        const hashedPassword = await bcrypt.hash(password , 10);
        const newUser = new  UserModel({
            name: name, email:email, password:hashedPassword
        })
        newUser.save();
        return res.status(201).json({message: "User Registered Successfully", user: newUser});
        
    }
   catch(err){
    return res.status(500).json({message: "Server Error in Registration"}); 
   }

}

const LoginUser = async(req,res,next)=>{
const{email ,password}  =  req.body;

try{

    const existingUser = await UserModel.findOne({email: email});
    if(!existingUser){
        return res.status(404).json({message: "User not found with this email"});
    }
    const isPasswordCorrect = await bcrypt.compare(password , existingUser.password);
    if(!isPasswordCorrect){
        return res.status(400).json({message: "Invalid Credentials"});
    }else{
        const Token = await JWT.sign({id:existingUser._id}, SECRET_JWT_CODE,{expiresIn:'1h'}); //GENERATE JWT TOKEN
    return res.status(200).json({message: "Login Successful", user: existingUser , JWT_Token: Token});
    }
}
catch(err){
    return res.status(500).json({message: "Server Error in Login"});
}

}

const Get_Data = async(req,res)=>{
    try{
        const users = await UserModel.find({});
        return res.status(200).json({users: users});
    }catch(err){
        return res.status(500).json({message: "Server Error in Fetching Users"});
    }
}


module.exports = {userRegistration , LoginUser, Get_Data };