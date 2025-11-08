import React from 'react';
import Logo from '../assets/Logo.png';
import '../CssFolder/NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm py-2 px-3">
      <div className="container-fluid">
        {/* Logo and Brand */}
        <a className="navbar-brand d-flex align-items-center" href="#">
          <img
            src={Logo}
            alt="Logo"
            className="img-fluid"
            style={{ maxHeight: "50px", width: "auto" }}
          />
          <span className="nosifer-regular ms-2 fw-bold fs-5 text-success">
            Take_Me_For_A Ride
          </span>
        </a>

        {/* Toggler for mobile */}
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible Menu */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <div className="d-flex align-items-center mt-2 mt-lg-0">
            <button className="btn btn-outline-success me-2  fw-semibold w-100 w-lg-auto">
              Contact Us
            </button>
            <button className="btn btn-success px-3 fw-semibold w-100 w-lg-auto">
              FAQ
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
