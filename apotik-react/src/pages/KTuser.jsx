import "../assets/css/user.css";
import React, { useState, useEffect } from "react";
import UserLayout from "../layouts/UserLayout";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";
import KatalogList from "../components/KatalogList";
import CartTable from "../components/CartTable";
import CartActions from "../components/CartActions";

export default function KTuser() {
  const [produk, setProduk] = useState([]);
  const { user } = useAuth();
  const { addToCart, cart } = useCart();

  useEffect(() => {
    fetch("https://api.muhammadadzkia.informatika24b1.com/api/katalog")
      .then((res) => res.json())
      .then((data) => setProduk(data))
      .catch(console.error);
  }, []);

  return (
    <UserLayout userName={user?.name || "Demo"}>
      <div className="inventori-container">
        <h2>Dashboard Katalog</h2>

        <KatalogList produk={produk} onAdd={addToCart} />

        <div className="cart-wrapper">
          <h3 className="cart-title">Keranjang Belanja</h3>
          
          <CartTable cart={cart} />
          
          <CartActions />
        </div>
      </div>
    </UserLayout>
  );
}
