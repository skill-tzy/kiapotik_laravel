import "../assets/css/user.css";
import React, { useState, useEffect } from "react";
import UserLayout from "../layouts/UserLayout";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import OrderList from "../components/OrderList";

export default function ODuser() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const { token, user, loading: authLoading } = useAuth();
  const navigate = useNavigate();

  // Redirect jika belum login
  useEffect(() => {
    if (!authLoading && !token) navigate("/masuk");
  }, [authLoading, token, navigate]);

  // Fetch order user
  useEffect(() => {
    if (!token) return;

    const fetchOrders = async () => {
      try {
        const res = await fetch(
          "https://api.muhammadadzkia.informatika24b1.com/api/orders",
          {
            headers: {
              Authorization: `Bearer ${token}`,
              Accept: "application/json",
            },
          }
        );

        if (!res.ok) throw new Error("Gagal fetch order");

        const data = await res.json();
        setOrders(Array.isArray(data) ? data : data.orders || []);
      } catch (err) {
        console.error(err);
        setOrders([]);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [token]);

  if (authLoading) return <p>Loading...</p>;

  return (
    <UserLayout userName={user?.name || "User"}>
      <div className="inventori-container">
        <h2>Order Saya</h2>

        {loading ? (
          <p>Loading order...</p>
        ) : (
          <OrderList orders={orders} />
        )}
      </div>
    </UserLayout>
  );
}
