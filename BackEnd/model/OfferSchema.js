const mongoose = require("mongoose");

const couponSchema = new mongoose.Schema({
  code: {
    type: String,
    required: true,
    unique: true,
    uppercase: true
  },
  discountPercent: {
    type: Number,
    required: true
  },
  expiry: {
    type: Date,
    required: true
  } ,
  // ✅ NEW FIELD
  usedBy: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ]
});

module.exports = mongoose.model("Coupon", couponSchema);