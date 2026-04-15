const mongoose = require("mongoose");

const investorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },

  phone: {
    type: String,
    required:true,
  },

  investment_Range: {
    type: String,
    required: true,
  },

  message: {
    type: String,
  },

}, { timestamps: true });

module.exports = mongoose.model("Investor", investorSchema);