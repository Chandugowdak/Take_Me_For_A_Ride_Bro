import React from "react";
import "./ExploreInvestment.css";
import { useNavigate } from "react-router-dom";
import {toast} from "react-toastify";


const ExploreInvestment = () => {
  const navigate = useNavigate();

  const handleExplore = () => {
    navigate("/Investor/own");
    toast.info("🚀 Navigated to Investor Page!");
  }
  return (
    <div className="explore-wrapper container-fluid py-5">

      {/* HERO */}
      <div className="container text-center hero-section mb-5">
        <h1 className="main-title">Fuel the Future of Mobility 🚀</h1>
        <p className="main-subtitle">
          We are building a next-generation rental platform transforming how India moves.
          Join us early and be part of exponential growth.
        </p>
      </div>

      {/* ABOUT */}
      <div className="container mb-5">
        <div className="row align-items-center g-4">
          <div className="col-md-6">
            <div className="about-box">
              <h3>What We Are Building</h3>
              <p>
                Our platform connects users with affordable, accessible, and reliable vehicles
                through a seamless digital experience. We aim to solve urban mobility challenges
                by offering flexible rental solutions for daily commuters, travelers, and businesses.
              </p>
              <p>
                With increasing fuel costs and vehicle ownership challenges, the shift towards
                shared mobility is accelerating — and we are positioned at the center of this transformation.
              </p>
            </div>
          </div>

          <div className="col-md-6 text-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt="startup"
              className="img-fluid about-img"
            />
          </div>
        </div>
      </div>

      {/* WHY INVEST (DETAILED) */}
      <div className="container mb-5">
        <h2 className="section-title text-center mb-4">
          Why Invest With Us?
        </h2>

        <div className="why-invest">

          <div className="why-item">
            <h5>📈 Massive Market Opportunity</h5>
            <p>
              India's mobility market is growing rapidly, especially in tier-2 and tier-3 cities.
              With low penetration of organized rental services, the opportunity for disruption is huge.
            </p>
          </div>

          <div className="why-item">
            <h5>🚗 Proven Demand</h5>
            <p>
              Increasing urbanization, tourism, and gig economy workers are driving consistent demand
              for affordable and flexible transportation options.
            </p>
          </div>

          <div className="why-item">
            <h5>⚙️ Scalable & Asset-Light Model</h5>
            <p>
              Our platform focuses on partnerships and smart fleet utilization, allowing us to scale
              quickly without heavy capital investment in assets.
            </p>
          </div>

          <div className="why-item">
            <h5>💡 Technology Advantage</h5>
            <p>
              We leverage real-time tracking, smart booking systems, and data analytics to optimize
              pricing, availability, and customer experience.
            </p>
          </div>

          <div className="why-item">
            <h5>🌍 Expansion Ready</h5>
            <p>
              Our system is designed for rapid expansion across multiple cities with minimal setup,
              making growth faster and more efficient.
            </p>
          </div>

        </div>
      </div>

      {/* BUSINESS STRATEGY (REPLACED MODEL) */}
      <div className="container mb-5">
        <h2 className="section-title text-center mb-4">
          How We Grow
        </h2>

        <div className="row g-4">

          <div className="col-md-4">
            <div className="strategy-card">
              <h6>🚀 City Expansion</h6>
              <p>
                We strategically launch in high-demand cities and expand using data-driven insights.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="strategy-card">
              <h6>🤝 Partnerships</h6>
              <p>
                Collaborating with local vehicle owners and businesses to grow supply rapidly.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="strategy-card">
              <h6>📢 Smart Marketing</h6>
              <p>
                Digital campaigns, referrals, and offers to acquire and retain customers efficiently.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* RENTAL APP (DETAILED) */}
      <div className="container mb-5">
        <h2 className="section-title text-center mb-4">
          Our Rental Platform
        </h2>

        <div className="app-details">

          <div className="app-item">
            <h6>📱 Seamless User Experience</h6>
            <p>
              Our app provides a smooth and intuitive interface where users can browse,
              select, and book vehicles within seconds.
            </p>
          </div>

          <div className="app-item">
            <h6>⚡ Real-Time Availability</h6>
            <p>
              Live tracking ensures users always see updated vehicle availability,
              reducing wait time and improving reliability.
            </p>
          </div>

          <div className="app-item">
            <h6>🔐 Secure & Flexible Payments</h6>
            <p>
              Multiple payment options with complete security and transparency,
              building trust with every transaction.
            </p>
          </div>

          <div className="app-item">
            <h6>📊 Data-Driven Optimization</h6>
            <p>
              We use analytics to improve pricing, demand forecasting, and customer satisfaction.
            </p>
          </div>

        </div>
      </div>

      {/* FINAL CTA */}
      <div className="container text-center">
        <div className="final-cta">
          <h2>Be Part of the Growth Story</h2>
          <p>
            This is your chance to invest early in a scalable mobility platform
            with long-term vision and strong market demand.
          </p>

          <button className="btn btn-warning btn-lg mt-3 final-btn"
          onClick={handleExplore}
          >
            Invest Now 🚀
          </button>
        </div>
      </div>

    </div>
  );
};

export default ExploreInvestment;