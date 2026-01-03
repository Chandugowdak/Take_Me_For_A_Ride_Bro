import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  FaUser,
  FaMotorcycle,
  FaCalendarAlt,
  FaClock,
} from "react-icons/fa";
import "./My_Requests.css";

const My_Requests = () => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem("JWT_Token");

  const fetchRequests = async () => {
    try {
      const res = await axios.get(
        "http://localhost:3000/api/req/pending",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setRequests(res.data);
      console.log(res.data)
      setLoading(false);
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  const handleStatusUpdate = async (id, status) => {
    try {
      await axios.patch(
        `http://localhost:3000/api/req/update/${id}`,
        { status },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setRequests((prev) => prev.filter((r) => r._id !== id));
    } catch (err) {
      alert("Action failed");
    }
  };

  if (loading) {
    return (
      <div className="my-requests text-center py-5">
        <h5>Loading requests...</h5>
      </div>
    );
  }

  return (
    <div className="my-requests container-fluid py-5">
      <div className="container">
        <h2 className="text-center fw-bold mb-5">
          Rental Requests
        </h2>

        <div className="row g-4">
          {requests.length === 0 ? (
            <p className="text-center">No pending requests</p>
          ) : (
            requests.map((req) => {
              const rental = req.rentalId;

              const days =
                Math.ceil(
                  (new Date(rental.Return_Date) -
                    new Date(rental.Rentel_Date)) /
                    (1000 * 60 * 60 * 24)
                ) || 1;

              return (
                <div
                  key={req._id}
                  className="col-xl-4 col-lg-6 col-md-6"
                >
                  <div className="request-card-new animate-card">

                    {/* TOP */}
                    <div className="request-top">
                      <span className="status-pill pending">
                        Pending
                      </span>

                      <span className="request-date">
                        <FaCalendarAlt />{" "}
                        {new Date(req.createdAt).toLocaleDateString()}
                      </span>
                    </div>

                 {/* VEHICLE */}
<div className="vehicle-box">
  <img
    src={rental.Image_URL}
    alt="Vehicle_Image"
    className="vehicle-img"
  />
  <h5>{rental.Vehical_Name}</h5>
</div>


                    {/* DETAILS */}
                    <div className="request-details">
                      <p>
                        <FaUser /> Requested by:{" "}
                        <strong>{req.userId?.name}</strong>
                      </p>

                      <p>
                        <FaClock /> Duration:{" "}
                        <strong>{days} Days</strong>
                      </p>
                    </div>

                    {/* ACTIONS */}
                    <div className="request-actions">
                      <button
                        className="btn accept-btn"
                        onClick={() =>
                          handleStatusUpdate(req._id, "accepted")
                        }
                      >
                        Accept
                      </button>

                      <button
                        className="btn reject-btn"
                        onClick={() =>
                          handleStatusUpdate(req._id, "declined")
                        }
                      >
                        Reject
                      </button>
                    </div>

                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default My_Requests;
