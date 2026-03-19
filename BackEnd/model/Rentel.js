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

    pricePerDay: {
        type: Number,
        required: true
    },

    vehicleNumber: {
        type: String,
        required: true
    },

    rcBookNumber: {
        type: String,
        required: true
    },

    insuranceEndingDate: {
        type: Date,
        required: true
    }

},
{
    timestamps: true
});

// ✅ CREATE MODEL
const Rent_Model = mongoose.model('rentels', Rentel_Schema);

// ✅ EXPORT MODEL
module.exports = Rent_Model;