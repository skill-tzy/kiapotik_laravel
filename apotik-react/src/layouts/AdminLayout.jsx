import "../assets/css/admin.css";
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
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
            <NavLink
            to="/ktadmin"
            className={({ isActive }) =>
              isActive ? "admin-link active" : "admin-link"
            }
          >
            Katalog
          </NavLink>

          <NavLink
            to="/odadmin"
            className={({ isActive }) =>
              isActive ? "admin-link active" : "admin-link"
            }
          >
            Order
          </NavLink>
          
          <button onClick={handleLogout} className="admin-link logout">
            Keluar
          </button>
        </nav>

      </aside>

      <main className="admin-main">{children}</main>
    </div>
  );
}
