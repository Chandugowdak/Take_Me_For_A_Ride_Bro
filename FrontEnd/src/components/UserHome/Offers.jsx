import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Offers.css";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Offers = () => {
  const [coupons, setCoupons] = useState([]);
  const JWT_TOCKEN = localStorage.getItem("JWT_Token");
  const navigate = useNavigate();

  useEffect(() => {
    loadCoupons();
  }, []);

  const loadCoupons = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/get/coupon");
      setCoupons(res.data.CouponData);
    } catch (err) {
      console.error(err);
    }
  };

  const handleCopy = (code) => {
    if(!JWT_TOCKEN){
      toast.warning("Please Login to Copy the Code")
     navigate('/');
    }else{
    navigator.clipboard.writeText(code);
    toast.success("Coupon copied!");
    }
  };

  return (
    <section className="promo-wrapper py-5">
      <div className="container">

        {/* Heading */}
        <div className="text-center mb-5">
          <h2 className="promo-title">Exclusive Deals</h2>
          <p className="promo-subtitle">
            Unlock savings on every ride 🚀
          </p>
        </div>

        {/* Cards */}
        <div className="row g-4">
          {coupons.map((item) => {
            const expired = new Date(item.expiry) < new Date();

            return (
              <div
                key={item._id}
                className="col-xl-4 col-lg-4 col-md-6 col-sm-12"
              >
                <div className="promo-card">

                  {/* Status Badge */}
                  <span className={`promo-status ${expired ? "promo-expired" : "promo-active"}`}>
                    {expired ? "Expired" : "Active"}
                  </span>

                  {/* Discount */}
                  <h5 className="promo-discount">
                    {item.discountPercent}% OFF
                  </h5>

                  {/* Expiry */}
                  <p className="promo-validity">
                    Valid till {new Date(item.expiry).toLocaleDateString()}
                  </p>

                  {/* Code Box */}
                  <div className="promo-code-area">
                    <span>{item.code}</span>
                    <button
                      onClick={() => handleCopy(item.code)}
                      disabled={expired}
                    >
                      Copy
                    </button>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Offers;