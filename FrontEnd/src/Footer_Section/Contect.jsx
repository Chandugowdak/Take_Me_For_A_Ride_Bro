import React, { useState } from "react";
import axios from "axios";
import "./Content.css";
import {
  FaHeadset,
  FaEnvelope,
  FaMapMarkerAlt,
  FaMotorcycle,
  FaCar,
  FaUserShield,
  FaHandshake,
  FaPaperPlane,
} from "react-icons/fa";

const Contect = () => {
  const [formData, setFormData] = useState({
    SenderName: "",
    SenderEmail: "",
    IssueType: "",
    Message: "",
  });

  const [loading, setLoading] = useState(false);

  // ✅ Handle Input Change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // ✅ Submit Form
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.SenderName || !formData.SenderEmail || !formData.IssueType) {
      alert("Please fill all required fields");
      return;
    }

    try {
      setLoading(true);

      const res = await axios.post(
        "http://localhost:3000/api/user/support/send/mail",
        formData,
      );
      if (res.message == "No user found with this email") {
        alert(
          "No user found with this email. Please use the email associated with your account.",
        );
      } else {
        alert(res.data.message);
      }

      // ✅ Reset form
      setFormData({
        SenderName: "",
        SenderEmail: "",
        IssueType: "",
        Message: "",
      });
    } catch (error) {
      console.error(error);
      alert(error.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-page">
      {/* HERO */}
      <section className="contact-hero text-center">
        <h1>Contact & Support</h1>
        <p>
          Have questions, issues, or suggestions? We’re always here to help you
          with a smooth rental experience.
        </p>
      </section>

      {/* SUPPORT OPTIONS */}
      <section className="container support-info">
        <div className="row text-center">
          <div className="col-md-3 mb-4">
            <div className="info-card">
              <FaHeadset />
              <h4>24/7 Support</h4>
              <p>Instant help for users & earners anytime.</p>
            </div>
          </div>

          <div className="col-md-3 mb-4">
            <div className="info-card">
              <FaUserShield />
              <h4>Safety & Trust</h4>
              <p>Verified users, secure rentals & guidelines.</p>
            </div>
          </div>

          <div className="col-md-3 mb-4">
            <div className="info-card">
              <FaHandshake />
              <h4>Business Queries</h4>
              <p>Franchise, partnership & collaboration.</p>
            </div>
          </div>

          <div className="col-md-3 mb-4">
            <div className="info-card">
              <FaMotorcycle />
              <h4>Rental Help</h4>
              <p>Booking, cancellation & vehicle issues.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="container contact-form-section">
        <div className="row align-items-center">
          {/* FORM */}
          <div className="col-md-7 mb-4">
            <div className="contact-form-card">
              <h2>Report a Problem</h2>

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <input
                    type="text"
                    name="SenderName"
                    value={formData.SenderName}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Your Full Name"
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="email"
                    name="SenderEmail"
                    value={formData.SenderEmail}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Your Email Address"
                  />
                </div>

                <div className="mb-3">
                  <select
                    name="IssueType"
                    value={formData.IssueType}
                    onChange={handleChange}
                    className="form-control"
                  >
                    <option value="">Select Issue Type</option>
                    <option>Booking Issue</option>
                    <option>Payment / Refund</option>
                    <option>Vehicle Issue</option>
                    <option>Account Problem</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="mb-3">
                  <textarea
                    name="Message"
                    value={formData.Message}
                    onChange={handleChange}
                    rows="4"
                    className="form-control"
                    placeholder="Describe your problem..."
                  ></textarea>
                </div>

                <button type="submit" className="btn-send">
                  {loading ? (
                    "Sending..."
                  ) : (
                    <>
                      <FaPaperPlane /> Submit Request
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* CONTACT DETAILS (unchanged) */}
          <div className="col-md-5 mb-4">
            <div className="contact-details-card">
              <h2>Get in Touch</h2>

              <div className="detail-item">
                <FaEnvelope />
                <span>chandugowdaks12@gmail.com</span>
              </div>

            

              <div className="detail-item">
                <FaMapMarkerAlt />
                <span>Mysuru, Karnataka, India</span>
              </div>

              <div className="detail-item">
                <FaCar />
                <span>Bike & Car Rental Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contect;
