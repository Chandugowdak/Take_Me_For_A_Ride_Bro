import React from "react";
import { FaUser, FaMotorcycle, FaCalendarAlt, FaClock } from "react-icons/fa";
import "./My_Requests.css";

const My_Requests = () => {
  const requests = [
    {
      user: "Amit Sharma",
      vehicle: "Royal Enfield Classic 350",
      date: "18 Dec 2025",
      duration: "3 Days",
      status: "Pending",
    },
    {
      user: "Neha Verma",
      vehicle: "Honda Activa 6G",
      date: "17 Dec 2025",
      duration: "2 Days",
      status: "Accepted",
    },
    {
      user: "Rahul Mehta",
      vehicle: "KTM Duke 250",
      date: "15 Dec 2025",
      duration: "5 Days",
      status: "Rejected",
    },
    {
      user: "Pooja Singh",
      vehicle: "Suzuki Swift",
      date: "14 Dec 2025",
      duration: "1 Day",
      status: "Pending",
    },
    {
      user: "Arjun Rao",
      vehicle: "Yamaha R15",
      date: "13 Dec 2025",
      duration: "4 Days",
      status: "Accepted",
    },
    {
      user: "Sneha Kulkarni",
      vehicle: "Bajaj Pulsar 150",
      date: "12 Dec 2025",
      duration: "2 Days",
      status: "Pending",
    },
  ];

  return (
    <div className="my-requests container-fluid py-5">
      <div className="container">
        <h2 className="text-center mb-5 fw-bold">
          My Rental Requests
        </h2>

        <div className="row g-4">
          {requests.map((req, index) => (
            <div key={index} className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
              <div className="request-card animate-card">

                <div className="d-flex justify-content-between align-items-center mb-2">
                  {/* ✅ FIXED CLASSNAME BUG */}
                  <span className={`status-badge ${req.status.toLowerCase()}`}>
                    {req.status}
                  </span>

                  <span className="request-date">
                    <FaCalendarAlt /> {req.date}
                  </span>
                </div>

                <h5 className="user-name mb-2">
                  <FaUser /> {req.user}
                </h5>

                <p className="vehicle-name mb-1">
                  <FaMotorcycle /> {req.vehicle}
                </p>

                <p className="duration">
                  <FaClock /> {req.duration}
                </p>

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default My_Requests;
