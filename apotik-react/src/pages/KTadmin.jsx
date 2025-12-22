import "../assets/css/admin.css";
import React, { useState, useEffect } from "react";
import AdminLayout from "../layouts/AdminLayout";
import EditProduk from "../components/EditProduk";
import TambahProduk from "../components/TambahProduk";
import DeleteProduk from "../components/DeleteProduk";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function KTadmin() {
  const [produk, setProduk] = useState([]);
  const [editData, setEditData] = useState(null);
  const [tambahOpen, setTambahOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  const { token, user, loading: authLoading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!authLoading && !token) {
      navigate("/masuk");
    }
  }, [authLoading, token, navigate]);

  useEffect(() => {
    if (!token) return;

    fetch("http://localhost:8000/api/inventori", {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (!res.ok) throw new Error("Unauthorized / gagal fetch data");
        return res.json();
      })
      .then((data) => {
        setProduk(data.data || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [token]);

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`http://localhost:8000/api/inventori/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

    if (!res.ok) {
      const errData = await res.json();
      alert(errData.message || "Gagal menghapus produk");
      return;
    }

    setProduk((prev) => prev.filter((p) => p.id !== id));
    
    } catch (err) {
      console.error(err);
      alert("Terjadi kesalahan");
    }
  };

  const filteredProduk = produk.filter((p) =>
    p.nama?.toLowerCase().includes(search.toLowerCase())
  );

  if (authLoading) return <p>Loading...</p>;

  return (
    <AdminLayout userName={user?.name || "Admin"}>
      <div className="inventori-container">
        <div className="inventori-header">
          <h2>Katalog Produk</h2>

          <div className="inventori-actions">
            <button className="admin-btn" onClick={() => setTambahOpen(true)}>
              + Tambah Produk
            </button>
          </div>
        </div>

        {loading ? (
          <p>Loading data...</p>
        ) : (
          <table className="inventori-table">
            <thead>
              <tr>
                <th>No</th>
                <th>Gambar</th>
                <th>Nama</th>
                <th>Harga</th>
                <th>Stok</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {filteredProduk.length === 0 ? (
                <tr>
                  <td colSpan="6" className="text-center">
                    Belum ada produk
                  </td>
                </tr>
              ) : (
                filteredProduk.map((p, index) => (
                  <tr key={p.id}>
                    <td>{index + 1}</td>
                    <td>
                      {p.gambar ? (
                        <img
                          src={`http://localhost:8000/${p.gambar}`}
                          alt={p.nama}
                          className="produk-img"
                        />
                      ) : (
                        <span className="text-muted">Tidak ada</span>
                      )}
                    </td>
                    <td>{p.nama}</td>
                    <td>Rp {p.harga?.toLocaleString()}</td>
                    <td>{p.stok}</td>
                    <td>
                      <div className="action-buttons">
                        <button
                          onClick={() => setEditData(p)}
                          className="btn-edit"
                        >
                          Edit
                        </button>
                                        
                        <DeleteProduk onDelete={() => handleDelete(p.id)} />
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        )}

        {editData && (
          <EditProduk
            editData={editData}
            token={token}
            onSave={(updated) => {
              setProduk(produk.map((p) => (p.id === updated.id ? updated : p)));
              setEditData(null);
            }}
            onClose={() => setEditData(null)}
          />
        )}

        {tambahOpen && (
          <TambahProduk
            token={token}
            onClose={() => setTambahOpen(false)}
            onSave={(newData) => {
              setProduk([...produk, newData]);
              setTambahOpen(false);
            }}
          />
        )}
      </div>
    </AdminLayout>
  );
}
