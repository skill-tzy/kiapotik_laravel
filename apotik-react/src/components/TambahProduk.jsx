import React, { useState } from "react";

export default function TambahProduk({ token, onSave, onClose }) {
  const [nama, setNama] = useState("");
  const [harga, setHarga] = useState("");
  const [stok, setStok] = useState("");
  const [gambar, setGambar] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!nama || !harga || !stok) return alert("Semua field wajib diisi");

    setLoading(true);
    const formData = new FormData();
    formData.append("nama", nama);
    formData.append("harga", harga);
    formData.append("stok", stok);
    if (gambar) formData.append("gambar", gambar);

    try {
      const res = await fetch("http://localhost:8000/api/inventori", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      const data = await res.json();
      if (res.ok) {
        onSave(data.data); // kirim data baru ke KTadmin
      } else {
        alert(data.message || "Gagal menambahkan produk");
      }
    } catch (err) {
      console.error(err);
      alert("Terjadi kesalahan");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3>Tambah Produk</h3>
        <form onSubmit={handleSubmit}>
          <label>Nama Produk</label>
          <input
            type="text"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            required
          />

          <label>Harga</label>
          <input
            type="number"
            value={harga}
            onChange={(e) => setHarga(e.target.value)}
            required
          />

          <label>Stok</label>
          <input
            type="number"
            value={stok}
            onChange={(e) => setStok(e.target.value)}
            required
          />

          <label>Gambar</label>
          <input
            type="file"
            onChange={(e) => setGambar(e.target.files[0])}
          />

          <div className="modal-actions">
            <button type="submit" disabled={loading}>
              {loading ? "Menyimpan..." : "Simpan"}
            </button>
            <button type="button" onClick={onClose}>
              Batal
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
