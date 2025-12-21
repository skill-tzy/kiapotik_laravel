import "../assets/css/style.css";
import Footer from "../layouts/Footer";
import ChangingText from "../components/ChangingText";
import PartnerScroller from "../components/PartnerScroller";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <header className="main-header">
        <img
          src="/assets/background.webp"
          alt="Header Background"
          className="header-bg"
        />

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
            <li><Link to="/kontak">Kontak</Link></li>
          </ul>

          <div className="nav-right">
            <Link to="/masuk" className="download-btn">
              Pesan Obat
            </Link>
          </div>
        </div>

        <div className="header-content">
          <p className="tagline">#ApotekTapiOnline</p>
          <h1>Platform Apotek</h1>

          <ChangingText />

          <Link to="/tentang">
            <button className="content-btn">
              Tentang Kiapotik →
            </button>
          </Link>
        </div>
      </header>

      <section className="hero">
        <div className="partner-section">
          <h2 className="partner-title">Partner Kami</h2>

          <div className="partner-logos">
            <PartnerScroller />
          </div>

          <div className="partner-main-img">
            <img
              src="/assets/frame.webp"
              alt="Frame"
              className="frame-img"
            />

            <div className="overlay-content">
              <img
                src="/assets/indonesia.webp"
                alt="Peta Indonesia"
                className="map-img"
              />
              <p className="overlay-text">
                KiApotik telah menjangkau kebutuhan kesehatan
                <strong className="tengah-teks">
                  {" "}pelanggan di 480+ kota
                </strong>{" "}
                di seluruh Indonesia.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
