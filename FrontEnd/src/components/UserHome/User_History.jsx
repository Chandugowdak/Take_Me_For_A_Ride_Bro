import React, { useEffect, useState } from "react";
import axios from "axios";
import "./User_History.css";

const User_History = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [requests, setRequests] = useState({
    pending: [],
    accepted: [],
    rejected: []
  });
  const [totalRequests, setTotalRequests] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUserRequests();
  }, []);

  const fetchUserRequests = async () => {
    try {
      const token = localStorage.getItem("JWT_Token");

      const res = await axios.get(
        "http://localhost:3000/api/req/user/history",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setRequests({
        pending: res.data.pending,
        accepted: res.data.accepted,
        rejected: res.data.rejected
      });
      setTotalRequests(res.data.totalRequests);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  const cancelRequest = async (id) => {
    try {
      const token = localStorage.getItem("JWT_Token");
      await axios.delete(
        `http://localhost:3000/api/req/cancel/${id}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      fetchUserRequests(); // refresh after cancel
    } catch (err) {
      console.error(err);
    }
  };

  const getVisibleData = () => {
    if (activeTab === "pending") return requests.pending;
    if (activeTab === "accepted") return requests.accepted;
    if (activeTab === "rejected") return requests.rejected;
    return [...requests.pending, ...requests.accepted, ...requests.rejected];
  };

  if (loading) {
    return (
      <div className="user-history text-center py-5">
        <h5>Loading ride history...</h5>
      </div>
    );
  }

  return (
    <div className="user-history container-fluid py-5">
      <div className="container">

        {/* HEADER */}
        <h2 className="text-center fw-bold mb-4">My Ride History</h2>
        <p className="text-center text-muted mb-4">{totalRequests} trips total</p>

        {/* TABS */}
        <div className="status-tabs mb-4">
          <button
            className={activeTab === "all" ? "active" : ""}
            onClick={() => setActiveTab("all")}
          >
            All ({totalRequests})
          </button>
          <button
            className={activeTab === "pending" ? "active" : ""}
            onClick={() => setActiveTab("pending")}
          >
            Pending ({requests.pending.length})
          </button>
          <button
            className={activeTab === "accepted" ? "active" : ""}
            onClick={() => setActiveTab("accepted")}
          >
            Accepted ({requests.accepted.length})
          </button>
          <button
            className={activeTab === "rejected" ? "active" : ""}
            onClick={() => setActiveTab("rejected")}
          >
            Rejected ({requests.rejected.length})
          </button>
        </div>

        {/* REQUEST CARDS */}
        <div className="requests-grid">
          {getVisibleData().length === 0 ? (
            <p className="text-center text-muted w-100">No requests found</p>
          ) : (
            getVisibleData().map((item, index) => (
              <div
                key={item._id}
                className={`request-card animate-card ${item.status}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img
                  src={item.rentalId?.Image_URL || "/no-image.png"}
                  alt={item.rentalId?.Vehical_Name || "Vehicle"}
                  className="request-vehicle-img"
                />

                <h5 className="request-vehicle">
                  {item.rentalId?.Vehical_Name || "Vehicle"}
                </h5>

                <p className="request-owner">
                  Owner: <strong>{item.rentalId?.userId?.name || "N/A"}</strong>
                </p>

                <p className="request-date">
                  {new Date(item.createdAt).toDateString()}
                </p>

                <span className={`request-status ${item.status}`}>
                  {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                </span>

                {item.status === "pending" && (
                  <button
                    className="btn btn-outline-danger w-100 btn-sm mt-2"
                    onClick={() => cancelRequest(item._id)}
                  >
                    Cancel Request
                  </button>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default User_History;
