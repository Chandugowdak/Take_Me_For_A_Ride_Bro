import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png";
import CurrentUser from "../User_Data/CurrentUserProfile";

import {
  FaPlusCircle,
  FaGift,
  FaBars,
  FaTimes,
} from "react-icons/fa";

import "../PagesCSS/AdminNav.css";

const AdminMiniNav = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <nav className="tmfr-admin-nav shadow-sm">
        <div className="tmfr-admin-nav__wrapper">

          {/* LEFT SECTION */}
          <div className="tmfr-admin-left">
            <Link to="/Adminhome">
              <img
                src={Logo}
                alt="logo"
                className="tmfr-admin-logo"
              />
            </Link>

            <Link
              to="/Adminhome"
              className="tmfr-admin-brand"
            >
              TMFR Admin
            </Link>
          </div>

          {/* RIGHT SECTION */}
          <div className="tmfr-admin-right">

            {/* DESKTOP MENU */}
            <div className="tmfr-admin-nav__desktop">

              <Link
                to="/Admin/add/coupon"
                className="tmfr-admin-link"
              >
                
                Add Coupon
              </Link>
              <Link
                to="/Admin/delete/coupon"
                className="tmfr-admin-link"
              >
                
                Delete Coupon
              </Link>


              <Link
                to="/user/offers"
                className="tmfr-admin-link"
              >
                
                Available Coupon
              </Link>

            </div>

            {/* USER PROFILE */}
            <div className="tmfr-admin-profile">
              <CurrentUser />
            </div>

            {/* MOBILE MENU BUTTON */}
            <button
              className="tmfr-admin-menu-btn"
              onClick={() => setOpen(true)}
            >
              <FaBars />
            </button>

          </div>
        </div>
      </nav>

      {/* ================= MOBILE MENU ================= */}
      <div
        className={`tmfr-admin-mobile ${
          open ? "show-menu" : ""
        }`}
      >
        <div className="tmfr-admin-mobile-content">

          {/* CLOSE BUTTON */}
          <div className="text-end mb-4">
            <button
              className="tmfr-admin-close-btn"
              onClick={() => setOpen(false)}
            >
              <FaTimes />
            </button>
          </div>

          {/* MOBILE LINKS */}
          <Link
            to="/Admin/add/coupon"
            className="tmfr-admin-mobile-link"
            onClick={() => setOpen(false)}
          >
            
            Add Coupon
          </Link>

 <Link
            to="/Admin/delete/coupon"
            className="tmfr-admin-mobile-link"
            onClick={() => setOpen(false)}
          >
            
            Delete Coupon
          </Link>


          <Link
            to="/user/offers"
            className="tmfr-admin-mobile-link"
            onClick={() => setOpen(false)}
          >
            
            Available Coupon
          </Link>

        </div>
      </div>
    </>
  );
};

export default AdminMiniNav;