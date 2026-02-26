import React, { useState } from "react";
import Logo from "../assets/Logo.png";
import "../CssFolder/NavBar.css";
import { Link } from "react-router-dom";
import CurrentUser from "../User_Data/CurrentUserProfile";

const User_Nav = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <nav className="custom-navbar shadow-sm sticky-top px-3">
        <div className="nav-flex">
          {/* LEFT */}
          <div className="nav-left d-flex align-items-center gap-2">
            <Link to="/userhome">
              <img src={Logo} className="brand-logo" alt="Logo" />
            </Link>
            <Link
              to="/userhome"
              className="brand-name fw-bold ms-2 text-dark text-decoration-none"
            >
              Take_Me_For_A_Ride
            </Link>
          </div>

          {/* CENTER (DESKTOP ONLY) */}
          <div className="nav-center d-none d-lg-flex">
            <Link to="/userhome" className="nav-link">
              Home
            </Link>
            <Link to="/user/booking" className="nav-link">
              My Bookings
            </Link>
            <Link to="/user/offers" className="nav-link">
              Offers
            </Link>
            <Link to="/user/support" className="nav-link">
              Support
            </Link>
            <Link to="/user/history" className="nav-link">
              History
            </Link>
          </div>

          <div className="nav-right d-flex align-items-center gap-3 position-relative">
            <CurrentUser />

            <button className="menu-btn" onClick={() => setOpen(true)}>
              ☰
            </button>
          </div>
        </div>
      </nav>

      {/* ================= MOBILE SIDE MENU ================= */}
      <div className={`side-menu ${open ? "open" : ""}`}>
        <div className="side-menu-content p-3">
          <div className="text-end">
            <button
              className="btn-close"
              onClick={() => setOpen(false)}
            ></button>
          </div>

          <Link
            to="/userhome"
            className="mobile-item nav-link"
            onClick={() => setOpen(false)}
          >
            Home
          </Link>

          <Link
            to="/user/booking"
            className="mobile-item nav-link"
            onClick={() => setOpen(false)}
          >
            My Bookings
          </Link>

          <Link
            to="/user/offers"
            className="mobile-item nav-link"
            onClick={() => setOpen(false)}
          >
            Offers
          </Link>

          <Link
            to="/user/support"
            className="mobile-item nav-link"
            onClick={() => setOpen(false)}
          >
            Support
          </Link>

          <Link
            to="/user/history"
            className="mobile-item nav-link"
            onClick={() => setOpen(false)}
          >
            History
          </Link>
        </div>
      </div>
    </>
  );
};

export default User_Nav;
