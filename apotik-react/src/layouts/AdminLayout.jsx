import "../assets/css/admin.css";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function AdminLayout({ userName = "Admin", children }) {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="admin-page">
      <aside className="admin-sidebar">
        <div className="admin-logo">
          <img src="/assets/kiapotik.png" alt="Logo Admin" />
        </div>

        <div className="admin-user-box">
          <img src="/assets/user-icon.png" alt="Icon User" /> Selamat Datang,&nbsp;
          <strong>{userName}</strong>
        </div>

        <nav className="admin-nav">
          <Link to="/dashboard" className="admin-link">
            Dashboard
          </Link>
          <Link to="/pesanan" className="admin-link">
            Pesanan
          </Link>
          <Link to="/ktadmin" className="admin-link active">
            Katalog
          </Link>
          <button onClick={handleLogout} className="admin-link logout">
            Keluar
          </button>
        </nav>
      </aside>

      <main className="admin-main">{children}</main>
    </div>
  );
}
