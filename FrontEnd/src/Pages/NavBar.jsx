import React from 'react';
import Logo from '../assets/Logo.png';
import '../CssFolder/NavBar.css';


const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm py-2 px-4">
      <div className="container-fluid">
        {/* Logo */}
        <a className="navbar-brand d-flex align-items-center" href="#">
          <img
            src={Logo}
            alt="Logo_Image"
            className="img-fluid"
            style={{ maxHeight: "55px", width: "auto" }}
          />
          <span className="nosifer-regular ms-2 fw-bold fs-5 text-success">Take_Me_For_A Ride</span>
        </a>

        {/* Right Buttons */}
        <div className="d-flex align-items-center">
          <button className="btn btn-outline-success me-2 px-3 fw-semibold">
            Contact Us
          </button>
          <button className="btn btn-success px-3 fw-semibold">
            FAQ
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
