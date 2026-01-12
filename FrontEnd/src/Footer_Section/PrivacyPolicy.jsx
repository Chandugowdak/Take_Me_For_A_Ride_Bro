import React from "react";
import "./PrivacyPolicy.css";
import { FaLock, FaUserShield, FaFileContract, FaShieldAlt, FaExclamationTriangle } from "react-icons/fa";

const PrivacyPolicy = () => {
  const policyData = [
    {
      icon: <FaLock />,
      title: "Data Security",
      content:
        "We take strong measures to ensure your data is secure. Personal information is encrypted and protected from unauthorized access.",
    },
    {
      icon: <FaUserShield />,
      title: "User Privacy",
      content:
        "We do not share personal data with third parties without your consent. Your privacy is our top priority.",
    },
    {
      icon: <FaFileContract />,
      title: "Data Usage",
      content:
        "Your data is used solely to improve your experience on our platform and to provide our rental services efficiently.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Compliance",
      content:
        "Our platform complies with international privacy standards and regulations to protect our users and earners.",
    },
    {
      icon: <FaExclamationTriangle />,
      title: "Cookies & Tracking",
      content:
        "We use cookies for analytics and personalized content. You can manage your cookie preferences at any time.",
    },
  ];

  return (
    <div className="privacy-page">
      <div className="hero-section text-center">
        <h1>Privacy Policy</h1>
        <p>Your privacy matters. Here’s how we protect your information.</p>
      </div>

      <div className="policy-container container">
        <div className="row justify-content-center">
          {policyData.map((policy, index) => (
            <div className="col-md-6 col-lg-4 mb-4" key={index}>
              <div className="policy-card animate__animated animate__fadeInUp">
                <div className="policy-icon">{policy.icon}</div>
                <h3 className="policy-title">{policy.title}</h3>
                <p className="policy-content">{policy.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      
    </div>
  );
};

export default PrivacyPolicy;
