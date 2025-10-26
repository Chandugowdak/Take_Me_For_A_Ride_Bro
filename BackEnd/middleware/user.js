const becrypt = require('bcryptjs');
const UserModel = require('../model/Model');



const userRegistration = async(req,res,next)=>{

    const {name , email , password} = req.body;
    try{

        const existingUser = await UserModel.findOne({email: email});
        if(existingUser){
            return res.status(400).json({message: "User already exists with this email"});
        }
        const hashedPassword = await becrypt.hash(password , 10);
        const newUser = await UserModel({
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
    const isPasswordCorrect = await becrypt.compare(password , existingUser.password);
    if(!isPasswordCorrect){
        return res.status(400).json({message: "Invalid Credentials"});
    }
    return res.status(200).json({message: "Login Successful", user: existingUser});
}
catch(err){
    return res.status(500).json({message: "Server Error in Login"});
}

}


module.exports = {userRegistration , LoginUser};