import { useCart } from "./CartContext";

export default function Cart() {
  const { cart, removeItem } = useCart();

  const total = cart.reduce(
    (sum, item) => sum + item.qty * item.harga,
    0
  );

  return (
    <>
      <table id="cartTable">
        <tbody>
          {cart.map((item, i) => (
            <tr key={i}>
              <td>{item.nama}</td>
              <td>{item.qty}</td>
              <td>Rp {item.harga.toLocaleString()}</td>
              <td>Rp {(item.qty * item.harga).toLocaleString()}</td>
              <td>
                <button onClick={() => removeItem(i)}>X</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3>Total: Rp {total.toLocaleString()}</h3>
    </>
  );
}
