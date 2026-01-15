import React from "react";
import "./HelpCenter.css";
import {
  FaUser,
  FaHandshake,
  FaMoneyBillWave,
  FaMotorcycle,
  FaHeadset,
  FaQuestionCircle,
  FaCar,
  FaWallet,
  FaTools
} from "react-icons/fa";

const HelpCenter = () => {
  return (
    <div className="help-page">

      {/* HERO SECTION */}
      <section className="help-hero text-center">
        <h1>Help Center</h1>
        <p>
          Need assistance? Find clear guidance, FAQs, and support for both Users and Earners.
          Our team is here to help you anytime, anywhere.
        </p>
      </section>

      {/* QUICK SUPPORT */}
      <section className="container support-section">
        <div className="row text-center">
          <div className="col-md-4 mb-4">
            <div className="support-card">
              <FaHeadset />
              <h3>24/7 Support</h3>
              <p>
                Reach out to our team at any time for assistance with bookings,
                payments, or account issues.
              </p>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="support-card">
              <FaQuestionCircle />
              <h3>FAQs</h3>
              <p>
                Find answers to common questions about rentals, earners, payments, and safety.
              </p>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="support-card">
              <FaHandshake />
              <h3>Trust & Safety</h3>
              <p>
                Secure rentals with verified users and earners. Guidelines to ensure a safe experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HELP FOR USERS */}
      <section className="container help-section">
        <h2 className="section-title">Help for Users</h2>
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="help-card">
              <FaUser />
              <h4>Account & Profile</h4>
              <p>
                Easily create, update, or manage your user profile, add payment methods, 
                and track activity history.
              </p>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="help-card">
              <FaMotorcycle />
              <h4>Booking Vehicles</h4>
              <p>
                Search vehicles, compare options, book instantly, and manage active rentals. 
                Learn how to extend or cancel bookings safely.
              </p>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="help-card">
              <FaMoneyBillWave />
              <h4>Payments & Refunds</h4>
              <p>
                Make secure payments, view invoices, request refunds, and track your transaction history.
              </p>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="help-card">
              <FaCar />
              <h4>Vehicle Guidelines</h4>
              <p>
                Learn how to inspect vehicles, report issues, and follow safe driving tips.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HELP FOR EARNERS */}
      <section className="container help-section">
        <h2 className="section-title">Help for Earners</h2>
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="help-card">
              <FaMotorcycle />
              <h4>Listing Vehicles</h4>
              <p>
                Add new vehicles, update details, set pricing, and ensure your listings are visible to users.
              </p>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="help-card">
              <FaHandshake />
              <h4>Rental Requests</h4>
              <p>
                Accept or reject rental requests, communicate with users, and track booking statuses efficiently.
              </p>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="help-card">
              <FaMoneyBillWave />
              <h4>Earnings & Payouts</h4>
              <p>
                Monitor your earnings, generate reports, and receive timely payouts directly to your account.
              </p>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="help-card">
              <FaTools />
              <h4>Vehicle Maintenance</h4>
              <p>
                Tips for maintaining vehicles, scheduling repairs, and ensuring top condition for users.
              </p>
            </div>
          </div>
        </div>
      </section>



    </div>
  );
};

export default HelpCenter;
