import React, { useState } from "react";

export default function DeleteProduk({ onDelete }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleConfirm = () => {
    onDelete();
    handleClose();
  };

  return (
    <>
      <button onClick={handleOpen} className="delete-btn">
        Hapus
      </button>

      {open && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Konfirmasi Hapus</h3>
            <p>Apakah kamu yakin ingin menghapus produk ini?</p>
            <div className="modal-actions">
              <button onClick={handleConfirm} className="confirm-btn">
                Hapus
              </button>
              <button onClick={handleClose} className="cancel-btn">
                Batal
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
