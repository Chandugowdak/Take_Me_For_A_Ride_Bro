import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { GlobelValue } from "../../context/GlobelVariable";
import "./User_Home.css";
import TopCities from "../../Footer_Section/TopCities";
import AutoScrollCarousel from "../../Common_Component/AutoScrollCarousel";
import Testimonials from "../../Common_Component/Testimonials";
import HowRentingWorks from "./HowRentingWorks";

const User_Home = () => {
  const { JWT_Token } = useContext(GlobelValue);

  const [vehicals, setVehicals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  // 🔹 Request states
  const [sendingId, setSendingId] = useState(null);
  const [requestedIds, setRequestedIds] = useState([]);

  /* ========================= */
  /* FETCH VEHICLES */
  /* ========================= */
  const fetchVehicals = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/vehicals/all");

      setVehicals(Array.isArray(res.data.Vehicals) ? res.data.Vehicals : []);
    } catch (error) {
      console.error("Error fetching vehicles", error);
    } finally {
      setLoading(false);
    }
  };

  /* ========================= */
  /* FETCH USER REQUESTS */
  /* ========================= */
  const fetchRequestedVehicles = async () => {
    try {
      if (!JWT_Token) return;

      const res = await axios.get(
        "http://localhost:3000/api/req/user",
        {
          headers: {
            Authorization: `Bearer ${JWT_Token}`,
          },
        }
      );

      const ids = res.data.pendingRequests.map(
        (req) => req.rentalId?._id
      );

      setRequestedIds(ids);

    } catch (error) {
      console.error("Error fetching requests", error);
    }
  };

  /* ========================= */
  /* INITIAL LOAD */
  /* ========================= */
  useEffect(() => {
    fetchVehicals();
    fetchRequestedVehicles();
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

      if (requestedIds.includes(rentalId)) {
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

      // Update UI instantly
      setRequestedIds((prev) => [...prev, rentalId]);

    } catch (error) {
      alert(error?.response?.data?.message || "Failed to send request");
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

      {/* FEATURE CAROUSEL */}
      <AutoScrollCarousel />

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
        <h2 className="section-heading text-center">
          Popular Vehicles
        </h2>

        <div className="row mt-4 gy-4 justify-content-center">
          {loading ? (
            <p className="text-center">Loading vehicles...</p>
          ) : filteredVehicals.length === 0 ? (
            <p className="text-center">
              No matching vehicles found
            </p>
          ) : (
            filteredVehicals.map((item) => {

              const isRequested = requestedIds.includes(item._id);

              return (
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
                    <h4 className="bike-name">
                      {item.Vehical_Name}
                    </h4>

                    <p className="bike-price">
                      ₹{item.Total_Amount} / day
                    </p>

                    {/* RENT BUTTON */}
                    <button
                      className="btn btn-outline-primary rent-btn"
                      disabled={sendingId === item._id || isRequested}
                      onClick={() => handleSendRequest(item._id)}
                    >
                      {sendingId === item._id
                        ? "Sending..."
                        : isRequested
                        ? "Requested"
                        : "Rent Now"}
                    </button>

                  </div>
                </div>
              );
            })
          )}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <HowRentingWorks />

      {/* TOP CITIES */}
      <TopCities />

      {/* TESTIMONIALS */}
      <Testimonials />

    </div>
  );
};

export default User_Home;