import React from "react";
import "./About.css";
import {
  FaUsers,
  FaMotorcycle,
  FaCity,
  FaChartLine,
  FaHandshake,
  FaBuilding,
  FaUserTie
} from "react-icons/fa";

const About = () => {
  return (
    <div className="about-page">

      {/* HERO SECTION */}
      <section className="about-hero text-center">
        <h1>About Us</h1>
        <p>
          We are building a trusted rental ecosystem where users find reliable rides
          and earners grow their income effortlessly.
        </p>
      </section>

      {/* ABOUT CONTENT */}
      <section className="container about-content">
        <div className="row align-items-center">
          <div className="col-md-6 mb-4">
            <h2>Who We Are</h2>
            <p>
              Our platform connects vehicle owners with users looking for affordable
              and flexible rentals. We focus on trust, safety, and seamless experience
              for both users and earners.
            </p>
          </div>
          <div className="col-md-6 mb-4">
            <img
              src="https://images.unsplash.com/photo-1529070538774-1843cb3265df"
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
          <div className="row text-center">
            <div className="col-md-3 col-6 mb-4">
              <div className="achievement-card">
                <FaUsers />
                <h3>50K+</h3>
                <p>Happy Users</p>
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
                <p>Cities Covered</p>
              </div>
            </div>
            <div className="col-md-3 col-6 mb-4">
              <div className="achievement-card">
                <FaHandshake />
                <h3>15K+</h3>
                <p>Earners Joined</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTRIBUTION */}
      <section className="container contribution-section">
        <h2 className="section-title">Our Contribution</h2>
        <p className="text-center">
          We empower vehicle owners to earn consistently while providing affordable
          and accessible transportation solutions to users.
        </p>
      </section>

      {/* FRANCHISE */}
      <section className="franchise-section">
        <div className="container">
          <h2 className="section-title">Franchise Opportunities</h2>
          <div className="row">
            <div className="col-md-6 mb-4">
              <p>
                Join our franchise program and expand the rental ecosystem in your
                city with full support, technology, and branding from us.
              </p>
            </div>
            <div className="col-md-6 mb-4 text-center">
              <FaBuilding className="big-icon" />
            </div>
          </div>
        </div>
      </section>

      {/* INVESTORS */}
      <section className="container investor-section">
        <h2 className="section-title">Our Investors</h2>
        <div className="row text-center">
          <div className="col-md-4 mb-4">
            <div className="investor-card">
              <FaUserTie />
              <h4>Angel Investors</h4>
              <p>Early-stage funding support</p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="investor-card">
              <FaUserTie />
              <h4>VC Partners</h4>
              <p>Growth and expansion capital</p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="investor-card">
              <FaUserTie />
              <h4>Strategic Advisors</h4>
              <p>Industry expertise & guidance</p>
            </div>
          </div>
        </div>
      </section>

      {/* GROWTH */}
      <section className="growth-section">
        <div className="container text-center">
          <h2 className="section-title">Our Growth</h2>
          <FaChartLine className="growth-icon" />
          <p>
            Growing rapidly with increasing users, vehicles, and city expansions
            every month.
          </p>
        </div>
      </section>

    </div>
  );
};

export default About;
