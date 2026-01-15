import React from "react";
import "./About.css";
import {
  FaUsers,
  FaMotorcycle,
  FaCity,
  FaChartLine,
  FaHandshake,
  FaBuilding,
  FaUserTie,
  FaShieldAlt,
  FaRocket,
  FaHeadset
} from "react-icons/fa";

const About = () => {
  return (
    <div className="about-page">

      {/* HERO SECTION */}
      <section className="about-hero text-center">
        <h1>About Us</h1>
        <p>
          We are building a trusted rental ecosystem where users find reliable rides,
          earners generate steady income, and cities move smarter every day.
        </p>
      </section>

      {/* ABOUT CONTENT */}
      <section className="container about-content">
        <div className="row align-items-center">
          <div className="col-md-6 mb-4">
            <h2>Who We Are</h2>
            <p>
              We are a technology-driven rental platform designed to bridge the gap
              between vehicle owners and users seeking flexible, affordable mobility.
            </p>
            <p>
              Our goal is to simplify transportation while creating earning
              opportunities for individuals and businesses across multiple cities.
            </p>
            <ul className="about-list">
              <li>✔ Secure & verified rentals</li>
              <li>✔ Flexible pricing & durations</li>
              <li>✔ Easy onboarding for earners</li>
            </ul>
          </div>
          <div className="col-md-6 mb-4">
            <img
              src="https://t4.ftcdn.net/jpg/01/44/20/75/360_F_144207531_KzqS3rsRZaEL2sJ1y5nPe5JYeeP9bVvm.jpg"
              alt="about"
              className="img-fluid about-image"
            />
          </div>
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section className="achievement-section">
        <div className="container">
          <h2 className="section-title">Our Achievements</h2>
          <p className="text-center mb-4">
            In a short span, we have built a strong network of users, earners,
            and partners across the country.
          </p>
          <div className="row text-center">
            <div className="col-md-3 col-6 mb-4">
              <div className="achievement-card">
                <FaUsers />
                <h3>50K+</h3>
                <p>Active Users</p>
              </div>
            </div>
            <div className="col-md-3 col-6 mb-4">
              <div className="achievement-card">
                <FaMotorcycle />
                <h3>10K+</h3>
                <p>Vehicles Listed</p>
              </div>
            </div>
            <div className="col-md-3 col-6 mb-4">
              <div className="achievement-card">
                <FaCity />
                <h3>25+</h3>
                <p>Cities Operational</p>
              </div>
            </div>
            <div className="col-md-3 col-6 mb-4">
              <div className="achievement-card">
                <FaHandshake />
                <h3>15K+</h3>
                <p>Verified Earners</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTRIBUTION */}
      <section className="container contribution-section">
        <h2 className="section-title">Our Contribution</h2>
        <p className="text-center mb-4">
          Our platform goes beyond rentals — we contribute to economic empowerment
          and sustainable mobility.
        </p>
        <div className="row text-center">
          <div className="col-md-4 mb-3">
            <FaRocket className="contribution-icon" />
            <p>Boosting local entrepreneurship</p>
          </div>
          <div className="col-md-4 mb-3">
            <FaShieldAlt className="contribution-icon" />
            <p>Ensuring safety & trust in every ride</p>
          </div>
          <div className="col-md-4 mb-3">
            <FaHeadset className="contribution-icon" />
            <p>24/7 customer & earner support</p>
          </div>
        </div>
      </section>

      {/* FRANCHISE */}
      <section className="franchise-section">
        <div className="container">
          <h2 className="section-title">Franchise Opportunities</h2>
          <div className="row align-items-center">
            <div className="col-md-6 mb-4">
              <p>
                Our franchise model enables partners to launch and scale rental
                operations in their city with minimal risk.
              </p>
              <ul className="about-list">
                <li>✔ End-to-end technology support</li>
                <li>✔ Marketing & branding assistance</li>
                <li>✔ Operational training & onboarding</li>
                <li>✔ Revenue sharing model</li>
              </ul>
            </div>
            <div className="col-md-6 mb-4 text-center">
              <FaBuilding className="big-icon" />
            </div>
          </div>
        </div>
      </section>

      {/* INVESTORS */}
      <section className="container investor-section">
        <h2 className="section-title">Our Investors & Partners</h2>
        <p className="text-center mb-4">
          Backed by experienced investors and advisors who believe in our vision.
        </p>
        <div className="row text-center">
          <div className="col-md-4 mb-4">
            <div className="investor-card">
              <FaUserTie />
              <h4>Angel Investors</h4>
              <p>Early-stage funding & mentorship</p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="investor-card">
              <FaUserTie />
              <h4>VC Partners</h4>
              <p>Growth, expansion & scale support</p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="investor-card">
              <FaUserTie />
              <h4>Strategic Advisors</h4>
              <p>Industry knowledge & market insights</p>
            </div>
          </div>
        </div>
      </section>

      {/* GROWTH */}
      <section className="growth-section">
        <div className="container text-center">
          <h2 className="section-title">Our Growth Journey</h2>
          <FaChartLine className="growth-icon" />
          <p className="mt-3">
            We are expanding rapidly with new cities, increasing vehicle listings,
            and growing user trust every month — driven by innovation and community.
          </p>
        </div>
      </section>

    </div>
  );
};

export default About;
