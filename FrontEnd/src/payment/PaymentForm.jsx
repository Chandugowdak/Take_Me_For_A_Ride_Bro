import React, { useState } from "react";

function PaymentForm({ onPay }) {
  const [form, setForm] = useState({
    senderPhone: "",
    receiverPhone: "",
    amount: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = (e) => {
    e.preventDefault();

    onPay({
      senderPhone: form.senderPhone,
      receiverPhone: form.receiverPhone,
      amount: Number(form.amount),
    });
  };

  return (
    <div className="pay-card-box">
      <h4 className="pay-title">Send Money</h4>

      <input
        className="pay-input"
        placeholder="Your Phone"
        name="senderPhone"
        onChange={handleChange}
      />

      <input
        className="pay-input"
        placeholder="Receiver Phone"
        name="receiverPhone"
        onChange={handleChange}
      />

      <input
        className="pay-input"
        placeholder="Amount"
        name="amount"
        onChange={handleChange}
      />

      <button className="pay-btn-main" onClick={submit}>
        Pay Now
      </button>
    </div>
  );
}

export default PaymentForm;