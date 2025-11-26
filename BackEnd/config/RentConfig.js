const mongoose = require('mongoose');
require('dotenv').config();



const URL = process.env.MONGO_URL;


const RentDB = async()=>{
    try{
        await mongoose.connect(URL)
        .then(()=>{
            console.log("Rent MongoDB Connected Successfully");
        })
        .catch((err)=>{
            console.log("Error in Rent DB Connection :", err);
        })
    }
    catch(err){
       console.log("Server Error in Rent DB Connection :", err);
    }
}


module.exports = RentDB;