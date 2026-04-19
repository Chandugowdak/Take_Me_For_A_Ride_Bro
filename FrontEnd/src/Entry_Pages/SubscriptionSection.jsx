import React, { useContext, useState } from "react";
import "./SubscriptionSection.css";
import { GlobelValue } from "../context/GlobelVariable";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const SubscriptionSection = () => {
  const { JWT_Token } = useContext(GlobelValue);
  const navigate = useNavigate();

  const [showSubscriptionModal, setShowSubscriptionModal] = useState(false);

  const HandelClick = () => {
    if (!JWT_Token) {
      toast.warning("Please login to subscribe");
      navigate("/");
    } else {
      setShowSubscriptionModal(true);
    }
  };

  const bikes = [
    {
      name: "Bullet 350",
      price: 9999,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDYVbDAal0CY7xGYSJIiXo5zrgMVotmee6lQ&s",
    },
    {
      name: "TVS Ntorq 125 (BS6)",
      price: 5459,
      image:
        "https://imgd.aeplcdn.com/1280x720/n/cw/ec/102709/ntorq-125-right-front-three-quarter.jpeg",
    },
    {
      name: "Aprilia SR 125",
      price: 4592,
      image:
        "https://ascomotors.in/cdn/shop/files/2_d6ea7793-7a3c-4893-8974-e1b65ecc874d.jpg",
    },
    {
      name: "Bajaj Pulsar 150 Neon",
      price: 4775,
      image:
        "https://images.carandbike.com/bike-images/colors/bajaj/pulsar-150/bajaj-pulsar-150-neon-silver.jpg",
    },
    {
      name: "Honda Activa 6G",
      price: 4593,
      image:
        "https://imgd.aeplcdn.com/1280x720/n/cw/ec/44686/activa-6g-right-side-view-8.jpeg",
    },
    {
      name: "Ather 450X",
      price: 5999,
      image:
        "https://imgd.aeplcdn.com/664x374/n/cw/ec/147925/450x-right-front-three-quarter.jpeg",
    },
  ];

  return (
    <div className="subscription-section py-5">

      <div className="container text-center mb-5">
        <h2 className="sub-title">Monthly Bike Subscriptions</h2>
        <p className="text-muted sub-desc">
          Choose your bike and subscribe for hassle-free monthly rides.
        </p>

        <div className="row g-4 justify-content-center mt-4">
          {bikes.map((bike, i) => (
            <div key={i} className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="bike-card">
                <div className="bike-img">
                  <img src={bike.image} alt={bike.name} />
                </div>

                <h6 className="bike-name">{bike.name}</h6>

                <p className="bike-price">
                  Starts at <span>₹ {bike.price}</span>/month
                </p>

                <button
                  className="btn subscribe-btn w-100"
                  onClick={HandelClick}
                >
                  Subscribe Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ✅ RENAMED MODAL */}
      {showSubscriptionModal && (
        <div className="subscription-modal-overlay">
          <div className="subscription-modal-box">

            <h3 className="subscription-modal-title">🚀 Work in Progress</h3>

            <p className="subscription-modal-text">
              Subscription feature is currently under development.
              <br />
              It will be available for you very soon!
            </p>

            <button
              className="btn subscription-modal-btn"
              onClick={() => setShowSubscriptionModal(false)}
            >
              Got it 👍
            </button>

          </div>
        </div>
      )}
    </div>
  );
};

export default SubscriptionSection;