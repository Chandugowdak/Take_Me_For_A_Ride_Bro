import React, { useState, useContext, useEffect } from "react";
import Logo from "../assets/Logo.png";
import "../CssFolder/NavBar.css";
import { Link } from "react-router-dom";
import { GlobelValue } from "../context/GlobelVariable";
import axios from "axios";

const User_Nav = () => {
  const [open, setOpen] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [user, setUser] = useState(null);

  const { User_Login, Set_User_Login, setJWT_Token, setUser_Type } =
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
      <nav className="custom-navbar shadow-sm sticky-top px-3">
        <div className="nav-flex">

          {/* LEFT */}
          <div className="nav-left d-flex align-items-center gap-2">
            <img src={Logo} className="brand-logo" alt="Logo" />
            <span className="fw-bold">Take_Me_For_A_Ride</span>
          </div>

          {/* CENTER (DESKTOP ONLY) */}
          <div className="nav-center d-none d-lg-flex">
            <Link to="/userhome" className="nav-link">Home</Link>
            <Link to="/user/booking" className="nav-link">My Bookings</Link>
            <Link to="/user/offers" className="nav-link">Offers</Link>
            <Link to="/user/support" className="nav-link">Support</Link>
          </div>

          {/* RIGHT (DESKTOP ONLY) */}
          <div className="nav-right d-none d-lg-flex align-items-center gap-3 position-relative">
           

            {/* LOGOUT */}
            <button
              className="btn bg-danger text-white"
              onClick={Handel_Logout}
            >
              Logout
            </button>


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
            {/* USER ICON */}
            <div
              className="user-icon"
              onClick={() => setShowProfile(!showProfile)}
            >
              <i className="bi bi-person-circle"></i>
            </div>

            {/* MENU BUTTON */}
            <button className="menu-btn" onClick={() => setOpen(true)}>
              ☰
            </button>
          </div>

          {/* PROFILE DROPDOWN (BOTH DESKTOP & MOBILE) */}
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
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* ================= MOBILE SIDE MENU ================= */}
      <div className={`side-menu ${open ? "open" : ""}`}>
        <div className="side-menu-content p-3">

          <div className="text-end">
            <button className="btn-close" onClick={() => setOpen(false)}></button>
          </div>

          <Link to="/userhome" className="mobile-item nav-link" onClick={() => setOpen(false)}>Home</Link>
          <Link to="/user/booking" className="mobile-item nav-link" onClick={() => setOpen(false)}>My Bookings</Link>
          <Link to="/user/offers" className="mobile-item nav-link" onClick={() => setOpen(false)}>Offers</Link>
          <Link to="/user/support" className="mobile-item nav-link" onClick={() => setOpen(false)}>Support</Link>

          {/* LOGOUT (MOBILE SIDE MENU ONLY) */}
          <button
            className="btn bg-danger text-white w-100 mt-4"
            onClick={() => {
              Handel_Logout();
              setOpen(false);
            }}
          >
            Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default User_Nav;
