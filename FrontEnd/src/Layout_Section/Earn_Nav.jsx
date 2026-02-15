import React, { useState } from "react";
import Logo from "../assets/Logo.png";
import "../CssFolder/NavBar.css";
import { Link } from "react-router-dom";
import CurrentUser from "../User_Data/CurrentUserProfile";

const Earn_Nav = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <nav className="custom-navbar shadow-sm sticky-top">
        <div className="nav-flex">

          {/* LEFT */}
          <div className="nav-left d-flex align-items-center gap-2">
            <Link to="/Earnerhome">
              <img src={Logo} className="brand-logo" alt="Logo" />
            </Link>
            <Link
              to="/Earnerhome"
              className="brand-name fw-bold ms-2 text-dark text-decoration-none"
            >
              Take_Me_For_A_Ride
            </Link>
          </div>

          {/* CENTER (DESKTOP ONLY) */}
          <div className="nav-center d-none d-lg-flex">
            <Link to="/Earnerhome" className="nav-link">Dashboard</Link>
            <Link to="/Earner/Data" className="nav-link">My Vehicles</Link>
            <Link to="/earner/requests" className="nav-link">Requests</Link>
            <Link to="/earner/earnings" className="nav-link">My Earnings</Link>
            <Link to="/earner/history" className="nav-link">History</Link>
          </div>

          {/* RIGHT (DESKTOP ONLY) */}
          <div className="nav-right d-none d-lg-flex align-items-center gap-3 position-relative">
            <CurrentUser /> {/* ✅ USER PROFILE */}
          </div>

          {/* RIGHT (MOBILE ONLY) */}
          <div className="d-lg-none d-flex align-items-center gap-3 position-relative">
            <CurrentUser /> {/* ✅ USER PROFILE */}

            <button
              className="menu-btn"
              onClick={() => setOpen(true)}
            >
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

          <Link className="mobile-item nav-link" to="/Earnerhome" onClick={() => setOpen(false)}>
            Dashboard
          </Link>

          <Link className="mobile-item nav-link" to="/Earner/Data" onClick={() => setOpen(false)}>
            My Vehicles
          </Link>

          <Link className="mobile-item nav-link" to="/earner/requests" onClick={() => setOpen(false)}>
            Requests
          </Link>

          <Link className="mobile-item nav-link" to="/earner/earnings" onClick={() => setOpen(false)}>
            My Earnings
          </Link>

          <Link className="mobile-item nav-link" to="/earner/history" onClick={() => setOpen(false)}>
            History
          </Link>
        </div>
      </div>
    </>
  );
};

export default Earn_Nav;
