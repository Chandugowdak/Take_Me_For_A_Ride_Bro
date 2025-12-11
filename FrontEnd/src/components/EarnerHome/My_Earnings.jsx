import React from "react";
import "./My_Earnings.css";

const My_Earnings = () => {
  const earnings = [
    { month: "May", rides: 12, amount: 2000, bonus: 150 },
    { month: "June", rides: 15, amount: 1850, bonus: 200 },
    { month: "July", rides: 18, amount: 2300, bonus: 300 },
    { month: "August", rides: 14, amount: 1950, bonus: 180 },
    { month: "September", rides: 20, amount: 2500, bonus: 350 },
    { month: "October", rides: 17, amount: 2200, bonus: 250 },
  ];

  return (
    <div className="my-earnings container py-5">
      <h2 className="text-center mb-4">My Earnings 💰</h2>
      <div className="row g-4">
        {earnings.map((item, index) => (
          <div key={index} className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
            <div className="earning-card p-4 shadow-sm">
              <h5 className="earning-month">{item.month}</h5>
              <p className="earning-rides">{item.rides} rides completed</p>
              <p className="earning-amount">₹ {item.amount}</p>
              <p className="earning-bonus">Bonus: ₹ {item.bonus}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default My_Earnings;
