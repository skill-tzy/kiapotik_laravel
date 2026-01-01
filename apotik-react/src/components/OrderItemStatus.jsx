import React, { useState } from "react";

export default function OrderItemStatus({ status, vaNumber }) {
  const [showModal, setShowModal] = useState(false);

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
        style={{
          cursor: status === "Belum Bayar" ? "pointer" : "default",
          backgroundColor: status === "Belum Bayar" ? "#4CAF50" : "#ccc",
          color: "#fff",
          border: "none",
          padding: "5px 10px",
          borderRadius: "5px",
        }}
      >
        {status}
      </button>

      {showModal && (
        <div style={{
          position: "fixed",
          top: 0, left: 0,
          width: "100%", height: "100%",
          backgroundColor: "rgba(0,0,0,0.5)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 9999,
        }}>
          <div style={{
            backgroundColor: "#fff",
            padding: "20px",
            borderRadius: "10px",
            textAlign: "center",
            minWidth: "300px"
          }}>
            <h3>Virtual Account</h3>
            <p>{vaNumber || "1234 5678 9012 3456"}</p>
            <button
              onClick={() => setShowModal(false)}
              style={{
                marginTop: "20px",
                padding: "5px 15px",
                borderRadius: "5px",
                border: "none",
                backgroundColor: "#4CAF50",
                color: "#fff",
                cursor: "pointer"
              }}
            >
              Oke
            </button>
          </div>
        </div>
      )}
    </>
  );
}
