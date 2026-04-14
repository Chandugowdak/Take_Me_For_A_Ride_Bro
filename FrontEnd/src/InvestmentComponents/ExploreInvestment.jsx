import React from "react";
import "./ExploreInvestment.css";

const ExploreInvestment = () => {
  return (
    <div className="explore-wrapper container-fluid py-5">

      {/* HERO */}
      <div className="container text-center hero mb-5">
        <h1 className="title">Invest in the Future 🚀</h1>
        <p className="subtitle">
          Smart mobility startup with scalable growth and strong returns.
        </p>
      </div>

      {/* ABOUT */}
      <div className="container mb-5">
        <div className="row align-items-center">
          <div className="col-md-6 text-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt="img"
              className="hero-img"
            />
          </div>

          <div className="col-md-6">
            <div className="card-custom">
              <h3>About Startup</h3>
              <p>
                We provide smart vehicle rentals using modern technology,
                focusing on scalability and user experience.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* FEATURES */}
      <div className="container mb-5">
        <h2 className="section-title text-center mb-4">Why Invest?</h2>

        <div className="row g-4">
          {["High Growth 📈", "Untapped Market 🚗", "Tech Driven 💡"].map((item, i) => (
            <div className="col-md-4" key={i}>
              <div className="card-hover">
                <h5>{item}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MODEL */}
      <div className="container mb-5">
        <h2 className="section-title text-center mb-4">Business Model</h2>

        <div className="row g-4">
          <div className="col-md-6">
            <div className="model-box">
              <h5>Revenue</h5>
              <ul>
                <li>Rentals</li>
                <li>Subscriptions</li>
                <li>Premium</li>
              </ul>
            </div>
          </div>

          <div className="col-md-6">
            <div className="model-box">
              <h5>Growth</h5>
              <ul>
                <li>City Expansion</li>
                <li>Franchise</li>
                <li>Marketing</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="container text-center">
        <div className="cta-box">
          <h2>Strong ROI Potential 💰</h2>
          <p>Consistent growth with scalable model.</p>
          <button className="btn-invest">Invest Now</button>
        </div>
      </div>

    </div>
  );
};

export default ExploreInvestment;

