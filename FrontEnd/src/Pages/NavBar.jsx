import React, { useState,useContext } from "react";
import Logo from "../assets/Logo.png";
import "../CssFolder/NavBar.css";
import {Link} from 'react-router-dom';
import { GlobelValue } from "../context/GlobelVariable";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const{User_Login,Set_User_Login} = useContext(GlobelValue);
  
  const Handel_Logout = async()=>{
    localStorage.removeItem("JWT_Token");
    Set_User_Login(false);
  }

  return (
    <>
      {/* MAIN NAVBAR */}
      <nav className="custom-navbar shadow-sm sticky-top px-3">
        <div className="container-fluid nav-flex">

          {/* LEFT */}
          <div className="nav-left d-flex align-items-center">
            <img src={Logo} className="brand-logo" alt="Logo" />
            <span className="brand-name fw-bold ms-2">
              Take_Me_For_A_Ride
            </span>
          </div>

          {/* CENTER MENU (NO UL/LI) */}
          <div className="nav-center d-none d-lg-flex">

            {/* Tariff */}
            <div className="nav-item dropdown">
              <span className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                Tariff
              </span>
              <div className="dropdown-menu custom-drop">
                <span className="dropdown-item">Rent a Bike</span>
                <span className="dropdown-item">Rent a Car</span>
              </div>
            </div>

            {/* Offers */}
            <div className="nav-item">
              <span className="nav-link">Offers</span>
            </div>

            {/* Partner */}
            <div className="nav-item dropdown">
              <span className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                Partner With Us
              </span>
              <div className="dropdown-menu custom-drop">
                <span className="dropdown-item">Earn With Us</span>
                <span className="dropdown-item">Own a Franchise</span>
              </div>
            </div>
          </div>

      {User_Login ? (
  <Link to="/" className="btn bg-danger nav-right d-none d-lg-flex gap-2" onClick={Handel_Logout}>
    Logout
  </Link>
) : (
  <div className="nav-right d-none d-lg-flex gap-2">
    <Link to="/" className="btn btn-outline-success px-4">Login</Link>
    <Link to="/register" className="btn btn-success px-4">Sign Up</Link>
  </div>
)}

          {/* MOBILE MENU BUTTON */}
          <button className="menu-btn d-lg-none" onClick={() => setOpen(true)}>
            ☰
          </button>
        </div>
      </nav>

      {/* MOBILE SIDE MENU */}
      <div className={`side-menu ${open ? "open" : ""}`}>
        <div className="side-menu-content p-3">

          <div className="text-end">
            <button className="btn-close" onClick={() => setOpen(false)} />
          </div>

          {/* MOBILE MENU BLOCKS (NO UL/LI) */}
          <div className="mobile-item">
            <span className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
              Tariff
            </span>
            <div className="dropdown-menu show border-0 mt-1 custom-drop">
              <span className="dropdown-item">Rent a Bike</span>
              <span className="dropdown-item">Rent a Car</span>
            </div>
          </div>

          <div className="mobile-item">
            <span className="nav-link">Offers</span>
          </div>

          <div className="mobile-item">
            <span className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
              Partner With Us
            </span>
            <div className="dropdown-menu show border-0 mt-1 custom-drop">
              <span className="dropdown-item">Earn With Us</span>
              <span className="dropdown-item">Own a Franchise</span>
            </div>
          </div>

         {/* MOBILE AUTH BUTTONS */}
{User_Login ? (
  <button
    className="btn bg-danger text-white w-100 mt-3"
    onClick={() => {
      Handel_Logout();
      setOpen(false);
    }}
  >
    Logout
  </button>
) : (
  <>
    <Link
      to="/"
      className="btn btn-outline-success w-100 mt-3"
      onClick={() => setOpen(false)}
    >
      Login
    </Link>

    <Link
      to="/register"
      className="btn btn-success w-100 mt-2"
      onClick={() => setOpen(false)}
    >
      Sign Up
    </Link>
  </>
)}


        </div>
      </div>
    </>
  );
};

export default NavBar;
