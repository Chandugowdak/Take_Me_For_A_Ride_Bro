import React from 'react';
import './EarnWithUs.css';
import {Link} from 'react-router-dom';

const EarnWithUs = () => {
  return (
    <div className="earn-with-us container-fluid py-5">
      {/* Hero Section */}
      <div className="container text-center mb-5">
        <h1 className="main-title">Earn With Us</h1>
        <p className="sub-title">
          Turn your vehicle into a steady income source by partnering with us.
        </p>
      </div>

      {/* Steps Section */}
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-4 col-md-6">
            <div className="earn-card">
              <div className="icon-circle">1</div>
              <h5>Register Your Vehicle</h5>
              <p>
                Add your bike or car to our platform with basic details and
                required documents.
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="earn-card">
              <div className="icon-circle">2</div>
              <h5>Get Verified</h5>
              <p>
                Our team verifies your vehicle and profile to ensure quality and
                safety standards.
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-12">
            <div className="earn-card">
              <div className="icon-circle">3</div>
              <h5>Start Earning</h5>
              <p>
                Your vehicle goes live on the platform and you earn for every
                successful booking.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="container benefits-section mt-5">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <h2 className="section-title">Why Partner With Us?</h2>
            <ul className="benefits-list">
              <li>✔ Monthly assured payouts</li>
              <li>✔ Transparent earning dashboard</li>
              <li>✔ Insurance & safety support</li>
              <li>✔ Zero marketing hassle</li>
            </ul>
          </div>

          <div className="col-lg-6 text-center">
            <div className="highlight-box">
              <h3>Earn More, Worry Less</h3>
              <p>
                We manage bookings, customers, and support while you enjoy a
                passive income.
              </p>
              <Link to="/" className="btn btn-warning btn-lg mt-3">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EarnWithUs;



