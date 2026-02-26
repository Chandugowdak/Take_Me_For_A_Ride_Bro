import React, { useEffect, useState } from "react";
import axios from "axios";
import "./My_Earnings.css";

const My_Earnings = () => {
  const [earnings, setEarnings] = useState([]);
  const [totalTrips, setTotalTrips] = useState(0);
  const [loading, setLoading] = useState(true);
  const [Total_Earinig_Amount, setTotal_Earinig_Amount] = useState(0);

  const fetchEarnings = async () => {
    try {
      const token = localStorage.getItem("JWT_Token");
      //  console.log(token);
      const res = await axios.get(
        "http://localhost:3000/api/req/earner/earnings",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      setEarnings(res.data.earnings);
      setTotalTrips(res.data.totalTrips);
      console.log(res.data.totalEarnings);

      setLoading(false);
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };



  useEffect(() => {
    fetchEarnings();
 
  }, []);


  // TO HANDEL TOATL AMOUNT EARNED
  useEffect(()=>{
    const Toatl = earnings.reduce((acc,curr)=>{
      return acc + (curr.rentalId.Total_Amount || 0);
    },0);
    setTotal_Earinig_Amount(Toatl);
  },[earnings])

  if (loading) {
    return (
      <div className="my-earnings text-center py-5">
        <h5>Loading earnings...</h5>
      </div>
    );
  }

  console.log(Total_Earinig_Amount)

  return (
    <div className="my-earnings container-fluid py-5">
      <div className="container">
        {/* HEADER */}
        <h2 className="text-center fw-bold mb-1">My Earnings</h2>
        <p className="text-center text-muted mb-5">
          {totalTrips} trips completed
        </p>

        <div className="row g-4">
          {earnings.length === 0 ? (
            <p className="text-center text-muted">No earnings yet</p>
          ) : (
            earnings.map((item, index) => (
              <div
                key={item._id}
                className="col-xl-4 col-lg-6 col-md-6 col-sm-12"
                style={{ animationDelay: `${index * 0.12}s` }}
              >
                <div className="earning-card animate-card">
                  <img
                    src={item.rentalId.Image_URL}
                    alt="vehicle"
                    className="earning-vehicle-img"
                  />

                  <h5 className="earning-vehicle">
                    {item.rentalId.Vehical_Name}
                  </h5>

                  <p className="earning-user">
                    Booked by <strong>{item.userId.name}</strong>
                  </p>

                  <p className="earning-user">
                    Amount <strong>{item.rentalId.Total_Amount}</strong>
                  </p>
                  <p className="earning-date">
                    {new Date(item.createdAt).toDateString()}
                  </p>

                  <span className="earning-status accepted">{item.status}</span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default My_Earnings;
