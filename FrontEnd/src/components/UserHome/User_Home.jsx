import React, { useContext } from "react";
import { GlobelValue } from "../../context/GlobelVariable";
import "./User_Home.css";
import Layout from "../../Layout_Section/Layout";

const User_Home = () => {
  const { JWT_Token } = useContext(GlobelValue);

  return (
    <div className="user-home-container">


      {/* HERO SECTION */}
      <section className="user-hero container">
        <h1 className="user-title">Find Your Perfect Ride</h1>
        <p className="user-desc">
          Rent a bike anytime, anywhere — fast, affordable & reliable.
        </p>

        {/* Search Bar */}
        <div className="search-box shadow-sm">
          <input
            type="text"
            className="form-control search-input"
            placeholder="Search Bike, Location..."
          />
          <button className="btn btn-primary search-btn">Search</button>
        </div>
      </section>

      {/* POPULAR RENTAL OPTIONS */}
      <section className="popular-bikes container mt-5">
        <h2 className="section-heading text-center">Popular Bikes</h2>

        <div className="row mt-4 gy-4 justify-content-center">

          {["Royal Enfield", "Honda Activa", "KTM Duke"].map((bike, index) => (
            <div className="col-md-4" key={index}>
              <div className="bike-card shadow-sm">
                <div className="bike-image"></div>
                <h4 className="bike-name">{bike}</h4>
                <p className="bike-price">₹350 / day</p>
                <button className="btn btn-outline-primary rent-btn">
                  Rent Now
                </button>
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="how-works container mt-5">
        <h2 className="section-heading text-center">How Renting Works</h2>

        <div className="row mt-4 gy-4 justify-content-center">

          <div className="col-md-3">
            <div className="step-card shadow-sm">
              <div className="step-icon">📍</div>
              <h5>1. Search</h5>
              <p>Find bikes available near your area.</p>
            </div>
          </div>

          <div className="col-md-3">
            <div className="step-card shadow-sm">
              <div className="step-icon">📄</div>
              <h5>2. Book</h5>
              <p>Select a bike and confirm your booking instantly.</p>
            </div>
          </div>

          <div className="col-md-3">
            <div className="step-card shadow-sm">
              <div className="step-icon">🏍️</div>
              <h5>3. Ride</h5>
              <p>Pick up the bike and enjoy your ride.</p>
            </div>
          </div>

        </div>
      </section>

      {/* Optional JWT Display */}
      <p className="token-display">{JWT_Token}</p>

    </div>
  );
};

export default User_Home;
