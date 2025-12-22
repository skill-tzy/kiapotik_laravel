import "../assets/css/admin.css";
import React, { useState, useEffect } from "react";
import UserLayout from "../layouts/UserLayout";
import EditProduk from "../components/EditProduk";
import TambahProduk from "../components/TambahProduk";
import DeleteProduk from "../components/DeleteProduk";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function KTuser() {
 const [produk, setProduk] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/katalog")
      .then((res) => res.json())
      .then((data) => setProduk(data))
      .catch((err) => console.error(err));
  }, []);

  const { token, user, loading: authLoading } = useAuth();

  return (
    <UserLayout userName={user?.name || "Demo"}>
      <div className="inventori-container">
        <div className="inventori-header">
          <h2>Dashboard Katalog</h2>
        </div>

        <div className="struktur-organisasi-container">
          <div className="struktur-organisasi-row">
            {produk.map((row) => (
              <div className="struktur-organisasi-box" key={row.id}>
                <img
                  src={`http://localhost:8000/${row.gambar}`}
                  alt={row.nama}
                  className="struktur-organisasi-photo"
                />

                <div className="struktur-organisasi-info">
                  <p className="struktur-organisasi-name">{row.nama}</p>
                  <p className="struktur-organisasi-position">
                    Rp {Number(row.harga).toLocaleString("id-ID")}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </UserLayout>
  );
}
