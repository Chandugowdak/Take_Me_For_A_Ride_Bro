import React, { useEffect, useState } from "react";
import axios from "axios";
import "./User_History.css";

const User_History = () => {
  const [trips, setTrips] = useState([]);
  const [totalTrips, setTotalTrips] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUserHistory();
  }, []);

  const fetchUserHistory = async () => {
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

      setTrips(res.data.vehicles);
      setTotalTrips(res.data.totalTrips);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
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
        <h2 className="text-center fw-bold mb-1">My Ride History</h2>
        <p className="text-center text-muted mb-5">
          {totalTrips} trips completed
        </p>

        <div className="row g-4">
          {trips.length === 0 ? (
            <p className="text-center text-muted">
              No ride history found
            </p>
          ) : (
            trips.map((item, index) => (
              <div
                key={item._id}
                className="col-xl-4 col-lg-6 col-md-6 col-sm-12"
                style={{ animationDelay: `${index * 0.12}s` }}
              >
                <div className="history-card animate-card">

                  <img
                    src={item.rentalId.Image_URL}
                    alt="vehicle"
                    className="history-vehicle-img"
                  />

                  <h5 className="history-vehicle">
                    {item.rentalId.Vehical_Name}
                  </h5>

                  <p className="history-owner">
                    Owner: <strong>{item.rentalId.userId.name}</strong>
                  </p>

                  <p className="history-date">
                    {new Date(item.createdAt).toDateString()}
                  </p>

                  <span className="history-status accepted">
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

export default User_History;
