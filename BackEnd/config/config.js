const mongoose = require('mongoose');
require('dotenv').config();


const mongoURL = process.env.MONGO_URL;


const DB = async()=>{
    try{
        await mongoose.connect(mongoURL)
        .then(()=>{
            console.log("MongoDB Connected Successfully");
        })
        .catch((err)=>{
            console.log("Error in DB Connection :", err);
        })
    }

    catch(err){
        console.log("Server Error in DB Connection :", err);
    }

}

module.exports = DB;