const mongoose = require('mongoose');

const Request_Schema = new mongoose.Schema({
    // User who sends the request
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: true
    },

    // Vehicle
    rentalId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'rentels',
        required: true
    },

    // ✅ NEW: number of days user wants
    numberOfDays: {
        type: Number,
        required: true
    },

    // ✅ NEW: total amount (calculated when accepted)
    totalAmount: {
        type: Number,
        default: 0
    },

    // ✅ OPTIONAL BUT VERY IMPORTANT (real apps use this)
    startDate: {
        type: Date
    },

    endDate: {
        type: Date
    },

    // Request status
    status: {
        type: String,
        enum: ['pending', 'accepted', 'declined'],
        default: 'pending'
    }

}, { timestamps: true });

const Request_Model = mongoose.model('requests', Request_Schema);
module.exports = Request_Model;