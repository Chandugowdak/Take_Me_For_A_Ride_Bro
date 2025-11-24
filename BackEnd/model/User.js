const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema({
    name:
     { type: String,
         required: true },
    email:
     { type: String,
         required: true,
          unique: true },
    password:
     { type: String, 
        required: true },
    Type_of_User:{
        required:true,
        type:String,
        enum:['User','Earner']
    }
})


const UserModel = mongoose.model('users' , UserSchema);

module.exports = UserModel;