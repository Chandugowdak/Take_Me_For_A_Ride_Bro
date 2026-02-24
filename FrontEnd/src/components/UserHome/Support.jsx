import React, { useState, useRef, useEffect } from "react";
import "./Support.css";

const supportData = [
  {
    id: 1,
    icon: "🚗",
    title: "Vehicle Not Visible",
    short: "Vehicles may already be booked for selected dates.",
    details:
      "If vehicles are not visible, it usually means they are already reserved for your chosen time slot. You can modify pickup dates, try nearby locations, or refresh availability. Our inventory updates in real-time."
  },
  {
    id: 2,
    icon: "💳",
    title: "Payment Issues",
    short: "Payment completed but booking not confirmed.",
    details:
      "If payment was deducted but booking is not confirmed, do not worry. Sometimes bank processing delays occur. Refunds are auto-processed within 3–5 working days if booking fails."
  },
  {
    id: 3,
    icon: "📅",
    title: "Cancellation Policy",
    short: "Bookings cancellable before pickup time.",
    details:
      "You can cancel bookings before the scheduled pickup time. Refund eligibility depends on cancellation timing. Late cancellations may result in partial or no refund."
  },
  {
    id: 4,
    icon: "🛠",
    title: "Vehicle Breakdown",
    short: "Vehicle stops working during trip.",
    details:
      "In case of breakdown, use the emergency support button inside the app. Our roadside assistance team will respond immediately and arrange replacement if required."
  },
  {
    id: 5,
    icon: "🧾",
    title: "Extra Charges",
    short: "Late return or damages.",
    details:
      "Extra charges may apply for late return, traffic fines, fuel shortage, or damages. All additional costs are transparently displayed in your invoice section."
  },
  {
    id: 6,
    icon: "🔐",
    title: "Account Information",
    short: "Password reset not available.",
    details:
      "Currently password reset feature is unavailable. Ensure correct details during registration. For account issues, contact support immediately."
  }
];

const Support = () => {
  const [activeCard, setActiveCard] = useState(null);
  const modalRef = useRef();

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setActiveCard(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="support-wrapper container py-5">
      <div className="text-center mb-5">
        <h2>Help & Support</h2>
        <p>Click on a topic to view detailed information.</p>
      </div>

      <div className="row">
        {supportData.map((item) => (
          <div className="col-md-6 col-lg-4 mb-4" key={item.id}>
            <div
              className="support-card"
              onClick={() => setActiveCard(item)}
            >
              <span className="icon">{item.icon}</span>
              <h5>{item.title}</h5>
              <p>{item.short}</p>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {activeCard && (
        <div className="support-overlay">
          <div className="support-modal" ref={modalRef}>
            <span
              className="close-btn"
              onClick={() => setActiveCard(null)}
            >
              ✖
            </span>
            <div className="modal-icon">{activeCard.icon}</div>
            <h4>{activeCard.title}</h4>
            <p>{activeCard.details}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Support;
