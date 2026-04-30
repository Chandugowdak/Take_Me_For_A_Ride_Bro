const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
  senderPhone: {
    type: String,
    required: true
  },

  receiverPhone: {
    type: String,
    required: true
  },

  amount: {
    type: Number,
    required: true
  },

  status: {
    type: String,
    enum: ['SUCCESS', 'FAILED'],
    default: 'SUCCESS'
  }

}, { timestamps: true });

module.exports = mongoose.model('payments', paymentSchema);