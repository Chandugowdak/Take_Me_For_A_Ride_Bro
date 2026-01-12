import React from 'react';
import './Terms.css';
import { FaUser, FaCar, FaMoneyCheckAlt, FaBan, FaShieldAlt, FaExclamationTriangle } from 'react-icons/fa';

const Terms = () => {
  const termsData = [
    {
      icon: <FaUser />,
      title: 'User Accounts',
      content: 'Users must provide accurate personal information. Secure your account; all activity under your account is your responsibility.',
    },
    {
      icon: <FaCar />,
      title: 'Service Usage',
      content: 'Our platform allows renting vehicles. Users must follow traffic rules. Earners must ensure vehicles are safe and accurately listed.',
    },
    {
      icon: <FaMoneyCheckAlt />,
      title: 'Payments & Refunds',
      content: 'Payments are processed securely. Refunds follow our policy. Users and Earners must provide accurate payment information.',
    },
    {
      icon: <FaBan />,
      title: 'Prohibited Activities',
      content: 'No illegal activities or misuse of the platform. Violations may lead to suspension or legal action.',
    },
    {
      icon: <FaShieldAlt />,
      title: 'Privacy Policy',
      content: 'We value your privacy. Personal data is handled securely and never shared without consent.',
    },
    {
      icon: <FaExclamationTriangle />,
      title: 'Limitation of Liability',
      content: 'Platform is provided “as is”. We are not liable for indirect or consequential damages.',
    },
  ];

  return (
    <div className="terms-page">
      <div className="hero-section text-center">
        <h1>Terms & Conditions</h1>
        <p>Read carefully to understand how our platform works for Users and Earners.</p>
      </div>

      <div className="terms-container">
        {termsData.map((term, index) => (
          <div className="term-card" key={index}>
            <div className="term-icon">{term.icon}</div>
            <h3 className="term-title">{term.title}</h3>
            <p className="term-content">{term.content}</p>
          </div>
        ))}
      </div>

     
    </div>
  );
};

export default Terms;
