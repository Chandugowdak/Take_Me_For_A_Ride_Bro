import React, { useState } from "react";
import "./Investor.css";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Investor = () => {
  const navigate = useNavigate();

  const handleExplore = () => {
    navigate("/explore/investment");
  };

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    investment_Range: "",   // ✅ UPDATED
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  // ✅ Validation
  if (
    !formData.name ||
    !formData.email ||
    !formData.phone ||
    !formData.investment_Range
  ) {
    toast.error("⚠️ Please fill all required fields!");
    return;
  }

  // ✅ Email validation
  if (!/\S+@\S+\.\S+/.test(formData.email)) {
    toast.error("Invalid email format!");
    return;
  }

  // ✅ Phone validation (India)
  if (!/^[6-9]\d{9}$/.test(formData.phone)) {
    toast.error("Invalid phone number!");
    return;
  }

  try {
    setLoading(true);

    const res = await axios.post(
      "http://localhost:3000/api/create/investment", // ✅ correct backend port + route
      formData
    );

    const data = res.data;

    if (data.success) {
     toast.success("🚀 Request submitted! Our team will contact you soon.");

      // ✅ Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        investment_Range: "",
        message: "",
      });
    } else {
      toast.error(data.message || "Something went wrong!");
    }

  } catch (error) {
    console.error(error);

    // ✅ Better error handling
    if (error.response) {
      toast.error(error.response.data.message);
    } else {
      toast.error("🔥 Server not responding!");
    }

  } finally {
    setLoading(false);
  }
};

  return (
    <div className="investor-section container-fluid py-5">
      {/* HERO */}
      <div className="container mb-5">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-4">
            <h1 className="investor-title">Become an Investor</h1>
            <p className="investor-subtitle">
              Partner with us and be part of a fast-growing mobility startup.
              Invest smart, earn big, and grow with innovation.
            </p>
            <button
              className="btn btn-warning btn-lg mt-3 glow-btn"
              onClick={handleExplore}
            >
              Explore Investment
            </button>
          </div>

          <div className="col-lg-6 text-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt="Investor"
              className="img-fluid investor-image"
            />
          </div>
        </div>
      </div>

      {/* FORM */}
      <div className="container">
        <div className="form-box">
          <h3 className="text-center mb-4">Contact Us</h3>

          <form onSubmit={handleSubmit}>
            <div className="row g-3">
              <div className="col-md-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name *"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>

              <div className="col-md-6">
                <input
                  type="email"
                  name="email"
                  placeholder="Email *"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>

              <div className="col-md-6">
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone Number *"
                  value={formData.phone}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>

              <div className="col-md-6">
                <select
                  name="investment_Range"   // ✅ UPDATED
                  value={formData.investment_Range}
                  onChange={handleChange}
                  className="form-control"
                >
                  <option value="">Investment Range *</option>
                  <option>₹50K - ₹1L</option>
                  <option>₹1L - ₹5L</option>
                  <option>₹5L - ₹10L</option>
                  <option>₹10L+</option>
                </select>
              </div>

              <div className="col-12">
                <textarea
                  name="message"
                  rows="4"
                  placeholder="Message (Optional)"
                  value={formData.message}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>

              <div className="col-12 text-center">
                <button
                  type="submit"
                  className="btn btn-dark submit-btn"
                  disabled={loading}
                >
                  {loading ? "Submitting..." : "Submit Request 🚀"}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Investor;