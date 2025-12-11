import React, { useState, useContext } from "react";
import Logo from "../assets/Logo.png";
import "../CssFolder/NavBar.css";
import { Link } from "react-router-dom";
import { GlobelValue } from "../context/GlobelVariable";

const Earn_Nav = () => {
  const [open, setOpen] = useState(false);
  const { User_Login, Set_User_Login, setJWT_Token, setUser_Type } =
    useContext(GlobelValue);

  const Handel_Logout = () => {
    localStorage.removeItem("JWT_Token");
    localStorage.removeItem("User_Type");
    localStorage.removeItem("Login_Status");
    setJWT_Token(null);
    Set_User_Login(false);
    setUser_Type(null);
  };

  return (
    <>
      {/* MAIN NAVBAR */}
      <nav className="custom-navbar shadow-sm sticky-top px-3">
        <div className="container-fluid nav-flex">

          {/* LEFT */}
          <div className="nav-left d-flex align-items-center">
            <img src={Logo} className="brand-logo" alt="Logo" />
            <span className="brand-name fw-bold ms-2">Take_Me_For_A_Ride</span>
          </div>

          {/* CENTER MENU */}
          <div className="nav-center d-none d-lg-flex">
            <Link to="/Earnerhome" className="nav-link">Dashboard</Link>

           

            <Link to="/Earner/Data" className="nav-link">My Vehicles</Link>

            <Link to="/earner/requests" className="nav-link">Requests</Link>

            <Link to="/earner/earnings" className="nav-link">My Earnings</Link>
          </div>

          {/* RIGHT */}
          <button
            className="btn bg-danger nav-right d-none d-lg-flex gap-2"
            onClick={Handel_Logout}
          >
            Logout
          </button>

          {/* MOBILE MENU */}
          <button className="menu-btn d-lg-none" onClick={() => setOpen(true)}>
            ☰
          </button>
        </div>
      </nav>

      {/* MOBILE SIDE MENU */}
      <div className={`side-menu ${open ? "open" : ""}`}>
        <div className="side-menu-content p-3">
          <div className="text-end">
            <button className="btn-close" onClick={() => setOpen(false)}></button>
          </div>

          <Link to="/earner/home" className="mobile-item nav-link" onClick={() => setOpen(false)}>Dashboard</Link>
          <Link to="/earner/add-vehicle" className="mobile-item nav-link" onClick={() => setOpen(false)}>Add Vehicle</Link>
          <Link to="/Earner/Data" className="mobile-item nav-link" onClick={() => setOpen(false)}>My Vehicles</Link>
          <Link to="/earner/requests" className="mobile-item nav-link" onClick={() => setOpen(false)}>Requests</Link>
          <Link to="/earner/earnings" className="mobile-item nav-link" onClick={() => setOpen(false)}>My Earnings</Link>

          <button
            className="btn bg-danger text-white w-100 mt-3"
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

export default Earn_Nav;
