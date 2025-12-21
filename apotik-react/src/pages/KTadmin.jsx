import "../assets/css/admin.css";
import React, { useState } from "react";
import AdminLayout from "../layouts/AdminLayout";
import InventoriTable from "../components/InventoriTable";
import EditModal from "../components/EditModal";
import TambahModal from "../components/TambahModal";

export default function KTadmin() {
  const [produk, setProduk] = useState([]);
  const [editData, setEditData] = useState(null);
  const [tambahOpen, setTambahOpen] = useState(false);

  const handleEditSave = (data) => {
    if (!data) return setEditData(null);
    setProduk(produk.map((p) => (p.id === data.id ? data : p)));
    setEditData(null);
  };

  const handleTambahSave = (data) => {
    const newItem = { ...data, id: produk.length + 1 };
    setProduk([...produk, newItem]);
    setTambahOpen(false);
  };

  const handleDelete = (id) => {
    if (window.confirm("Yakin ingin menghapus produk ini?")) {
      setProduk(produk.filter((p) => p.id !== id));
    }
  };

  return (
    <AdminLayout>
      <div className="inventori-container">
        <InventoriTable
          produk={produk}
          onEdit={setEditData}
          onDelete={handleDelete}
        />

        {editData && <EditModal editData={editData} onSave={handleEditSave} />}
        {tambahOpen && (
          <TambahModal
            onSave={handleTambahSave}
            onClose={() => setTambahOpen(false)}
          />
        )}

        <button
          className="btn btn-success mt-3"
          onClick={() => setTambahOpen(true)}
        >
          + Tambah Produk
        </button>
      </div>
    </AdminLayout>
  );
}
