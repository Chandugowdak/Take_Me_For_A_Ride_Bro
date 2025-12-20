import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png";
import "../CssFolder/NavBar.css";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* MAIN NAVBAR */}
      <nav className="custom-navbar shadow-sm sticky-top px-3">
        <div className="container-fluid nav-flex">

          {/* LEFT */}
          <div className="nav-left d-flex align-items-center">
            <Link to="/">
              <img src={Logo} className="brand-logo" alt="Logo" />
            </Link>

            <Link
              to="/"
              className="brand-name fw-bold ms-2 text-dark text-decoration-none"
            >
              Take_Me_Forword
            </Link>
          </div>

          {/* CENTER MENU (DESKTOP) */}
          <div className="nav-center d-none d-lg-flex">

            <div className="nav-item">
              <Link to="/Sub" className="nav-link">
                Subscription
              </Link>
            </div>

            <div className="nav-item">
              <Link to="/OffersSection" className="nav-link">
                Offers
              </Link>
            </div>
            {/* NEW SECTION */}
                <div className="nav-item">
              <Link to="/static/data" className="nav-link">
                Get  Riding Accessories
              </Link>
            </div>

            <div className="nav-item dropdown">
              <span
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                Partner With Us
              </span>

              <div className="dropdown-menu custom-drop">
                <Link className="dropdown-item" to="/earn/with/us">
                  Earn With Us
                </Link>
                <Link className="dropdown-item" to="/franchise/own">
                  Own a Franchise
                </Link>
              </div>
            </div>
          </div>

          {/* RIGHT AUTH (DESKTOP) */}
          <div className="nav-right d-none d-lg-flex gap-2">
            <Link to="/" className="btn btn-outline-success px-4">
              Login
            </Link>
            <Link to="/register" className="btn btn-success px-4">
              Sign Up
            </Link>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            className="menu-btn d-lg-none"
            onClick={() => setOpen(true)}
          >
            ☰
          </button>
        </div>
      </nav>

      {/* MOBILE SIDE MENU */}
      <div className={`side-menu ${open ? "open" : ""}`}>
        <div className="side-menu-content p-3">

          <div className="text-end">
            <button
              className="btn-close"
              onClick={() => setOpen(false)}
            />
          </div>

          {/* MOBILE LINKS */}
          <div className="mobile-item">
            <Link
              to="/Sub"
              className="nav-link"
              onClick={() => setOpen(false)}
            >
              Subscription
            </Link>
          </div>

          <div className="mobile-item">
            <Link
              to="/OffersSection"
              className="nav-link"
              onClick={() => setOpen(false)}
            >
              Offers
            </Link>
          </div>
          {/* NEW SECTION */}
           <div className="mobile-item">
            <Link
              to="/static/data"
              className="nav-link"
              onClick={() => setOpen(false)}
            >
              Get  Riding Accessories
            </Link>
          </div>

          <div className="mobile-item">
            <span
              className="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
            >
              Partner With Us
            </span>

            <div className="dropdown-menu border-0 mt-1 custom-drop">
              <Link
                className="dropdown-item"
                to="/earn/with/us"
                onClick={() => setOpen(false)}
              >
                Earn With Us
              </Link>

              <Link
                className="dropdown-item"
                to="/franchise/own"
                onClick={() => setOpen(false)}
              >
                Own a Franchise
              </Link>
            </div>
          </div>

          {/* MOBILE AUTH */}
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

        </div>
      </div>
    </>
  );
};

export default NavBar;
