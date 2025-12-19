import "../assets/css/style.css";
import Footer from "../layouts/Footer";
import { Link } from "react-router-dom";

export default function Tentang() {
  return (
    <>
      <header className="main-header">
        <div className="navbar">
          <div className="logo">
            <Link to="/">
              <img
                src="/assets/kiapotik.png"
                alt="Logo Kiapotik"
              />
            </Link>
          </div>

          <ul className="menu">
            <li><Link to="/tentang" className="highlight">Tentang</Link></li>
            <li><Link to="/katalog">Katalog Produk</Link></li>
            <li><Link to="/kontak">Kontak</Link></li>
          </ul>

          <div className="nav-right">
            <Link to="/inventori" className="download-btn">
              Pesan Obat
            </Link>
          </div>
        </div>
      </header>

      <section className="hero">
        <h1 className="profil-detail-title">Tentang KiApotik</h1>

        <div className="tentang-container">
          <p className="tentang-deskripsi">
            <strong>KiApotik</strong> adalah platform digital terpercaya yang
            menghadirkan solusi lengkap untuk kebutuhan kesehatan Anda. Kami hadir
            untuk memudahkan masyarakat Indonesia dalam mengakses produk
            kesehatan, vitamin, obat resep & non-resep, serta layanan farmasi
            secara aman, cepat, dan terjangkau — cukup dari rumah.
          </p>

          <p className="tentang-deskripsi">
            Dengan jaringan distribusi yang luas dan teknologi digital yang kami
            kembangkan sendiri, KiApotik mendukung transformasi layanan kesehatan
            dan farmasi menjadi lebih modern dan efisien.
          </p>

          <div className="statistik-wrapper">
            <div className="statistik-box">
              <img src="/assets/merchant.svg" alt="Mitra Icon" />
              <h3>7.000+</h3>
              <p>Mitra KiApotik</p>
            </div>

            <div className="statistik-box">
              <img src="/assets/product.svg" alt="Produk Icon" />
              <h3>50.000+</h3>
              <p>Produk Tersedia</p>
            </div>

            <div className="statistik-box">
              <img src="/assets/location.svg" alt="Kota Icon" />
              <h3>480+</h3>
              <p>Jangkauan Kota</p>
            </div>
          </div>

          <div className="tentang-komitmen">
            <h2>Komitmen Kami</h2>
            <ul>
              <li>
                Menyediakan produk kesehatan berkualitas dengan harga terjangkau
              </li>
              <li>
                Memberikan pengalaman belanja yang mudah, aman, dan cepat
              </li>
              <li>
                Mendukung apotek lokal dan memperkuat layanan farmasi di seluruh
                Indonesia
              </li>
              <li>
                Terintegrasi dengan standar keamanan data dan bersertifikasi ISO
                27001
              </li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
