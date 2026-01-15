import React from "react";
import "./Content.css";
import {
  FaHeadset,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaMotorcycle,
  FaCar,
  FaUserShield,
  FaHandshake,
  FaPaperPlane
} from "react-icons/fa";

const Contect = () => {
  return (
    <div className="contact-page">

      {/* HERO */}
      <section className="contact-hero text-center">
        <h1>Contact & Support</h1>
        <p>
          Have questions, issues, or suggestions?  
          We’re always here to help you with a smooth rental experience.
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
              <p>
                Facing any issue with booking, payments, vehicles, or account?  
                Fill out the form and our team will get back to you shortly.
              </p>

              <form>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Full Name"
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Your Email Address"
                  />
                </div>

                <div className="mb-3">
                  <select className="form-control">
                    <option>Select Issue Type</option>
                    <option>Booking Issue</option>
                    <option>Payment / Refund</option>
                    <option>Vehicle Issue</option>
                    <option>Account Problem</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="mb-3">
                  <textarea
                    rows="4"
                    className="form-control"
                    placeholder="Describe your problem..."
                  ></textarea>
                </div>

                <button type="submit" className="btn-send">
                  <FaPaperPlane /> Submit Request
                </button>
              </form>
            </div>
          </div>

          {/* CONTACT DETAILS */}
          <div className="col-md-5 mb-4">
            <div className="contact-details-card">
              <h2>Get in Touch</h2>

              <div className="detail-item">
                <FaEnvelope />
                <span>support@takemeforaride.com</span>
              </div>

              <div className="detail-item">
                <FaPhoneAlt />
                <span>+91 98765 43210</span>
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
