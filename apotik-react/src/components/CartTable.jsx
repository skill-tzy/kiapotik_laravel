export default function CartTable({ cart }) {
  if (cart.length === 0) return <p>Keranjang kosong</p>;

  const totalHarga = cart.reduce(
    (total, item) => total + item.harga * item.qty,
    0
  );

  return (
    <>
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
          {cart.map((item) => (
            <tr key={item.id}>
              <td>{item.nama}</td>
              <td>Rp {Number(item.harga).toLocaleString("id-ID")}</td>
              <td>{item.qty}</td>
              <td>
                Rp {(item.harga * item.qty).toLocaleString("id-ID")}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="cart-total">
        Total: Rp {totalHarga.toLocaleString("id-ID")}
      </div>
    </>
  );
}
