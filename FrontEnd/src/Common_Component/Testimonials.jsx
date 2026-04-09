import React from "react";
import "./Testimonials.css";

const testimonialsData = [
  {
    name: "Chandu Gowda ",
    role: "User",
    type: "user",
    text: "The app is extremely smooth and reliable. Ordering products is simple and delivery tracking is perfect.",
      image:"https://media.licdn.com/dms/image/v2/D5603AQF5Bgf_-EmBYQ/profile-displayphoto-scale_200_200/B56ZxlsYipKgAY-/0/1771232661503?e=1777507200&v=beta&t=NiKrJam5ZXEJH8itI0Zv6zCHDF0oh3ICbpWqLZaZDW0"
  },
  {
    name: "Manoj Kumar",
    role: "Earner",
    type: "earner",
    text: "I started earning within the first week. The dashboard clearly shows my growth and revenue.",
      image:"https://media.licdn.com/dms/image/v2/D5603AQGoM7tEFAu8TQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1690466258472?e=2147483647&v=beta&t=I5mSyVVTpxlBwRfSvjGWU9RCPhRQ7lxiYtqbJZrxCIA"
  },
  {
    name: "Priya Verma",
    role: "User",
    type: "user",
    text: "Secure payments and quick customer support. It feels like a premium shopping platform.",
    image:"https://www.shutterstock.com/image-photo/authentic-professional-head-shot-portrait-260nw-2592332229.jpg"
  },
  {
    name: "Sneha Reddy",
    role: "Earner",
    type: "earner",
    text: "The earning model is transparent and trustworthy. Withdrawals are fast and hassle-free.",
      image:"https://static1.squarespace.com/static/5a7a523b90bccea7812ba94e/t/5f99c2bb95a80d03b4034df7/1603912419031/_Sarah+is+soothing+like+warm+butter+%26+honey%21_+%281%29.png"
  }
];

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <div className="container">

        <div className="text-center mb-3 mx-0">
          <h2 className="section-title">
            Trusted By Our <span>Community</span>
          </h2>
          <p className="section-subtitle">
            Real experiences from Users & Earners 🚀
          </p>
        </div>

        <div className="testimonial-wrapper">
          <div className="testimonial-track">

            {[...testimonialsData, ...testimonialsData].map((item, index) => (
              <div className="testimonial-card" key={index}>

                {/* Glow border */}
                <div className="card-glow"></div>

                <div className="profile">
                  <img
                    src={item.image} 
                    alt={item.name}
                  />
                  <div>
                    <h6>{item.name}</h6>
                    <span>{item.role}</span>
                  </div>
                </div>

                {/* ⭐ Rating */}
                <div className="stars">★★★★★</div>

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