import React from "react";
import "./Footer.css";
import { FaInstagram, FaFacebook, FaTwitter, FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="container">

        <div className="row justify-content-between">

          {/* COMPANY INFO */}
          <div className="col-md-4 col-12 mb-4">
            <h4 className="footer-title">Bike Rental Platform</h4>
            <p className="footer-text">
              Rent bikes easily. Earn money by listing your bike.  
              Safe • Fast • Trusted by riders.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div className="col-md-3 col-6 mb-4">
            <h5 className="footer-subtitle">Quick Links</h5>
            <ul className="footer-links">
              <li>About Us</li>
              <li>Contact</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          {/* SUPPORT */}
          <div className="col-md-3 col-6 mb-4">
            <h5 className="footer-subtitle">Support</h5>
            <ul className="footer-links">
              <li>How It Works</li>
              <li>Help Center</li>
              <li>Rent a Bike</li>
              <li>Become an Earner</li>
            </ul>
          </div>

          {/* SOCIAL + PHONE */}
          <div className="col-md-2 col-12 mb-4 text-md-start text-center">
            <h5 className="footer-subtitle">Follow Us</h5>
            <div className="footer-social">
              <FaInstagram />
              <FaFacebook />
              <FaTwitter />
            </div>

            <h6 className="footer-subtitle mt-3">Customer Care</h6>
            <p className="footer-phone"><FaPhoneAlt /> +91 98765 43210</p>
          </div>

        </div>

        <hr className="footer-line" />

        <p className="footer-bottom-text">
          © {new Date().getFullYear()} Bike Rental Platform — All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
