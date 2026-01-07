import "../assets/css/style.css";
import Footer from "../layouts/Footer";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Katalog() {
  const [produk, setProduk] = useState([]);

  useEffect(() => {
    fetch("https://api.muhammadadzkia.informatika24b1.com/api/katalog")
      .then((res) => res.json())
      .then((data) => setProduk(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <header className="main-header">
        <div className="navbar">
          <div className="logo">
            <Link to="/">
              <img src="/assets/kiapotik.png" alt="Logo Kiapotik" />
            </Link>
          </div>

          <ul className="menu">
            <li><Link to="/tentang">Tentang</Link></li>
            <li><Link to="/katalog" className="highlight">Katalog Produk</Link></li>
            <li><Link to="/kontak">Kontak</Link></li>
          </ul>

          <div className="nav-right">
            <Link to="/masuk" className="download-btn">
              Pesan Obat
            </Link>
          </div>
        </div>
      </header>

      <section className="hero">
        <h1 className="profil-detail-title">Katalog Produk</h1>

        <div className="struktur-organisasi-container">
          <div className="struktur-organisasi-row">
            {produk.map((row) => (
              <div className="struktur-organisasi-box" key={row.id}>
                <img
                  src={`https://api.muhammadadzkia.informatika24b1.com/${row.gambar}`}
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
        </div>
      </section>

      <section className="pesan-obat">
        <div className="pesan-wrapper">
          <Link to="/masuk" className="pesan-btn">
            Pesan Sekarang
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
