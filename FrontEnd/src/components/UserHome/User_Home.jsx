import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { GlobelValue } from "../../context/GlobelVariable";
import "./User_Home.css";

const User_Home = () => {
  const { JWT_Token } = useContext(GlobelValue);
  const [vehicals, setVehicals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  // Fetch Vehicles
  const fetchVehicals = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/vehicals/all");

      setVehicals(Array.isArray(res.data.Vehicals) ? res.data.Vehicals : []);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching vehicals", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchVehicals();
  }, []);

  /* ========================= */
  /* SEARCH LOGIC */
  /* ========================= */
  const filteredVehicals = vehicals.filter((item) => {
    const keyword = searchTerm.toLowerCase();

    return (
      item.Vehical_Name?.toLowerCase().includes(keyword) ||
      item.Type_of_Vehical?.toLowerCase().includes(keyword) ||
      item.Location?.toLowerCase().includes(keyword)
    );
  });

  return (
    <div className="user-home-container">

      {/* HERO SECTION */}
      <section className="user-hero container">
        <h1 className="user-title">Find Your Perfect Ride</h1>
        <p className="user-desc">
          Rent a bike anytime, anywhere — fast, affordable & reliable.
        </p>

        <div className="search-box shadow-sm">
          <input
            type="text"
            className="form-control search-input"
            placeholder="Search Bike, Location..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="btn btn-primary search-btn">
            Search
          </button>
        </div>
      </section>

      {/* POPULAR RENTAL OPTIONS */}
      <section className="popular-bikes container mt-5">
        <h2 className="section-heading text-center">Popular Vehicles</h2>

        <div className="row mt-4 gy-4 justify-content-center">

          {loading ? (
            <p className="text-center">Loading vehicles...</p>
          ) : filteredVehicals.length === 0 ? (
            <p className="text-center">No matching vehicles found</p>
          ) : (
            filteredVehicals.map((item) => (
              <div className="col-12 col-sm-6 col-md-4" key={item._id}>
                <div className="bike-card shadow-sm">

                  {/* Vehicle Image */}
                  <div
                    className="bike-image"
                    style={{
                      backgroundImage: `url(${item.Image_URL})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  ></div>

                  {/* Vehicle Details */}
                  <h4 className="bike-name">{item.Vehical_Name}</h4>
                  <p className="bike-price">
                    ₹{item.Total_Amount} / day
                  </p>

                  <button className="btn btn-outline-primary rent-btn">
                    Rent Now
                  </button>
                </div>
              </div>
            ))
          )}

        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="how-works container mt-5">
        <h2 className="section-heading text-center">How Renting Works</h2>

        <div className="row mt-4 gy-4 justify-content-center">
          <div className="col-md-3">
            <div className="step-card shadow-sm">
              <div className="step-icon">📍</div>
              <h5>1. Search</h5>
              <p>Find bikes available near your area.</p>
            </div>
          </div>

          <div className="col-md-3">
            <div className="step-card shadow-sm">
              <div className="step-icon">📄</div>
              <h5>2. Book</h5>
              <p>Select a bike and confirm your booking instantly.</p>
            </div>
          </div>

          <div className="col-md-3">
            <div className="step-card shadow-sm">
              <div className="step-icon">🏍️</div>
              <h5>3. Ride</h5>
              <p>Pick up the bike and enjoy your ride.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default User_Home;
