const Coupon = require("../model/OfferSchema");

// ✅ CREATE COUPON
const createCoupon = async (req, res) => {
  try {
    let { code, discountPercent, expiry } = req.body;

    // ✅ VALIDATION
    if (!code || !discountPercent || !expiry) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    // ✅ NORMALIZE CODE
    code = code.toUpperCase();

    // ❌ PREVENT DUPLICATE COUPON
    const existing = await Coupon.findOne({ code });
    if (existing) {
      return res.status(400).json({
        message: "Coupon already exists",
      });
    }

    const coupon = await Coupon.create({
      code,
      discountPercent,
      expiry,

      // ✅ IMPORTANT (for per-user usage tracking)
      usedBy: [],
    });

    res.status(201).json({
      message: "Coupon created successfully",
      coupon,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
// ✅ GET ALL COUPONS (without usedBy details)
const getAllCoupon = async (req, res) => {
  try {
    const CouponData = await Coupon.find().select("-usedBy");

    return res.status(200).json({
      message:
        CouponData.length === 0
          ? "No Coupon Present Yet"
          : "Coupon Data",
      count: CouponData.length,
      CouponData,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


const deleteCoupon = async (req,res)=>{
  try{
    const {id} = req.params;
    const deleted = await Coupon.findByIdAndDelete(id);
    if(!deleted){
      return res.status(404).json({ message: "Coupon not found" });
    }
    else{
      return res.status(200).json({ message: "Coupon deleted successfully" });
    }
  }
  catch(err){
    res.status(500).json({ error: err.message });
  }
}
module.exports = { createCoupon, getAllCoupon, deleteCoupon };