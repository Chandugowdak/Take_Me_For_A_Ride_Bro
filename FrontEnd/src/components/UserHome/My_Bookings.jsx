import React, { useEffect, useState } from "react";
import axios from "axios";
import "./My_Bookings.css";
import { useNavigate } from "react-router-dom";

const My_Bookings = () => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  // For Navigation
  const navigate = useNavigate();

  // ✅ NEW STATE FOR MODAL
  const [showOwnerModal, setShowOwnerModal] = useState(false);
  const [selectedOwner, setSelectedOwner] = useState(null);

  /* ================= FETCH BOOKINGS ================= */
  const fetchMyBookings = async () => {
    try {
      const token = localStorage.getItem("JWT_Token");

      const res = await axios.get(
        "http://localhost:3000/api/req/user/history",
        {
          headers: { Authorization: `Bearer ${token}` },
        },
      );

      setRequests([...res.data.pending, ...res.data.accepted]);
     console.log(res.data);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  /* ================= CANCEL REQUEST ================= */
  const cancelRequest = async (id) => {
    try {
      const token = localStorage.getItem("JWT_Token");

      await axios.delete(`http://localhost:3000/api/req/cancel/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      fetchMyBookings();
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchMyBookings();
  }, []);

  /* ================= LOADING ================= */
  if (loading) {
    return (
      <div className="text-center mt-5">
        <div className="spinner-border text-primary"></div>
      </div>
    );
  }

  return (
    <div className="my-requests py-4">
      <div className="container">
        <h3 className="mb-4 fw-bold text-center">
          🚗 My Bookings (Pending & Accepted)
        </h3>
        <p className="cod-warning text-center">
          ⚠️ Only Cash on Delivery (COD) is accepted on this platform
        </p>

        {requests.length === 0 ? (
          <p className="text-center text-muted">No bookings found</p>
        ) : (
          <div className="row g-4">
            {requests.map((req) => (
              <div className="col-md-6 col-lg-4" key={req._id}>
                <div className="request-card animate-card">
                  {/* HEADER */}
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <span className={`status-badge ${req.status}`}>
                      {req.status}
                    </span>
                    <span className="request-date">
                      {new Date(req.createdAt).toLocaleDateString()}
                    </span>
                  </div>

                  {/* IMAGE */}
                  <div className="vehicle-img-wrapper mb-2">
                    <img
                      src={req.rentalId?.Image_URL}
                      alt={req.rentalId?.Vehical_Name || "Vehicle"}
                      className="vehicle-img"
                      onError={(e) => {
                        e.target.src = "/no-image.png";
                      }}
                    />
                  </div>

                  {/* VEHICLE */}
                  <p className="vehicle-name mb-1">
                    🚘 Vehicle:{" "}
                    <span>{req.rentalId?.Vehical_Name || "N/A"}</span>
                  </p>

                  {/* PRICE */}
                  <p className="duration mb-2">
                    💰 Price / Day: ₹{req.discountedAmount || "--"}
                  </p>

                  {/* ✅ VIEW OWNER BUTTON */}
                {req.status === "accepted" && (
  <>
    {/* View Owner */}
    <button
      className="btn btn-outline-primary w-100 btn-sm mb-2"
      onClick={() => {
        setSelectedOwner(req.rentalId?.userId);
        setShowOwnerModal(true);
      }}
    >
      View Owner Details
    </button>

    {/* 💸 PAY ONLINE */}
    <button
      className="btn btn-success w-100 btn-sm mb-2"
      onClick={() => {
        navigate("/payment", {
          state: {
            receiverPhone: req.rentalId?.userId?.phone,
            amount: req.discountedAmount,
            vehicleName: req.rentalId?.Vehical_Name,
          },
        });
      }}
    >
      Pay Online 💸
    </button>

    {/* 💵 CASH ON DELIVERY */}
    <button
      className="btn btn-warning w-100 btn-sm"
      onClick={() => {
        alert("Cash on Delivery Selected 💵");
      }}
    >
      Cash on Delivery 💵
    </button>
  </>
)}

                  {/* ✅ CANCEL ONLY IF PENDING */}
                  {req.status === "pending" && (
                    <button
                      className="btn btn-outline-danger w-100 btn-sm"
                      onClick={() => cancelRequest(req._id)}
                    >
                      Cancel Request
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* ================= OWNER MODAL ================= */}
      {showOwnerModal && selectedOwner && (
        <>
          {/* BACKDROP */}
          <div
            className="custom-backdrop"
            onClick={() => setShowOwnerModal(false)}
          ></div>

          {/* MODAL */}
          <div className="custom-modal">
            <div className="modal-box text-center">
              <h4 className="mb-3">👤 Owner Details</h4>

              <i className="bi bi-person-circle fs-1 text-primary mb-3"></i>

              <p className="mb-2">
                <strong>Name:</strong> {selectedOwner?.name || "N/A"}
              </p>

              <p className="mb-3">
                <strong>Phone:</strong> {selectedOwner?.phone || "N/A"}
              </p>

              <button
                className="btn btn-secondary w-100"
                onClick={() => setShowOwnerModal(false)}
              >
                Close
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default My_Bookings;
