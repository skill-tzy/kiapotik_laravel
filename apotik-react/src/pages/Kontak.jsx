import "../assets/css/style.css";
import Footer from "../layouts/Footer";
import { Link } from "react-router-dom";

export default function Kontak() {
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
            <li><Link to="/tentang">Tentang</Link></li>
            <li><Link to="/katalog">Katalog Produk</Link></li>
            <li><Link to="/kontak" className="highlight">Kontak</Link></li>
          </ul>

          <div className="nav-right">
            <Link to="/inventori" className="download-btn">
              Pesan Obat
            </Link>
          </div>
        </div>
      </header>

      <section className="kontak-section">
        <h1 className="profil-detail-title">Kontak Kami</h1>
    
        <div className="kontak-container">
          <div className="kontak-info">
            <h2>Alamat Kantor</h2>
            <p>
              Titan Center, Lantai 12<br />
              Jl. Boulevard Bintaro Blok B7/B1 No. 05<br />
              Bintaro Jaya Sektor 7, Tangerang Selatan 15424<br />
              Indonesia
            </p>
    
            <h2>Kontak</h2>
            <p>
              <img src="/assets/whatsapp.png" className="icon" alt="Whatsapp" />
              Whatsapp: 0817-4979-622
            </p>
            <p>
              <img
                src="/assets/customer-service.png"
                className="icon"
                alt="Hotline"
              />
              Hotline: 021-2221-3737
            </p>
            <p>
              <img src="/assets/email.png" className="icon" alt="Email" />
              Email: cs@kiapotik.com
            </p>
          </div>
    
          <div className="kontak-extra">
            <h2>Jam Operasional</h2>
            <ul>
              <li>Senin – Jumat: 08.00 – 21.00 WIB</li>
              <li>Sabtu – Minggu: 09.00 – 17.00 WIB</li>
              <li>Hari Libur Nasional: Tutup</li>
            </ul>
    
            <h2>Ikuti Kami</h2>
            <div className="kontak-social">
              <div>
                <img
                  src="/assets/instagram.png"
                  className="icon"
                  alt="Instagram"
                />
                @KiApotik
              </div>
              <div>
                <img
                  src="/assets/tiktok_icon.png"
                  className="icon"
                  alt="Tiktok"
                />
                @KiApotik
              </div>
              <div>
                <img
                  src="/assets/youtube.png"
                  className="icon"
                  alt="YouTube"
                />
                @KiApotik
              </div>
            </div>
          </div>
        </div>
    
        <div className="kontak-map-offline">
          <img src="/assets/sharelok.png" alt="Peta Lokasi" />
        </div>
      </section>

      <Footer />
    </>
  );
}
