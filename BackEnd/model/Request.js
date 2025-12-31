const mongoose = require('mongoose');

const Request_Schema = new mongoose.Schema({
    // User who sends the request
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: true
    },

    // Rental being requested (this already knows the Earner)
    rentalId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'rentels',
        required: true
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
