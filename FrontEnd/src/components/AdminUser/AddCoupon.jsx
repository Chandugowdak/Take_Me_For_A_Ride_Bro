// AddCoupon.jsx

import React, { useState, useContext } from "react";
import axios from "axios";
import "./AddCoupon.css";
import { GlobelValue } from "../../context/GlobelVariable";

const AddCoupon = () => {

  const { JWT_Token } = useContext(GlobelValue);

  const [formData, setFormData] = useState({
    code: "",
    discountPercent: "",
    expiry: "",
  });

  const [loading, setLoading] = useState(false);

  // ================= HANDLE CHANGE =================

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // ================= SUBMIT =================

  const handleSubmit = async (e) => {
    e.preventDefault();
   
    try {

      setLoading(true);

      const res = await axios.post(
        "http://localhost:3000/api/create/coupon",
        formData,
        {
          headers: {
            Authorization: `Bearer ${JWT_Token}`,
          },
        }
      );

      alert(res.data.message);

      // ================= RESET FORM =================

      setFormData({
        code: "",
        discountPercent: "",
        expiry: "",
      });

    } catch (err) {

      alert(
        err.response?.data?.message || "Something went wrong"
      );

    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="coupon-page">

      <div className="coupon-card">

        <h2 className="coupon-title">
          Create New Coupon 🎉
        </h2>

        <p className="coupon-subtitle">
          Add discount coupons for users quickly and easily.
        </p>

        <form onSubmit={handleSubmit}>

          {/* ================= COUPON CODE ================= */}

          <div className="coupon-group">

            <label className="coupon-label">
              Coupon Code
            </label>

            <input
              type="text"
              name="code"
              className="coupon-input"
              placeholder="Enter Coupon Code"
              value={formData.code}
              onChange={handleChange}
              required
            />

          </div>

          {/* ================= DISCOUNT ================= */}

          <div className="coupon-group">

            <label className="coupon-label">
              Discount Percentage
            </label>

            <input
              type="number"
              name="discountPercent"
              className="coupon-input"
              placeholder="Enter Discount %"
              value={formData.discountPercent}
              onChange={handleChange}
              required
            />

          </div>

          {/* ================= EXPIRY ================= */}

          <div className="coupon-group">

            <label className="coupon-label">
              Expiry Date
            </label>

            <input
              type="date"
              name="expiry"
              className="coupon-input"
              value={formData.expiry}
              onChange={handleChange}
              required
            />

          </div>

          {/* ================= BUTTON ================= */}

          <button
            type="submit"
            className="coupon-btn"
            disabled={loading}
          >
            {loading ? "Creating..." : "Create Coupon"}
          </button>

        </form>

      </div>

    </div>
  );
};

export default AddCoupon;