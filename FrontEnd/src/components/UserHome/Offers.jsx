import React from "react";
import "./Offers.css";

const Offers = () => {
  return (
    <div className="offers-wrapper container-fluid py-5">

      <div className="text-center mb-5">
        <h1 className="offers-heading">Rental Deals & Rewards</h1>
        <p className="offers-subheading">
          Premium offers on Bike & Car rentals
        </p>
      </div>

      <div className="row g-4 px-4 justify-content-center">

        {/* 1 */}
        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
          <div className="offer-box blue">
            <h3>₹300 OFF</h3>
            <p>First bike or car booking</p>
            <span className="code">FIRST300</span>
          </div>
        </div>

        {/* 2 */}
        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
          <div className="offer-box green">
            <h3>Weekend Deal</h3>
            <p>Rent 2 days, pay for 1</p>
            <span className="code">WEEKEND</span>
          </div>
        </div>

        {/* 3 */}
        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
          <div className="offer-box purple">
            <h3>20% OFF</h3>
            <p>Bike rentals above 7 days</p>
            <span className="code">BIKE20</span>
          </div>
        </div>

        {/* 4 */}
        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
          <div className="offer-box orange">
            <h3>₹500 Cashback</h3>
            <p>UPI payments on car booking</p>
            <span className="code">CAR500</span>
          </div>
        </div>

        {/* 5 */}
        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
          <div className="offer-box dark">
            <h3>Earner Bonus</h3>
            <p>₹1000 after 15 completed rentals</p>
            <span className="code">EARN1000</span>
          </div>
        </div>

        {/* 6 */}
        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
          <div className="offer-box red">
            <h3>Festival Offer</h3>
            <p>₹700 OFF on car rentals</p>
            <span className="code">FEST700</span>
          </div>
        </div>

        {/* 7 */}
        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
          <div className="offer-box blue">
            <h3>Night Ride</h3>
            <p>Flat 15% OFF after 9 PM</p>
            <span className="code">NIGHT15</span>
          </div>
        </div>

        {/* 8 */}
        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
          <div className="offer-box green">
            <h3>Monthly Saver</h3>
            <p>30% OFF on 30-day rentals</p>
            <span className="code">MONTH30</span>
          </div>
        </div>

        {/* 9 */}
        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
          <div className="offer-box purple">
            <h3>Student Offer</h3>
            <p>₹200 OFF with valid ID</p>
            <span className="code">STUDENT</span>
          </div>
        </div>

        {/* 10 */}
        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
          <div className="offer-box orange">
            <h3>Referral Reward</h3>
            <p>₹250 per successful referral</p>
            <span className="code">REFER250</span>
          </div>
        </div>

        {/* 11 */}
        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
          <div className="offer-box dark">
            <h3>Loyalty Bonus</h3>
            <p>10th ride completely FREE</p>
            <span className="code">LOYAL10</span>
          </div>
        </div>

        {/* 12 */}
        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
          <div className="offer-box red">
            <h3>Corporate Deal</h3>
            <p>Special pricing for offices</p>
            <span className="code">CORP</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Offers;
