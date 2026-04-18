import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { GlobelValue } from "../../context/GlobelVariable";
import "./User_Home.css";
import TopCities from "../../Footer_Section/TopCities";
import AutoScrollCarousel from "../../Common_Component/AutoScrollCarousel";
import Testimonials from "../../Common_Component/Testimonials";
import HowRentingWorks from "./HowRentingWorks";
import { toast } from "react-toastify";

const User_Home = () => {
  const { JWT_Token } = useContext(GlobelValue);

  const [vehicals, setVehicals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  const [sendingId, setSendingId] = useState(null);
  const [requestedIds, setRequestedIds] = useState([]);

  const [showModal, setShowModal] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const [totalAmount, setTotalAmount] = useState(0);

  // ✅ ONLY coupon field (simple)
  const [couponCode, setCouponCode] = useState("");

  /* ================= FETCH VEHICLES ================= */
  const fetchVehicals = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/vehicals/all");
      setVehicals(res.data?.Vehicals || []);
    } catch (error) {
      console.error("Error fetching vehicles", error);
    } finally {
      setLoading(false);
    }
  };

  /* ================= FETCH USER REQUESTS ================= */
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

      const ids =
        res.data?.pendingRequests
          ?.filter((req) => req.rentalId)
          .map((req) => req.rentalId._id) || [];

      setRequestedIds(ids);
    } catch (error) {
      console.error("Error fetching requests", error);
    }
  };

  useEffect(() => {
    fetchVehicals();
  }, []);

  useEffect(() => {
    fetchRequestedVehicles();
  }, [JWT_Token]);

  /* ================= DATE CALCULATION ================= */
  useEffect(() => {
    if (startDate && endDate && selectedVehicle) {
      const start = new Date(startDate);
      const end = new Date(endDate);

      const days =
        Math.ceil((end - start) / (1000 * 60 * 60 * 24)) || 1;

      const total = days > 0 ? days * selectedVehicle.pricePerDay : 0;

      setTotalAmount(total);
    }
  }, [startDate, endDate, selectedVehicle]);

  /* ================= OPEN MODAL ================= */
  const openBooking = (vehicle) => {
    setSelectedVehicle(vehicle);
    setShowModal(true);
    setStartDate("");
    setEndDate("");
    setTotalAmount(0);
    setCouponCode(""); // reset
  };

  /* ================= SEND REQUEST ================= */
  const handleSendRequest = async () => {
    try {
      if (!JWT_Token) {
        toast.error("Please login first");
        return;
      }

      setSendingId(selectedVehicle._id);

      const res = await axios.post(
        "http://localhost:3000/api/req/send",
        {
          rentalId: selectedVehicle._id,
          startDate,
          endDate,
          couponCode // ✅ sent directly
        },
        {
          headers: {
            Authorization: `Bearer ${JWT_Token}`,
          },
        }
      );
    
 toast.success(
  `Booked Successfully 🎉 ${
    res?.data?.request?.discountAmount
      ? `You saved ₹${res.data.request.discountAmount}`
      : ""
  }`
);

      setShowModal(false);
      fetchRequestedVehicles();

    } catch (error) {
      toast.error(error?.response?.data?.message || "Something went wrong 🚨");
    } finally {
      setSendingId(null);
    }
  };

  /* ================= SEARCH ================= */
  const filteredVehicals = vehicals.filter((item) => {
    const keyword = searchTerm.toLowerCase();
    return (
      item.Vehical_Name?.toLowerCase().includes(keyword) ||
      item.Type_of_Vehical?.toLowerCase().includes(keyword)
    );
  });

  const today = new Date().toISOString().split("T")[0];

  return (
    <div className="user-home-container">

      <AutoScrollCarousel />

      <section className="user-hero container">
        <h1 className="user-title">Find Your Perfect Ride</h1>

        <div className="search-box shadow-sm">
          <input
            type="text"
            className="form-control search-input"
            placeholder="Search Bike..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </section>

      <section className="popular-bikes container mt-5">
        <h2 className="section-heading text-center">
          Popular Vehicles
        </h2>

        <div className="row mt-4 gy-4 justify-content-center">
          {loading ? (
            <p className="text-center">Loading...</p>
          ) : filteredVehicals.length === 0 ? (
            <p className="text-center">No vehicles found</p>
          ) : (
            filteredVehicals.map((item) => {
              const isRequested = requestedIds.includes(item._id);

              return (
                <div className="col-12 col-sm-6 col-md-4" key={item._id}>
                  <div className="bike-card shadow-sm">

                    <img
                      src={item.Image_URL}
                      alt={item.Vehical_Name}
                      className="bike-image"
                    />

                    <h4>{item.Vehical_Name}</h4>
                    <p>₹{item.pricePerDay}/day</p>

                    <button
                      className="btn btn-outline-primary"
                      disabled={isRequested}
                      onClick={() => openBooking(item)}
                    >
                      {isRequested ? "Requested" : "Rent Now"}
                    </button>

                  </div>
                </div>
              );
            })
          )}
        </div>
      </section>

      {/* ================= MODAL ================= */}
      {showModal && (
        <div
          className="modal fade show d-block"
          style={{ background: "#000000aa" }}
          onClick={() => setShowModal(false)}
        >
          <div
            className="modal-dialog modal-dialog-centered"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-content p-4">

              <h4>{selectedVehicle?.Vehical_Name}</h4>

              <label>Start Date</label>
              <input
                type="date"
                min={today}
                className="form-control mb-2"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />

              <label>End Date</label>
              <input
                type="date"
                min={startDate || today}
                className="form-control mb-2"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />

              <h5>Total: ₹{totalAmount}</h5>

              {/* ✅ SIMPLE COUPON INPUT */}
              <input
                type="text"
                placeholder="Enter Coupon Code (Optional)"
                className="form-control mt-2"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
              />

              <div className="d-flex justify-content-end gap-2 mt-3">
                <button
                  className="btn btn-secondary"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>

                <button
                  className="btn btn-primary"
                  disabled={
                    sendingId === selectedVehicle?._id ||
                    !startDate ||
                    !endDate
                  }
                  onClick={handleSendRequest}
                >
                  {sendingId === selectedVehicle?._id
                    ? "Sending..."
                    : "Book Now"}
                </button>
              </div>

            </div>
          </div>
        </div>
      )}

      <HowRentingWorks />
      <TopCities />
      <Testimonials />

    </div>
  );
};

export default User_Home;