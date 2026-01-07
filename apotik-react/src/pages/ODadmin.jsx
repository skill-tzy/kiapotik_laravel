import "../assets/css/admin.css";
import React, { useState, useEffect } from "react";
import AdminLayout from "../layouts/AdminLayout";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import AdminOrderList from "../components/AdminOrderList";

export default function ODadmin() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const { token, user, loading: authLoading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!authLoading && !token) navigate("/masuk");
  }, [authLoading, token, navigate]);

  useEffect(() => {
    if (!token) return;

    const fetchOrders = async () => {
      try {
        const res = await fetch("https://api.muhammadadzkia.informatika24b1.com/api/admin/orders", {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
          },
        });

        if (!res.ok) throw new Error("Gagal fetch order");

        const data = await res.json();
        setOrders(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [token]);

  const handleUpdateStatus = (orderId, newStatus) => {
    setOrders((prev) =>
      prev.map((o) => (o.id === orderId ? { ...o, status: newStatus } : o))
    );
  };

  if (authLoading) return <p>Loading...</p>;

  return (
    <AdminLayout userName={user?.name || "Admin"}>
      <div className="inventori-container">
        <h2>Order User</h2>
        {loading ? <p>Loading order...</p> : (
          <AdminOrderList
            orders={orders}
            token={token}
            onUpdate={handleUpdateStatus}
          />
        )}
      </div>
    </AdminLayout>
  );
}
