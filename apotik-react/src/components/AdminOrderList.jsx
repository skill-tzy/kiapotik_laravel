import React, { useState } from "react";

export default function AdminOrderList({ orders, token, onUpdate }) {
  const [updating, setUpdating] = useState({});

  const handleStatusChange = async (orderId, newStatus) => {
    setUpdating((prev) => ({ ...prev, [orderId]: true }));

    try {
      const res = await fetch(`http://localhost:8000/api/admin/orders/${orderId}/status`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: newStatus }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message || "Gagal update status");

      onUpdate(orderId, newStatus);

    } catch (err) {
      alert(err.message);
    } finally {
      setUpdating((prev) => ({ ...prev, [orderId]: false }));
    }
  };

  if (!orders || orders.length === 0) return <p>Belum ada order</p>;

  return (
    <>
      {orders.map((order) => (
        <div key={order.id} className="order-box">
          <h3>Order #{order.id}</h3>
            <p>
              Pemesan: <strong>{order.user?.name || "Unknown User"}</strong>
            </p>
          <p>Total Harga: Rp {Number(order.total_harga).toLocaleString("id-ID")}</p>

          {order.items && order.items.length > 0 && (
            <table className="cart-table">
              <thead>
                <tr>
                  <th>Produk</th>
                  <th>Harga</th>
                  <th>Qty</th>
                  <th>Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {order.items.map((item) => (
                  <tr key={item.id}>
                    <td>{item.produk?.nama}</td>
                    <td>Rp {Number(item.harga).toLocaleString("id-ID")}</td>
                    <td>{item.qty}</td>
                    <td>Rp {Number(item.subtotal).toLocaleString("id-ID")}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}

          <div className="admin-status-wrapper">
            <label>Status:</label>

            <select
              className={`admin-status-select status-${order.status.replace(" ", "-")}`}
              value={order.status}
              onChange={(e) => handleStatusChange(order.id, e.target.value)}
              disabled={updating[order.id]}
            >
              <option value="Belum Bayar">Belum Bayar</option>
              <option value="Dikemas">Dikemas</option>
              <option value="Dikirim">Dikirim</option>
              <option value="Selesai">Selesai</option>
              <option value="Batal">Batal</option>
            </select>

            {updating[order.id] && (
              <span className="status-updating">Updating...</span>
            )}
          </div>
        </div>
      ))}
    </>
  );
}
