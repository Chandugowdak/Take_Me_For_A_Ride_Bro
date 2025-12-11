import React from "react";
import { FaUser, FaMotorcycle, FaCalendarAlt, FaClock } from "react-icons/fa";
import "./My_Requests.css";

const My_Requests = () => {
  const requests = [
    { user: "Sam Wilson", vehicle: "Royal Enfield Classic 350", date: "2025-12-10", duration: "3 days", status: "Pending" },
    { user: "Jessica Brown", vehicle: "Honda Activa 125", date: "2025-12-11", duration: "2 days", status: "Accepted" },
    { user: "Michael Scott", vehicle: "KTM Duke 250", date: "2025-12-12", duration: "5 days", status: "Rejected" },
    { user: "Emma Watson", vehicle: "Suzuki Swift", date: "2025-12-13", duration: "1 day", status: "Pending" },
    { user: "Robert Downey", vehicle: "Yamaha R15", date: "2025-12-14", duration: "4 days", status: "Accepted" },
    { user: "Scarlett Johansson", vehicle: "Bajaj Pulsar 150", date: "2025-12-15", duration: "2 days", status: "Pending" },
  ];

  return (
    <div className="my-requests container py-5">
      <h2 className="text-center mb-5">My Requests 📩</h2>
      <div className="row g-4">
        {requests.map((req, index) => (
          <div key={index} className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
            <div className="request-card shadow-sm p-3 rounded-4">
              <div className="d-flex justify-content-between align-items-center mb-2">
                <span className="status-badge me-2 {req.status.toLowerCase()}">{req.status}</span>
                <span className="request-date"><FaCalendarAlt /> {req.date}</span>
              </div>
              <h5 className="user-name mb-2"><FaUser /> {req.user}</h5>
              <p className="vehicle-name"><FaMotorcycle /> {req.vehicle}</p>
              <p className="duration"><FaClock /> {req.duration}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default My_Requests;
