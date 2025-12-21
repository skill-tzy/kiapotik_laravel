import "../assets/css/admin.css";
import React, { useState, useEffect } from "react";

export default function EditModal({ editData, onSave }) {
  const [formData, setFormData] = useState(editData || {});

  useEffect(() => {
    setFormData(editData || {});
  }, [editData]);

  if (!editData) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="modal fade show d-block" tabIndex="-1">
      <div className="modal-dialog">
        <div className="modal-content">
          <form onSubmit={handleSubmit}>
            <div className="modal-header">
              <h5 className="modal-title">Edit Data Produk</h5>
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <label className="form-label">Nama Produk</label>
                <input
                  type="text"
                  className="form-control"
                  value={formData.nama || ""}
                  onChange={(e) =>
                    setFormData({ ...formData, nama: e.target.value })
                  }
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Harga</label>
                <input
                  type="number"
                  className="form-control"
                  value={formData.harga || ""}
                  onChange={(e) =>
                    setFormData({ ...formData, harga: parseInt(e.target.value) })
                  }
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Stok</label>
                <input
                  type="number"
                  className="form-control"
                  value={formData.stok || ""}
                  onChange={(e) =>
                    setFormData({ ...formData, stok: parseInt(e.target.value) })
                  }
                  required
                />
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => onSave(null)}
              >
                Batal
              </button>
              <button type="submit" className="btn btn-primary">
                Simpan Perubahan
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
