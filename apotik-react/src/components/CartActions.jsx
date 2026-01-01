import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";

export default function CartActions() {
  const { cart, clearCart } = useCart();
  const { token } = useAuth();

  const handleCheckout = async () => {
    if (cart.length === 0) return alert("Keranjang kosong");

    try {
      const res = await fetch("http://localhost:8000/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
        },
        body: JSON.stringify({
          items: cart.map(item => ({
            produk_id: item.id,
            qty: item.qty,
          })),
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Checkout gagal");

      alert("Checkout berhasil");
      clearCart();
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="cart-actions">
      <button className="btn-order" onClick={handleCheckout}>
        Order
      </button>

      <button className="btn-clear" onClick={clearCart}>
        Bersihkan Keranjang
      </button>
    </div>
  );
}
