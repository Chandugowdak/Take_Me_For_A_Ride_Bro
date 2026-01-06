import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Earner_History.css";

const Earner_History = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [data, setData] = useState({
    pending: [],
    accepted: [],
    rejected: [],
    counts: {}
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchEarnerRequests();
  }, []);

  const fetchEarnerRequests = async () => {
    try {
      const token = localStorage.getItem("JWT_Token");

      const res = await axios.get(
        "http://localhost:3000/api/req/earner/request/all",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setData(res.data);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  const getVisibleData = () => {
    if (activeTab === "pending") return data.pending;
    if (activeTab === "accepted") return data.accepted;
    if (activeTab === "rejected") return data.rejected;
    return [...data.pending, ...data.accepted, ...data.rejected];
  };

  if (loading) {
    return (
      <div className="earner-history text-center py-5">
        <h5>Loading request history...</h5>
      </div>
    );
  }

  return (
    <div className="earner-history container-fluid py-5">
      <div className="container">

        {/* HEADER */}
        <h2 className="text-center fw-bold mb-4">Request History</h2>

        {/* TABS */}
        <div className="status-tabs">
          <button
            className={activeTab === "all" ? "active" : ""}
            onClick={() => setActiveTab("all")}
          >
            All ({data?.totalRequests})
          </button>
          <button
            className={activeTab === "pending" ? "active" : ""}
            onClick={() => setActiveTab("pending")}
          >
            Pending ({data?.counts?.pending || 0})
          </button>
          <button
            className={activeTab === "accepted" ? "active" : ""}
            onClick={() => setActiveTab("accepted")}
          >
            Accepted ({data?.counts?.accepted || 0})
          </button>
          <button
            className={activeTab === "rejected" ? "active" : ""}
            onClick={() => setActiveTab("rejected")}
          >
            Rejected ({data?.counts?.rejected || 0})
          </button>
        </div>

        {/* CARDS */}
        <div className="row g-4 mt-3">
          {getVisibleData().length === 0 ? (
            <p className="text-center text-muted">No requests found</p>
          ) : (
            getVisibleData().map((item, index) => (
              <div
                key={item._id}
                className="col-xl-4 col-lg-6 col-md-6 col-sm-12"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`earner-card animate-card ${item.status}`}>

                  <img
                    src={item?.rentalId?.Image_URL}
                    alt="vehicle"
                    className="earner-vehicle-img"
                  />

                  <h5 className="earner-vehicle">
                    {item?.rentalId?.Vehical_Name}
                  </h5>

                  <p className="earner-renter">
                    Requested by: <strong>{item?.userId?.name}</strong>
                  </p>

                  <p className="earner-date">
                    {new Date(item.createdAt).toDateString()}
                  </p>

                  <span className={`earner-status ${item.status}`}>
                    {item.status}
                  </span>

                </div>
              </div>
            ))
          )}
        </div>

      </div>
    </div>
  );
};

export default Earner_History;
