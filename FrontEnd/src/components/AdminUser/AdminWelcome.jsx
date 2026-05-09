// AdminWelcome.jsx

import React from "react";
import "./AdminWelcome.css";

const AdminWelcome = () => {
  return (
    <div className="admin-page">

      <div className="welcome-card">

        <h1 className="admin-title">
          Welcome Admin 👋
        </h1>

        <p className="admin-text">
          Manage your platform, coupons, users and services easily
          with a smooth and modern admin dashboard experience.
        </p>

        <button className="admin-btn">
          Go To Dashboard
        </button>

      </div>

    </div>
  );
};

export default AdminWelcome;