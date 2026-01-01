import OrderItemStatus from "./OrderItemStatus";

export default function OrderList({ orders }) {
  if (!orders || orders.length === 0) return <p>Belum ada order</p>;

  return (
    <>
      {orders.map((order) => (
        <div key={order.id} className="order-box">
          <h3>Order #{order.id}</h3>
            <td>
                <OrderItemStatus status={order.status} vaNumber={order.va_number} />
            </td>
          <p>Total Harga: Rp {Number(order.total_harga).toLocaleString("id-ID")}</p>

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
                    <td>Rp {Number(item.harga).toLocaleString("id-ID")}</td>
                    <td>{item.qty}</td>
                    <td>Rp {Number(item.subtotal).toLocaleString("id-ID")}</td>
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
