import React, { useState, useEffect } from "react";

export default function EditProduk({ editData, token, onSave, onClose }) {
  const [nama, setNama] = useState("");
  const [harga, setHarga] = useState("");
  const [stok, setStok] = useState("");
  const [gambar, setGambar] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (editData) {
      setNama(editData.nama || "");
      setHarga(editData.harga || "");
      setStok(editData.stok || "");
      setGambar(null);
    }
  }, [editData]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("_method", "PUT");
      formData.append("nama", nama);
      formData.append("harga", harga);
      formData.append("stok", stok);
      if (gambar) formData.append("gambar", gambar);

      const res = await fetch(`http://localhost:8000/api/inventori/${editData.id}`, {
        method: "POST", 
        headers: { Authorization: `Bearer ${token}` },
        body: formData,
      });

      const result = await res.json();

      if (!res.ok) {
        alert(result.message || "Gagal memperbarui produk");
      } else {
        onSave(result.data); 
        onClose();
      }
    } catch (err) {
      console.error(err);
      alert("Terjadi kesalahan jaringan");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3>Edit Produk</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Nama</label>
            <input
              type="text"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Harga</label>
            <input
              type="number"
              value={harga}
              onChange={(e) => setHarga(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Stok</label>
            <input
              type="number"
              value={stok}
              onChange={(e) => setStok(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Gambar</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setGambar(e.target.files[0])}
            />
          </div>

          <div className="modal-actions">
            <button type="submit" className="confirm-btn" disabled={loading}>
              {loading ? "Menyimpan..." : "Simpan"}
            </button>
            <button type="button" onClick={onClose} className="cancel-btn">
              Batal
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
