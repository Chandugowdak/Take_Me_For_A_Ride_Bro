import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

import "./HowRentingWorks.css";

const HowRentingWorks = () => {

  const [show, setShow] = useState(false);
  const [selectedStep, setSelectedStep] = useState(null);

  const handleClose = () => setShow(false);

  const handleOpen = (index) => {
    setSelectedStep(index);
    setShow(true);
  };

  /* ================= CARD DATA ================= */

  const steps = [
    {
      title: "Search",
      icon: "bi-geo-alt-fill",
      desc: "Find bikes available near your area.",
    },
    {
      title: "Book",
      icon: "bi-file-earmark-check",
      desc: "Select a bike and confirm your booking instantly.",
    },
    {
      title: "Ride",
      icon: "bi-bicycle",
      desc: "Pick up the bike and enjoy your ride.",
    },
  ];

  /* ================= MODAL DATA ================= */

  const modalDetails = [
    {
      title: "Search Bikes",
      description:
        "Use our smart search system to locate bikes available near your location. You can filter by bike type, price, availability and ratings.",
      points: [
        "Search bikes near your location",
        "Filter by price and bike model",
        "Check real-time availability",
        "View bike ratings and reviews",
      ],
    },
    {
      title: "Book Instantly",
      description:
        "After selecting your preferred bike, you can instantly book it using our secure booking system.",
      points: [
        "Instant booking confirmation",
        "Secure payment gateway",
        "Flexible rental duration",
        "Booking history tracking",
      ],
    },
    {
      title: "Ride & Enjoy",
      description:
        "Once the booking is confirmed, visit the pickup location and start your ride. Enjoy your journey safely.",
      points: [
        "Quick pickup process",
        "Verified bike owners",
        "Ride safely with helmet",
        "24/7 customer support",
      ],
    },
  ];

  return (
    <>

      <section className="how-works container mt-5 mb-5">

        <h2 className="how-heading text-center">
          How Renting Works
        </h2>

        <div className="row mt-4 gy-4 justify-content-center">

          {steps.map((step, index) => (

            <div key={index} className="col-lg-3 col-md-4 col-sm-6">

              <div
                className="step-card shadow-sm"
                onClick={() => handleOpen(index)}
              >

                <div className="step-icon">
                  <i className={`bi ${step.icon}`}></i>
                </div>

                <h5>
                  {index + 1}. {step.title}
                </h5>

                <p className="text-dark">
                  {step.desc}
                </p>

              </div>

            </div>

          ))}

        </div>

      </section>

      {/* ================= MODAL ================= */}

      <Modal
        show={show}
        onHide={handleClose}
        centered
        size="md"
        dialogClassName="custom-modal"
      >

        <Modal.Header closeButton>

          <Modal.Title>
            {selectedStep !== null &&
              modalDetails[selectedStep].title}
          </Modal.Title>

        </Modal.Header>

        <Modal.Body>

          {selectedStep !== null && (

            <div className="modal-content-custom">

              <p className="modal-description">
                {modalDetails[selectedStep].description}
              </p>

              <ul className="modal-list">

                {modalDetails[selectedStep].points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}

              </ul>

            </div>

          )}

        </Modal.Body>

        <Modal.Footer>

          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>

        </Modal.Footer>

      </Modal>

    </>
  );
};

export default HowRentingWorks;