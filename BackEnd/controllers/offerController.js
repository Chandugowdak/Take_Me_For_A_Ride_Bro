const Coupon = require("../model/OfferSchema");

// ✅ CREATE COUPON
const createCoupon = async (req, res) => {
  try {
    const { code, discountPercent, expiry } = req.body;

    // validation
    if (!code || !discountPercent || !expiry) {
      return res.status(400).json({
        message: "All fields are required"
      });
    }

    const coupon = await Coupon.create({
      code,
      discountPercent,
      expiry
    });

    res.status(201).json({
      message: "Coupon created successfully",
      coupon
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getAllCoupon  = async(req,res)=>{
  try{
    const CouponData = await Coupon.find();
    if(CouponData.length == 0){
      return res.status().json({message:"No Coupon Present Yet"})
    }else{
      return res.status(200).json({message:"Coupon Data" , CouponData});
    }
  }
  catch(err){
    res.status(500).json({error:err.message});
  }
}

module.exports = { createCoupon ,getAllCoupon};