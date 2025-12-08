const mongoose = require('mongoose');

const Rentel_Schema = new mongoose.Schema(
{
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: true
    },

    Vehical_Name: {
        type: String,
        required: true
    },

    Type_of_Vehical: {
        type: String,
        required: true,
        enum: ['Car', 'Bike', 'Scooty']
    },

    Image_URL: {
        type: String,
        required: true
    },

    Rentel_Date: {
        type: Date,
        required: true
    },

    Return_Date: {
        type: Date,
        required: true
    },

    Total_Amount: {
        type: Number,
        required: true
    }
},
{
    timestamps: true // ✅ REQUIRED for sorting
});

const Rent_Model = mongoose.model('rentels', Rentel_Schema);
module.exports = Rent_Model;
