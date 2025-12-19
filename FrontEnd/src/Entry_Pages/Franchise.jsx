import React from 'react';
import './Franchise.css';
import {Link} from 'react-router-dom'

const Franchise = () => {
  return (
    <div className="franchise-section container-fluid py-5">
      {/* HERO */}
      <div className="container mb-5">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <h1 className="franchise-title">Partner With Us</h1>
            <p className="franchise-subtitle">
              Build a profitable rental business by owning a franchise with a
              trusted mobility brand.
            </p>
            <Link to="/" className="btn btn-warning btn-lg mt-3">
              Apply for Franchise
            </Link>
          </div>
          <div className="col-lg-6 text-center">
            <img
              src="https://img.etimg.com/thumb/msid-103326996,width-480,height-360,imgsize-103540,resizemode-75/bullet-350-launched.jpg"
              alt="Franchise"
              className="img-fluid hero-image"
            />
          </div>
        </div>
      </div>

      {/* WHY FRANCHISE */}
      <div className="container mb-5">
        <h2 className="section-title text-center mb-4">Why Choose Our Franchise?</h2>
        <div className="row g-4">
          <div className="col-md-6 col-lg-3">
            <div className="feature-card">
              <h5>Strong Brand</h5>
              <p>Leverage a trusted and fast-growing rental brand.</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="feature-card">
              <h5>Proven Model</h5>
              <p>Operate with a tested and profitable business framework.</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="feature-card">
              <h5>Tech Support</h5>
              <p>Access advanced dashboards, analytics, and booking systems.</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="feature-card">
              <h5>24×7 Assistance</h5>
              <p>Centralized customer and roadside support.</p>
            </div>
          </div>
        </div>
      </div>

      {/* HOW IT WORKS */}
      <div className="container mb-5">
        <h2 className="section-title text-center mb-4">How It Works</h2>
        <div className="row g-4">
          <div className="col-md-4">
            <div className="step-card">
              <span>1</span>
              <h6>Apply</h6>
              <p>Submit your franchise application with basic details.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="step-card">
              <span>2</span>
              <h6>Setup</h6>
              <p>We help you with location, vehicles, and onboarding.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="step-card">
              <span>3</span>
              <h6>Launch</h6>
              <p>Start operations and earn from day one.</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="container text-center">
        <div className="cta-box">
          <h3>Ready to Start Your Franchise Journey?</h3>
          <p>Join us and grow your business with confidence.</p>
          <Link to="/" className="btn btn-light btn-lg">Get Started</Link>
        </div>
      </div>
    </div>
  );
};

export default Franchise;



