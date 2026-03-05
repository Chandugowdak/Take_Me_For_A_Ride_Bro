import React, { useState, useEffect } from "react";
import "./EarnFeatures.css";

const EarnFeatures = () => {
  const [selectedFeature, setSelectedFeature] = useState(null);

  const features = [
    {
      icon: "🏍️",
      title: "Add Your Vehicle",
      short: "Upload your vehicle details and get verified quickly.",
      details:
        "Add your bike, car, or scooty with complete details like RC number, insurance validity, vehicle number, and pricing. Our team verifies your vehicle before listing it publicly to ensure trust and safety.",
    },
    {
      icon: "📅",
      title: "Get Bookings",
      short: "Users nearby will book your vehicle instantly.",
      details:
        "After approval, users in your area can instantly view and book your vehicle. You can manage availability dates and booking requests directly from your dashboard.",
    },
    {
      icon: "💸",
      title: "Earn Money",
      short: "Earn for every successful rental and withdraw anytime.",
      details:
        "Earn money for each completed rental. Track total earnings and withdraw securely anytime to your bank account.",
    },
  ];

  useEffect(() => {
    if (selectedFeature) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [selectedFeature]);

  return (
    <>
      <section className="earn-features container mt-5">
        <div className="row justify-content-center gy-4">
          {features.map((feature, index) => (
            <div className="col-md-4" key={index}>
              <div
                className="feature-box"
                onClick={() => setSelectedFeature(feature)}
              >
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.short}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {selectedFeature && (
        <div
          className="modal-overlay"
          onClick={() => setSelectedFeature(null)}
        >
          <div
            className="modal-box"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="modal-close"
              onClick={() => setSelectedFeature(null)}
            >
              ✕
            </button>

            <h2>{selectedFeature.title}</h2>
            <div className="modal-divider"></div>
            <p>{selectedFeature.details}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default EarnFeatures;