import React from "react";
import "./SubscriptionSection.css";

const SubscriptionSection = () => {
 const bikes = [
     {
    name: "Bullet 350",
    price: 9999,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDYVbDAal0CY7xGYSJIiXo5zrgMVotmee6lQ&s",
  },
  {
    name: "TVS Ntorq 125 (BS6)",
    price: 5459,
    image: "https://imgd.aeplcdn.com/1280x720/n/cw/ec/102709/ntorq-125-right-front-three-quarter.jpeg?isig=0",
  },
  {
    name: "Aprilia SR 125",
    price: 4592,
    image: "https://ascomotors.in/cdn/shop/files/2_d6ea7793-7a3c-4893-8974-e1b65ecc874d.jpg?v=1724504091&width=1445",
  },
  {
    name: "Bajaj Pulsar 150 Neon",
    price: 4775,
    image: "https://images.carandbike.com/bike-images/colors/bajaj/pulsar-150/bajaj-pulsar-150-neon-silver.jpg",
  },
  {
    name: "Honda Activa 6G",
    price: 4593,
    image: "https://imgd.aeplcdn.com/1280x720/n/cw/ec/44686/activa-6g-right-side-view-8.jpeg?isig=0",
  },
  {
    name: "Ather 450X",
    price: 5999,
    image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/147925/450x-right-front-three-quarter.jpeg?isig=0&q=80",
  },

];

  const faqs = [
    {
      q: "What happens if I go beyond the monthly km limit?",
      a: "There is a monthly kilometre limit. Charge applies based on excess usage.",
    },
    {
      q: "How do I extend my booking for another month?",
      a: "Call customer support before the rental period ends to extend.",
    },
    {
      q: "Can I return the vehicle before rental period ends?",
      a: "Yes, but a part monthly charge will be deducted.",
    },
    {
      q: "When will I receive refundable deposit?",
      a: "After bike return in undamaged condition (5–7 business days).",
    },
  ];

  return (
    <div className="subscription-section py-5">

      {/* Hero & Bikes */}
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

        <button className="btn subscribe-btn w-100">
          Book Now
        </button>

      </div>
    </div>
  ))}
</div>

      </div>

      {/* FAQ Section */}
      <div className="container faq-section">
        <h3 className="faq-title text-center mb-4">Frequently Asked Questions</h3>
        <div className="accordion" id="faqAccordion">
          {faqs.map((faq, idx) => (
            <div className="accordion-item" key={idx}>
              <h2 className="accordion-header" id={`heading${idx}`}>
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse${idx}`}
                  aria-expanded="false"
                  aria-controls={`collapse${idx}`}
                >
                  {faq.q}
                </button>
              </h2>
              <div
                id={`collapse${idx}`}
                className="accordion-collapse collapse"
                aria-labelledby={`heading${idx}`}
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  {faq.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default SubscriptionSection;
