import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { GlobelValue } from "../../context/GlobelVariable";
import "./User_Home.css";
import TopCities from "../../Footer_Section/TopCities";

const User_Home = () => {
  const { JWT_Token } = useContext(GlobelValue);

  const [vehicals, setVehicals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  // 🔹 NEW STATES (for request handling)
  const [sendingId, setSendingId] = useState(null);
  const [requestedIds, setRequestedIds] = useState([]);

  /* ========================= */
  /* FETCH VEHICLES */
  /* ========================= */
  const fetchVehicals = async () => {
    try {
      const res = await axios.get(
        "http://localhost:3000/api/vehicals/all"
      );

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
  /* SEND REQUEST */
  /* ========================= */
  const handleSendRequest = async (rentalId) => {
    try {
      if (!JWT_Token) {
        alert("Please login to send request");
        return;
      }

      setSendingId(rentalId);

      await axios.post(
        "http://localhost:3000/api/req/send",
        { rentalId },
        {
          headers: {
            Authorization: `Bearer ${JWT_Token}`,
          },
        }
      );

      alert("Request sent successfully ✅");

      // Disable button after request
      setRequestedIds((prev) => [...prev, rentalId]);
    } catch (error) {
      alert(
        error?.response?.data?.message || "Failed to send request"
      );
    } finally {
      setSendingId(null);
    }
  };

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

      {/* VEHICLES SECTION */}
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
                  {/* IMAGE */}
                  <div
                    className="bike-image"
                    style={{
                      backgroundImage: `url(${item.Image_URL})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  ></div>

                  {/* DETAILS */}
                  <h4 className="bike-name">{item.Vehical_Name}</h4>
                  <p className="bike-price">
                    ₹{item.Total_Amount} / day
                  </p>

                  {/* 🔥 RENT BUTTON */}
                  <button
                    className="btn btn-outline-primary rent-btn"
                    disabled={
                      sendingId === item._id ||
                      requestedIds.includes(item._id)
                    }
                    onClick={() => handleSendRequest(item._id)}
                  >
                    {sendingId === item._id
                      ? "Sending..."
                      : requestedIds.includes(item._id)
                      ? "Requested"
                      : "Rent Now"}
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </section>

      <TopCities />

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
