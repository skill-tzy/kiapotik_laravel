import "../assets/css/admin.css";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function UserLayout({ userName = "Admin", children }) {
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
          <Link to="/ktuser" className="admin-link active">
            Dashboard
          </Link>
          <Link to="/order" className="admin-link">
            order
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
