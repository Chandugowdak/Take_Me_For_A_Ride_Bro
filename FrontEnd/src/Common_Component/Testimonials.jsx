import React from "react";
import "./Testimonials.css";

const testimonialsData = [
  {
    name: "Rahul Sharma",
    role: "User",
    type: "user",
    text: "The app is extremely smooth and reliable. Ordering products is simple and delivery tracking is perfect."
  },
  {
    name: "Manoj Kumar",
    role: "Earner",
    type: "earner",
    text: "I started earning within the first week. The dashboard clearly shows my growth and revenue."
  },
  {
    name: "Priya Verma",
    role: "User",
    type: "user",
    text: "Secure payments and quick customer support. It feels like a premium shopping platform."
  },
  {
    name: "Sneha Reddy",
    role: "Earner",
    type: "earner",
    text: "The earning model is transparent and trustworthy. Withdrawals are fast and hassle-free."
  }
];

const Testimonials = () => {
  return (
    <section className="testimonials-section py-5">
      <div className="container">

        <div className="text-center mb-5">
          <h2 className="section-title">Trusted By Our Community</h2>
          <p className="section-subtitle">
            Hear from our Users and Earners who grow with us
          </p>
        </div>

        <div className="testimonial-wrapper">
          <div className="testimonial-track">

            {/* Duplicate content for seamless loop */}
            {[...testimonialsData, ...testimonialsData].map((item, index) => (
              <div className={`testimonial-card ${item.type}`} key={index}>
                <div className="profile">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkiIFjCOZ-mMeqxd2ryrneiHedE8G9S0AboA&s"
                    alt={item.role}
                  />
                  <div>
                    <h6>{item.name}</h6>
                    <span>{item.role}</span>
                  </div>
                </div>
                <p>{item.text}</p>
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;