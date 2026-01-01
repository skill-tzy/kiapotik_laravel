export default function KatalogList({ produk, onAdd }) {
  return (
    <div className="struktur-organisasi-row">
      {produk.map((row) => (
        <div
          className="struktur-organisasi-box"
          key={row.id}
          onClick={() => onAdd(row)}
          style={{ cursor: "pointer" }}
        >
          <img
            src={`http://localhost:8000/${row.gambar}`}
            alt={row.nama}
            className="struktur-organisasi-photo"
          />

          <div className="struktur-organisasi-info">
            <p className="struktur-organisasi-name">{row.nama}</p>
            <p className="struktur-organisasi-position">
              Rp {Number(row.harga).toLocaleString("id-ID")}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
