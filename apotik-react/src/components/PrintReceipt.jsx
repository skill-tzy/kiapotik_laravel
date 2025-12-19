import { useCart } from "./CartContext";

export default function PrintReceipt({ nama, alamat }) {
  const { cart } = useCart();

  const print = () => {
    let total = 0;
    let rows = "";

    cart.forEach((item) => {
      const subtotal = item.qty * item.harga;
      total += subtotal;
      rows += `
        <tr>
          <td>${item.nama}</td>
          <td>${item.qty}</td>
          <td>Rp ${item.harga.toLocaleString()}</td>
          <td>Rp ${subtotal.toLocaleString()}</td>
        </tr>`;
    });

    const win = window.open("", "", "width=800,height=600");
    win.document.write(`
      <h2>STRUK PEMBELIAN - KiApotik</h2>
      <p>Nama: ${nama}</p>
      <p>Alamat: ${alamat}</p>
      <table border="1">${rows}</table>
      <h3>Total: Rp ${total.toLocaleString()}</h3>
      <script>window.onload = () => window.print()</script>
    `);
    win.document.close();
  };

  return <button onClick={print}>Cetak Struk</button>;
}
