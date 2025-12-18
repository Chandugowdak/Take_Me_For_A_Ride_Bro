
import React from 'react';
import './Support.css';

const Support = () => {
  return (
    <div className="support-wrapper container py-5">
      {/* Header */}
      <div className="support-header text-center mb-5">
        <h2>Help & Support</h2>
        <p>
          Facing issues while renting a vehicle? Below are the most common problems and how you can resolve them quickly.
        </p>
      </div>

      {/* Support Items */}
      <div className="row">
        <div className="col-md-6 col-lg-4 mb-4">
          <div className="support-box">
            <span className="icon">🚗</span>
            <h5>Vehicle Not Visible</h5>
            <p>
              If vehicles are not appearing, they may already be booked for your selected dates.
            </p>
            <p className="solution">✔ Try selecting different dates or nearby locations.</p>
          </div>
        </div>

        <div className="col-md-6 col-lg-4 mb-4">
          <div className="support-box">
            <span className="icon">💳</span>
            <h5>Payment Issues</h5>
            <p>
              Payment completed but booking not confirmed.
            </p>
            <p className="solution">✔ Refunds are auto-processed within 3–5 working days.</p>
          </div>
        </div>

        <div className="col-md-6 col-lg-4 mb-4">
          <div className="support-box">
            <span className="icon">📅</span>
            <h5>Cancellation Policy</h5>
            <p>
              Bookings can be cancelled only before the pickup time.
            </p>
            <p className="solution">✔ Late cancellations may not be eligible for refund.</p>
          </div>
        </div>

        <div className="col-md-6 col-lg-4 mb-4">
          <div className="support-box">
            <span className="icon">🛠</span>
            <h5>Vehicle Breakdown</h5>
            <p>
              If the rented vehicle breaks down during usage.
            </p>
            <p className="solution">✔ Contact emergency support via the app immediately.</p>
          </div>
        </div>

        <div className="col-md-6 col-lg-4 mb-4">
          <div className="support-box">
            <span className="icon">🧾</span>
            <h5>Extra Charges</h5>
            <p>
              Additional charges may apply for late returns or damages.
            </p>
            <p className="solution">✔ All charges are transparently shown in your invoice.</p>
          </div>
        </div>

        <div className="col-md-6 col-lg-4 mb-4">
          <div className="support-box">
            <span className="icon">🔐</span>
            <h5>Account Information</h5>
            <p>
              Users cannot change or reset passwords once registered.
            </p>
            <p className="solution">✔ Ensure correct details during registration.</p>
          </div>
        </div>
      </div>

      {/* Info Note */}
      <div className="support-note mt-5">
        <h6>Important Instructions</h6>
        <ul>
          <li>Password change or reset is not available in this application.</li>
          <li>Carry valid ID proof at the time of vehicle pickup.</li>
          <li>Late return may result in extra charges.</li>
          <li>Fuel policy must be followed as mentioned during booking.</li>
        </ul>
      </div>

      {/* Contact */}
      <div className="support-contact text-center mt-4">
        <p><b>Email:</b> support@rentelapp.com</p>
        <p><b>Phone:</b> +91 98765 43210</p>
      </div>
    </div>
  );
};

export default Support;

