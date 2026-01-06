import React, { useState, useContext, useEffect } from "react";
import Logo from "../assets/Logo.png";
import "../CssFolder/NavBar.css";
import { Link } from "react-router-dom";
import { GlobelValue } from "../context/GlobelVariable";
import axios from "axios";

const Earn_Nav = () => {
  const [open, setOpen] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [user, setUser] = useState(null);

  const { Set_User_Login, setJWT_Token, setUser_Type } =
    useContext(GlobelValue);

  // Fetch logged-in user
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem("JWT_Token");
        if (!token) return;

        const res = await axios.get(
          "http://localhost:3000/api/current/user",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        setUser(res.data.userData);
      } catch (err) {
        console.error(err);
      }
    };

    fetchUser();
  }, []);

  const Handel_Logout = () => {
    localStorage.clear();
    setJWT_Token(null);
    Set_User_Login(false);
    setUser_Type(null);
  };

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
            <Link to="/Earnerhome" className="brand-name fw-bold ms-2 text-dark text-decoration-none">
            Take_Me_For_A_Ride</Link>
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
            {/* USER ICON */}
            <div
              className="user-icon"
              onClick={() => setShowProfile(!showProfile)}
            >
              <i className="bi bi-person-circle"></i>
            </div>
          </div>

          {/* RIGHT (MOBILE ONLY) */}
          <div className="d-lg-none d-flex align-items-center gap-3 position-relative">
            {/* USER ICON (MOBILE) */}
            <div
              className="user-icon"
              onClick={() => setShowProfile(!showProfile)}
            >
              <i className="bi bi-person-circle"></i>
            </div>

            {/* MENU BUTTON */}
            <button
              className="menu-btn"
              onClick={() => setOpen(true)}
            >
              ☰
            </button>
          </div>

          {/* PROFILE DROPDOWN (BOTH) */}
          {showProfile && user && (
            <div className="profile-dropdown shadow-lg">
              <div className="d-flex justify-content-end">
                <i
                  className="bi bi-x-lg close-icon"
                  onClick={() => setShowProfile(false)}
                ></i>
              </div>

              <div className="text-center">
                <i className="bi bi-person-circle profile-big-icon"></i>
                <h6 className="mt-2">{user.name}</h6>
                <p className="text-muted mb-1">{user.email}</p>
                <small className="text-secondary">
                  Role: {user.Type_of_User}
                </small>

                {/* LOGOUT BUTTON INSIDE PROFILE */}
                <button
                  className="btn bg-danger text-white w-100 mt-3"
                  onClick={() => {
                    Handel_Logout();
                    setShowProfile(false);
                  }}
                >
                  Logout
                </button>
              </div>
            </div>
          )}
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
