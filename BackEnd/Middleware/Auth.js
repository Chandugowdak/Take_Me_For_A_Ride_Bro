const JWT = require('jsonwebtoken');
require('dotenv').config();

const SECRET_JWT_CODE = process.env.SECRET_JWT_CODE;


const Verify_User = async(req,res,next)=>{
    const User_Token = req.header('authorization');
    try{
        if(!User_Token){
            return res.status(401).json({message:"No token provided, authorization denied"});
        }
        const Decode_Token = User_Token.split(' ')[1];
        const Verify = await JWT.verify(Decode_Token,SECRET_JWT_CODE,async(err,user)=>{
            if(err){
                return res.status(401).json({message:"Token is not valid"});
            }else{
                req.user = user;
                next();
            }
        })
    }
    catch(err){
        return res.status(500).json({message:"Server Error in Authentication"});
    }
}


module.exports = Verify_User;