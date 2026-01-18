import React, { useEffect, useState } from "react";
import "./AutoScrollCarousel.css";
import { FaCheckCircle, FaMotorcycle, FaHeadset } from "react-icons/fa";

const features = [
  {
    id: 1,
    title: "Well Maintained Bikes",
    desc: "All bikes are professionally serviced, sanitized, and inspected before every ride.",
    image: "https://bykemania.com/bootstrapimages/slider4.png",
    points: ["Regular servicing", "Safety checked", "Clean & hygienic"]
  },
  {
    id: 2,
    title: "Home Delivery",
    desc: "Book online and get your bike delivered straight to your doorstep.",
    image: "https://bykemania.com/bootstrapimages/slider3.png",
    points: ["Fast delivery", "Flexible timings", "Zero hassle"]
  },
  {
    id: 3,
    title: "Wallet Friendly",
    desc: "Affordable rental plans with transparent pricing and no hidden charges.",
    image: "https://bykemania.com/bootstrapimages/slider2.png",
    points: ["Best prices", "No deposit*", "Easy refunds"]
  },
  {
    id: 4,
    title: "24/7 Roadside Assistance",
    desc: "Ride stress-free with round-the-clock roadside support.",
    image: "https://bykemania.com/bootstrapimages/slider1.png",
    points: ["Emergency support", "Quick response", "Reliable help"]
  }
];

const AutoScrollCarousel = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % features.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const current = features[index];

  return (
    <div className="container my-5">
      <div className="row align-items-center feature-box position-relative overflow-hidden">

        {/* Floating Shapes */}
        <span className="shape shape1"></span>
        <span className="shape shape2"></span>

        {/* LEFT IMAGE */}
        <div className="col-md-6 text-center image-wrapper">
          <img
            src={current.image}
            alt={current.title}
            className="feature-img"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="col-md-6 content-wrapper">
          <p className="small-title">Why riders love us?</p>
          <h2 className="feature-title">{current.title}</h2>
          <p className="feature-desc">{current.desc}</p>

          {/* Bullet Points */}
          <ul className="feature-points">
            {current.points.map((point, i) => (
              <li key={i}>
                <FaCheckCircle /> {point}
              </li>
            ))}
          </ul>

          {/* Trust Badges */}
          <div className="trust-badges">
            <span><FaMotorcycle /> 5000+ Rides</span>
            <span><FaHeadset /> 24/7 Support</span>
          </div>

          

          {/* DOTS */}
          <div className="dots">
            {features.map((_, i) => (
              <span
                key={i}
                className={`dot ${i === index ? "active" : ""}`}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default AutoScrollCarousel;
