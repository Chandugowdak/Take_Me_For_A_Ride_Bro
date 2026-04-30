import React from "react";

function PaymentResult({ status, message, onReset }) {
  return (
    <div className="pay-card-box text-center">
      {status === "success" ? (
        <>
          <div className="pay-success-icon">✔</div>
          <h4 className="pay-success-text">Payment Successful</h4>
        </>
      ) : (
        <>
          <div className="pay-error-icon">✖</div>
          <h4 className="pay-error-text">Payment Failed</h4>
        </>
      )}

      <p>{message}</p>

      <button className="pay-btn-main" onClick={onReset}>
        Make Another Payment
      </button>
    </div>
  );
}

export default PaymentResult;