import "../assets/css/admin.css";
import React, { useState } from "react";

export default function TambahModal({ onSave, onClose }) {
  const [formData, setFormData] = useState({
    nama: "",
    harga: "",
    stok: "",
    gambar: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="modal fade show d-block" tabIndex="-1">
      <div className="modal-dialog">
        <div className="modal-content p-3">
          <h5>Tambah Produk</h5>
          <form onSubmit={handleSubmit}>
            <div className="mb-2">
              <label>Nama Produk</label>
              <input
                type="text"
                className="form-control"
                value={formData.nama}
                onChange={(e) =>
                  setFormData({ ...formData, nama: e.target.value })
                }
                required
              />
            </div>
            <div className="mb-2">
              <label>Harga</label>
              <input
                type="number"
                className="form-control"
                value={formData.harga}
                onChange={(e) =>
                  setFormData({ ...formData, harga: e.target.value })
                }
                required
              />
            </div>
            <div className="mb-2">
              <label>Stok</label>
              <input
                type="number"
                className="form-control"
                value={formData.stok}
                onChange={(e) =>
                  setFormData({ ...formData, stok: e.target.value })
                }
                required
              />
            </div>
            <div className="mb-2">
              <label>Gambar</label>
              <input
                type="file"
                className="form-control"
                onChange={(e) =>
                  setFormData({ ...formData, gambar: e.target.files[0] })
                }
              />
            </div>
            <div className="d-flex justify-content-end gap-2 mt-2">
              <button type="submit" className="btn btn-success">
                Simpan
              </button>
              <button type="button" className="btn btn-secondary" onClick={onClose}>
                Batal
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
