import React from "react";

export default function SuccessDaftar({ title, message, onConfirm }) {
  return (
    <div className="popup-overlay">
      <div className="popup-card">
        <div className="popup-icon">✓</div>

        <h2>{title}</h2>
        <p>{message}</p>

        <button onClick={onConfirm}>
          Oke
        </button>
      </div>
    </div>
  );
}
