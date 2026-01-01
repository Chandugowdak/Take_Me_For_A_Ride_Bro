import React, { useEffect, useState } from "react";
import axios from "axios";
import "./My_Bookings.css";

const My_Bookings = () => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchMyBookings = async () => {
    try {
      const token = localStorage.getItem("JWT_Token");

      const res = await axios.get(
        "http://localhost:3000/api/req/user",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setRequests(res.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const cancelRequest = async (id) => {
    try {
      const token = localStorage.getItem("JWT_Token");

      await axios.delete(
        `http://localhost:3000/api/req/cancel/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      fetchMyBookings();
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchMyBookings();
  }, []);

  if (loading) {
    return (
      <div className="text-center mt-5">
        <div className="spinner-border text-primary"></div>
      </div>
    );
  }

  return (
    <div className="my-requests container py-4">
      <h3 className="mb-4 fw-bold text-center">🚗 My Bookings</h3>

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
                <div className="vehicle-img-wrapper">
                  <img
                    src={req.rentalId?.Image_URL}
                    alt={req.rentalId?.Vehical_Name || "Vehicle"}
                    className="vehicle-img"
                    onError={(e) => {
                      e.target.src = "/no-image.png";
                    }}
                  />
                </div>

                {/* OWNER */}
                <p className="user-name mb-2">
                  👤 Owner:{" "}
                  <span>
                    {req.rentalId?.userId?.name || "Not Available"}
                  </span>
                </p>

                {/* VEHICLE */}
                <p className="vehicle-name mb-2">
                  🚘 Vehicle:{" "}
                  <span>{req.rentalId?.Vehical_Name || "Vehicle"}</span>
                </p>

                {/* PRICE */}
                <p className="duration mb-3">
                  💰 Price / Day: ₹{req.rentalId?.Total_Amount || "--"}
                </p>

                {/* ACTION */}
                {req.status === "pending" ? (
                  <button
                    className="btn btn-outline-danger w-100 btn-sm"
                    onClick={() => cancelRequest(req._id)}
                  >
                    Cancel Request
                  </button>
                ) : (
                  <button
                    className="btn btn-outline-secondary w-100 btn-sm"
                    disabled
                  >
                    Request {req.status}
                  </button>
                )}

              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default My_Bookings;
