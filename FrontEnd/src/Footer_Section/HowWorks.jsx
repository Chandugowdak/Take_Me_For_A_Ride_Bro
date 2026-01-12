import React from "react";
import "./HowWorks.css";
import { FaUser, FaMotorcycle, FaCar, FaHandshake, FaDollarSign, FaClock } from "react-icons/fa";

const HowWorks = () => {
  const userSteps = [
    { icon: <FaUser />, title: "Sign Up", content: "Create your account as a User quickly and securely." },
    { icon: <FaCar />, title: "Choose Vehicle", content: "Browse and select the vehicle you want to rent." },
    { icon: <FaDollarSign />, title: "Make Payment", content: "Pay securely through multiple payment options." },
    { icon: <FaClock />, title: "Enjoy Rental", content: "Use the vehicle for the duration of your booking." },
  ];

  const earnerSteps = [
    { icon: <FaUser />, title: "Sign Up as Earner", content: "Register your profile to start renting your vehicles." },
    { icon: <FaMotorcycle />, title: "List Vehicle", content: "Add your bike, car or other vehicles with details and price." },
    { icon: <FaHandshake />, title: "Connect with Users", content: "Accept rental requests and communicate with users." },
    { icon: <FaDollarSign />, title: "Receive Payments", content: "Get your earnings safely through our secure platform." },
  ];

  return (
    <div className="how-page">
      <div className="hero-section text-center">
        <h1>How It Works</h1>
        <p>Step by step guide for both Users and Earners to enjoy our platform smoothly.</p>
      </div>

      {/* ---------------- USER STEPS ---------------- */}
      <div className="section-container container">
        <h2 className="section-title text-center">For Users</h2>
        <div className="row justify-content-center mt-4">
          {userSteps.map((step, index) => (
            <div className="col-md-6 col-lg-3 mb-4" key={index}>
              <div className="step-card animate__animated animate__fadeInUp">
                <div className="step-icon">{step.icon}</div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-content text-dark">{step.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ---------------- EARNER STEPS ---------------- */}
      <div className="section-container container mt-5">
        <h2 className="section-title text-center">For Earners</h2>
        <div className="row justify-content-center mt-4">
          {earnerSteps.map((step, index) => (
            <div className="col-md-6 col-lg-3 mb-4" key={index}>
              <div className="step-card animate__animated animate__fadeInUp">
                <div className="step-icon">{step.icon}</div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-content text-dark">{step.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowWorks;
