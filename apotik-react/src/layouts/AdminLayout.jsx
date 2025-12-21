import "../assets/css/admin.css";
import React from "react";
import { Link } from "react-router-dom";

export default function AdminLayout({ userName = "Admin", children }) {
  return (
    <div className="d-flex">
      <div className="sidebar p-3">
        <div className="logo-container text-center mb-4">
          <img src="/assets/kiapotik.png" alt="Logo Admin" className="logo-img" />
        </div>
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link to="#" className="nav-link">Dashboard</Link>
          </li>
          <li className="nav-item">
            <Link to="/inventori" className="nav-link active">Inventori</Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link text-danger">Logout</Link>
          </li>
        </ul>
      </div>

      <div className="main-wrapper flex-grow-1">
        <header className="admin-header d-flex justify-content-between align-items-center p-3 border-bottom">
          <div className="header-title">
            <h5>Inventori Produk</h5>
          </div>
          <div className="header-user">
            <span>👤 {userName}</span>
          </div>
        </header>

        <main className="main-content p-4">
          {children}
        </main>
      </div>
    </div>
  );
}