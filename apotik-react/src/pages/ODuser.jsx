import "../assets/css/user.css";
import React, { useState, useEffect } from "react";
import UserLayout from "../layouts/UserLayout";
import { useAuth } from "../context/AuthContext";
import OrderList from "../components/OrderList";

export default function ODuser() {
  const [orders, setOrders] = useState([]);
  const { user, token } = useAuth();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await fetch("http://localhost:8000/api/orders", {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
          },
        });
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

  return (
    <UserLayout userName={user?.name || "Demo"}>
      <div className="inventori-container">
        <h2>Order Saya</h2>
        <OrderList orders={Array.isArray(orders) ? orders : []} />
      </div>
    </UserLayout>
  );
}
