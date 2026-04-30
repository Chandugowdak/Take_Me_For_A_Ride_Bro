import React, { useState } from "react";
import PaymentForm from "./PaymentForm";
import PaymentResult from "./PaymentResult";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./payment.css";

function PaymentPage() {
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

  return (
    <div className="pay-container-root">
      <ToastContainer position="top-center" />

      {status === "form" && <PaymentForm onPay={handlePayment} />}

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
          onReset={() => setStatus("form")}
        />
      )}
    </div>
  );
}

export default PaymentPage;