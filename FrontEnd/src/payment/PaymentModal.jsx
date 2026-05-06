import React, { useState } from "react";
import PaymentForm from "./PaymentForm";
import PaymentResult from "./PaymentResult";
import { toast } from "react-toastify";
import "./paymentModal.css";

function PaymentModal({ isOpen, onClose, defaultData }) {
  const [status, setStatus] = useState("form");
  const [message, setMessage] = useState("");

  const handlePayment = async (data) => {
    setStatus("loading");

    try {
      const res = await fetch("http://localhost:3000/api/transfer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (result.success) {
        toast.success("Payment Successful 💸");
        setMessage(result.message);
        setStatus("success");
      } else {
        toast.error(result.message);
        setMessage(result.message);
        setStatus("error");
      }
    } catch (err) {
      toast.error("Server Error");
      setStatus("error");
    }
  };

  const reset = () => {
    setStatus("form");
    setMessage("");
  };

  const closeModal = () => {
    reset();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <>
      {/* BACKDROP */}
      <div className="pay-modal-backdrop" onClick={closeModal}></div>

      {/* MODAL */}
      <div className="pay-modal">
        {/* HEADER */}
        <div className="pay-modal-header">
          <h4>💸 Make Payment</h4>
          <button className="close-btn" onClick={closeModal}>
            ✖
          </button>
        </div>

        {/* BODY */}
        {status === "form" && (
          <PaymentForm
            onPay={handlePayment}
            defaultData={defaultData}
          />
        )}

        {status === "loading" && (
          <div className="pay-loader-box">
            <div className="pay-spinner"></div>
            <p>Processing Payment...</p>
          </div>
        )}

        {(status === "success" || status === "error") && (
          <PaymentResult
            status={status}
            message={message}
            onReset={reset}
          />
        )}
      </div>
    </>
  );
}

export default PaymentModal;