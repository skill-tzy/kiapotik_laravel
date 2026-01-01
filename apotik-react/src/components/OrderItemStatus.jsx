import React, { useState } from "react";

export default function OrderItemStatus({ status, vaNumber }) {
  const [showModal, setShowModal] = useState(false);

  const statusClass = {
    "Belum Bayar": "status-belum-bayar",
    "Dikemas": "status-dikemas",
    "Dikirim": "status-dikirim",
    "Selesai": "status-selesai",
    "Batal": "status-batal",
  }[status];

  const handleClick = () => {
    if (status === "Belum Bayar") {
      setShowModal(true);
    }
  };

  return (
    <>
      <button
        onClick={handleClick}
        disabled={status !== "Belum Bayar"}
        className={`status-btn ${statusClass}`}
      >
        {status}
      </button>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal-box">
            <h3>Virtual Account</h3>
            <p className="va-number">
              {vaNumber || "1234 5678 9012 3456"}
            </p>
            <button className="btn-ok" onClick={() => setShowModal(false)}>
              Oke
            </button>
          </div>
        </div>
      )}
    </>
  );
}
