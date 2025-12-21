import React from "react";
import "./My_Earnings.css";

const My_Earnings = () => {
  const earnings = [
    { month: "May 2025", rides: 12, amount: 8200, bonus: 500 },
    { month: "June 2025", rides: 15, amount: 9500, bonus: 700 },
    { month: "July 2025", rides: 18, amount: 11200, bonus: 900 },
    { month: "August 2025", rides: 14, amount: 8900, bonus: 600 },
    { month: "September 2025", rides: 20, amount: 13500, bonus: 1200 },
    { month: "October 2025", rides: 17, amount: 10800, bonus: 850 },
  ];

  return (
    <div className="my-earnings container-fluid py-5">
      <div className="container">
        <h2 className="text-center mb-5 fw-bold">
          My Earnings
        </h2>

      <div className="row g-4">
  {earnings.map((item, index) => (
    <div
      key={index}
      className="col-xl-4 col-lg-6 col-md-6 col-sm-12"
      style={{ animationDelay: `${index * 0.12}s` }}
    >
      <div className="earning-card animate-card">

        <h5 className="earning-month">{item.month}</h5>

        <p className="earning-rides">
          {item.rides} rides completed
        </p>

        <h3 className="earning-amount">
          ₹ {item.amount.toLocaleString()}
        </h3>

        <p className="earning-bonus">
          Bonus Earned: ₹ {item.bonus}
        </p>

      </div>
    </div>
  ))}
</div>

      </div>
    </div>
  );
};

export default My_Earnings;
