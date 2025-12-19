import React from "react";
import "./OffersSection.css";

const OffersSection = () => {
  const offers = [
    {
      title: "WELCOME OFFER",
      desc: "Get 10% cashback on your first ride",
      code: "FIRST10",
      note: "Valid for all cities",
    },
    {
      title: "WEEKEND SPECIAL",
      desc: "Flat ₹100 OFF on weekend bookings",
      code: "WEEKEND100",
      note: "Friday to Sunday only",
    },
    {
      title: "LOYALTY BONUS",
      desc: "Earn ₹200 cashback on your 5th ride",
      code: "LOYAL200",
      note: "Ride completion required",
    },
    {
      title: "LONG TERM RENTAL",
      desc: "Save more on weekly & monthly rentals",
      code: "LONGSAVE",
      note: "Selected vehicles only",
    },
    {
      title: "REFER & EARN",
      desc: "Get ₹150 when your friend rides",
      code: "REFER150",
      note: "Referral must complete ride",
    },
    {
      title: "FESTIVE DEAL",
      desc: "Flat 15% OFF on festive days",
      code: "FESTIVE15",
      note: "Limited time offer",
    },
    {
      title: "NIGHT RIDE",
      desc: "Extra ₹100 OFF for night rides",
      code: "NIGHT100",
      note: "10 PM – 6 AM only",
    },
    {
      title: "STUDENT OFFER",
      desc: "Special discounts for students",
      code: "STUDENT5",
      note: "Valid ID required",
    },
    {
      title: "CORPORATE DEAL",
      desc: "Save more on corporate bookings",
      code: "CORP200",
      note: "Bulk bookings only",
    },
    {
      title: "EARLY BIRD",
      desc: "Book early & save ₹100",
      code: "EARLY100",
      note: "Book 48 hours before",
    },
    {
      title: "WEEKLY PASS",
      desc: "Best savings on weekly rentals",
      code: "WEEKLY300",
      note: "7 days minimum",
    },
    {
      title: "MONTHLY SAVER",
      desc: "Huge discounts on monthly plans",
      code: "MONTH500",
      note: "30 days rental",
    },
  ];

  return (
    <section className="offers-section py-5">
      <div className="container">

        {/* Heading */}
        <h2 className="offers-heading text-center mb-5">
          Best Offers For You
        </h2>

        {/* Offers Grid */}
        <div className="row g-4">
          {offers.map((offer, index) => (
            <div className="col-12 col-sm-6 col-lg-3" key={index}>
              <div className="offer-card h-100">

                <span className="offer-badge">OFFER</span>

                <h5 className="offer-title">{offer.title}</h5>
                <p className="offer-desc">{offer.desc}</p>

                <div className="offer-code-box">
                  {offer.code}
                </div>

                <p className="offer-note">{offer.note}</p>

                <button className="btn btn-success w-100 mt-3">
                  Apply Offer
                </button>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default OffersSection;
