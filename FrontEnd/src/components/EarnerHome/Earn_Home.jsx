import React, { useContext } from "react";
import { GlobelValue } from "../../context/GlobelVariable";
import "./Earn_Home.css";


const Earn_Home = () => {
  const { JWT_Token } = useContext(GlobelValue);

  return (
    <div className="earn-main">


 
      {/* HERO SECTION */}
      <section className="earn-hero container">
        <h1 className="earn-heading">
          Earn Money By Renting Your Bike
        </h1>
        <p className="earn-text">
          List your bike on our platform and start earning with every ride.
        </p>

        <button className="btn earn-btn-primary">
          Add Your Bike
        </button>
      </section>

      {/* FEATURES SECTION */}
      <section className="earn-features container mt-5">
        <div className="row justify-content-center gy-4">

          <div className="col-md-4">
            <div className="feature-box shadow-sm">
              <div className="feature-icon">🏍️</div>
              <h3>Add Your Bike</h3>
              <p>Upload bike details, documents, and get verified quickly.</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="feature-box shadow-sm">
              <div className="feature-icon">📅</div>
              <h3>Get Bookings</h3>
              <p>Users nearby will book your bike instantly.</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="feature-box shadow-sm">
              <div className="feature-icon">💸</div>
              <h3>Earn Money</h3>
              <p>Earn for every successful rental and withdraw anytime.</p>
            </div>
          </div>

        </div>
      </section>

      <p className="token-display">{JWT_Token}</p>
    </div>
  );
};

export default Earn_Home;
