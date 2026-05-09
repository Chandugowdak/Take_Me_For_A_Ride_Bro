const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: { 
        type: String,
        required: true 
    },

    email: { 
        type: String,
        required: true,
        unique: true 
    },

    password: { 
        type: String, 
        required: true 
    },

    Type_of_User:{
        required: true,
        type: String,
        enum: ['User','Earner','admin']
    },

    
   phone: {
    type: String,
    required: true,
    unique: true, 
    match: [/^[0-9]{10}$/, "Enter valid phone number"]
}
});

const UserModel = mongoose.model('users', UserSchema);

module.exports = UserModel;