import React from "react";
import "./HelpCenter.css";
import {
  FaUser,
  FaHandshake,
  FaMoneyBillWave,
  FaMotorcycle,
  FaHeadset,
  FaQuestionCircle
} from "react-icons/fa";

const HelpCenter = () => {
  return (
    <div className="help-page">

      {/* HERO SECTION */}
      <section className="help-hero text-center">
        <h1>Help Center</h1>
        <p>
          Find answers, guidance, and support for both Users and Earners —
          we are here to help you anytime.
        </p>
      </section>

      {/* QUICK SUPPORT */}
      <section className="container support-section">
        <div className="row text-center">
          <div className="col-md-4 mb-4">
            <div className="support-card">
              <FaHeadset />
              <h3>24/7 Support</h3>
              <p>Our support team is available round the clock.</p>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="support-card">
              <FaQuestionCircle />
              <h3>FAQs</h3>
              <p>Quick answers to common questions.</p>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="support-card">
              <FaHandshake />
              <h3>Trust & Safety</h3>
              <p>Secure rentals with verified users and earners.</p>
            </div>
          </div>
        </div>
      </section>

      {/* USER HELP */}
      <section className="container help-section">
        <h2 className="section-title">Help for Users</h2>
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="help-card">
              <FaUser />
              <h4>Account & Profile</h4>
              <p>Create, update, or manage your user profile easily.</p>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="help-card">
              <FaMotorcycle />
              <h4>Booking Vehicles</h4>
              <p>Search, book, and manage your rentals smoothly.</p>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="help-card">
              <FaMoneyBillWave />
              <h4>Payments & Refunds</h4>
              <p>Secure payments, invoices, and refund support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* EARNER HELP */}
      <section className="container help-section">
        <h2 className="section-title">Help for Earners</h2>
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="help-card">
              <FaMotorcycle />
              <h4>Listing Vehicles</h4>
              <p>Add, update, or manage your vehicle listings.</p>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="help-card">
              <FaHandshake />
              <h4>Rental Requests</h4>
              <p>Accept, reject, or manage rental requests.</p>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="help-card">
              <FaMoneyBillWave />
              <h4>Earnings & Payouts</h4>
              <p>Track your income and receive timely payouts.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact-section text-center">
        <h2>Still Need Help?</h2>
        <p>Reach out to our support team for personalized assistance.</p>
        <button className="btn-contact">Contact Support</button>
      </section>

    </div>
  );
};

export default HelpCenter;
