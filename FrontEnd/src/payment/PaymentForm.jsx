import React, { useState, useEffect } from "react";

function PaymentForm({ onPay, defaultData }) {
  const [form, setForm] = useState({
    senderPhone: "",
    receiverPhone: "",
    amount: "",
  });

  useEffect(() => {
    if (defaultData) {
      setForm({
        senderPhone: "",
        receiverPhone: defaultData.receiverPhone || "",
        amount: defaultData.amount || "",
      });
    }
  }, [defaultData]);

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
        value={form.senderPhone}
        onChange={handleChange}
      />

      <input
        className="pay-input"
        placeholder="Receiver Phone"
        name="receiverPhone"
        value={form.receiverPhone}
        onChange={handleChange}
      />

      <input
        className="pay-input"
        placeholder="Amount"
        name="amount"
        value={form.amount}
        onChange={handleChange}
      />

      <button className="pay-btn-main" onClick={submit}>
        Pay Now
      </button>
    </div>
  );
}

export default PaymentForm;