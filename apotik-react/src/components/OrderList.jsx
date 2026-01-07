import OrderItemStatus from "./OrderItemStatus";
import { useAuth } from "../context/AuthContext";

export default function OrderList({ orders }) {
  const { token } = useAuth();

  const handleCancel = async (orderId) => {
    const confirmCancel = window.confirm(
      "Yakin ingin membatalkan order ini?"
    );
    if (!confirmCancel) return;

    try {
      const res = await fetch(
        `https://api.muhammadadzkia.informatika24b1.com/api/orders/${orderId}/cancel`,
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
          },
        }
      );

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Gagal membatalkan order");
      }

      alert("Order berhasil dibatalkan");
      window.location.reload();
    } catch (err) {
      alert(err.message);
    }
  };

  if (!orders || orders.length === 0) return <p>Belum ada order</p>;

  return (
    <>
      {orders.map((order) => (
        <div key={order.id} className="order-box">
          <h3>Order #{order.id}</h3>

          <OrderItemStatus
            status={order.status}
            vaNumber={order.va_number}
          />

          {order.status === "Belum Bayar" && (
            <button
              className="btn-cancel"
              onClick={() => handleCancel(order.id)}
            >
              Batalkan Order
            </button>
          )}

          <p>
            Total Harga: Rp{" "}
            {Number(order.total_harga).toLocaleString("id-ID")}
          </p>

          {order.items && order.items.length > 0 ? (
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
                    <td>
                      Rp{" "}
                      {Number(item.harga).toLocaleString("id-ID")}
                    </td>
                    <td>{item.qty}</td>
                    <td>
                      Rp{" "}
                      {Number(item.subtotal).toLocaleString("id-ID")}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>Tidak ada item</p>
          )}
        </div>
      ))}
    </>
  );
}
