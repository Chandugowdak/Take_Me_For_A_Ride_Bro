import React, { useEffect, useState } from "react";
import "./AutoScrollCarousel.css";

const features = [
  {
    id: 1,
    title: "Well Maintained",
    desc: "All bikes are regularly serviced and inspected for safety.",
    image: "https://bykemania.com/bootstrapimages/slider4.png"
  },
  {
    id: 2,
    title: "Home Delivery",
    desc: "Get your bike delivered directly to your doorstep.",
    image: "https://bykemania.com/bootstrapimages/slider3.png"
  },
  {
    id: 3,
    title: "Wallet Friendly",
    desc: "Affordable rental plans that suit your budget.",
    image: "https://bykemania.com/bootstrapimages/slider2.png"
  },
  {
    id: 4,
    title: "Roadside Assistance",
    desc: "24/7 roadside support for a worry-free ride.",
    image: "https://bykemania.com/bootstrapimages/slider1.png"
  }
];

const  AutoScrollCarousel= ()=>{
  const [index, setIndex] = useState(0);

  // Auto change slide
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % features.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container my-5">
      <div className="row align-items-center feature-box">

        {/* LEFT IMAGE */}
        <div className="col-md-6 text-center position-relative">
          <img
            src={features[index].image}
            alt={features[index].title}
            className="feature-img"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="col-md-6">
          <p className="small-title">Why riders love us?</p>
          <h2 className="feature-title">{features[index].title}</h2>
          <p className="feature-desc">{features[index].desc}</p>

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
}

export default AutoScrollCarousel;