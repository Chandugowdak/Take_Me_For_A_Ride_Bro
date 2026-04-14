import React, {  useState } from "react";
import "./Investor.css";
import { toast } from "react-toastify";
import {useNavigate} from 'react-router-dom';

const Investor = () => {

  const navigate = useNavigate();
  const handleExplore = () => {
    navigate('/explore/investment');
  }
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    investment: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.investment) {
      toast.error("Please fill all required fields!");
      return;
    }

    // 🔥 You can connect backend API here
    console.log(formData);

    toast.success("🚀 Investment request submitted successfully!");
    setFormData({
      name: "",
      email: "",
      phone: "",
      investment: "",
      message: "",
    });
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
            <button className="btn btn-warning btn-lg mt-3 glow-btn"
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

      {/* BENEFITS */}
      <div className="container mb-5">
        <h2 className="section-title text-center mb-4">
          Why Invest With Us?
        </h2>

        <div className="row g-4">
          <div className="col-md-6 col-lg-3">
            <div className="benefit-card">
              <h5>High Growth</h5>
              <p>Rapidly expanding rental market with huge demand.</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="benefit-card">
              <h5>Scalable Model</h5>
              <p>Business model designed for nationwide expansion.</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="benefit-card">
              <h5>Tech Driven</h5>
              <p>Powered by modern technology & analytics.</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="benefit-card">
              <h5>Secure Returns</h5>
              <p>Transparent investment with promising ROI.</p>
            </div>
          </div>
        </div>
      </div>

      {/* PROCESS */}
      <div className="container mb-5">
        <h2 className="section-title text-center mb-4">
          Investment Process
        </h2>

        <div className="row g-4">
          <div className="col-md-4">
            <div className="step-card">
              <span>1</span>
              <h6>Submit Interest</h6>
              <p>Fill the form and show your interest.</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="step-card">
              <span>2</span>
              <h6>Discussion</h6>
              <p>Our team connects with investment details.</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="step-card">
              <span>3</span>
              <h6>Invest & Grow</h6>
              <p>Start your journey as an investor.</p>
            </div>
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
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>

              <div className="col-md-6">
                <select
                  name="investment"
                  value={formData.investment}
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
                <button type="submit" className="btn btn-dark submit-btn">
                  Submit Request 🚀
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