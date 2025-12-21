import "../assets/css/admin.css";
import React from "react";

export default function InventoriTable({ produk, onEdit, onDelete }) {
  return (
    <table className="table inventori-table">
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
        {produk.length === 0 ? (
          <tr>
            <td colSpan="6" className="text-center">
              Belum ada produk
            </td>
          </tr>
        ) : (
          produk.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>
                {item.gambar ? (
                  <img src={item.gambar} alt={item.nama} className="produk-img" />
                ) : (
                  <span className="text-muted">Tidak ada</span>
                )}
              </td>
              <td className="text-left">{item.nama}</td>
              <td>Rp {item.harga.toLocaleString("id-ID")}</td>
              <td>{item.stok}</td>
              <td>
                <button
                  className="btn btn-warning btn-sm me-1"
                  onClick={() => onEdit(item)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => onDelete(item.id)}
                >
                  Hapus
                </button>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
}
