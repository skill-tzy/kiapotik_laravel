import "../assets/css/style.css";

export default function Footer() {
  return (
    <section className="footer">
      <div className="footer-container">

        <div className="footer-top">
          <img src="/assets/kiapotik.png" alt="Ikon Kesehatan" className="footer-icon" />
          <h2 className="footer-title">
            Digitalisasi Layanan Kesehatan & Farmasi.
          </h2>
        </div>

        <div className="footer-columns">

          <div className="footer-col">
            <h3>Ikuti Kami</h3>
            <div className="social-item"><img src="/assets/instagram.png" /> @KiApotik</div>
            <div className="social-item"><img src="/assets/tiktok_icon.png" /> @KiApotik</div>
            <div className="social-item"><img src="/assets/youtube.png" /> @KiApotik</div>
          </div>

          <div className="footer-col">
            <h3>Metode Pembayaran</h3>
            <div className="logo-row">
              <img src="/assets/pembayaran.png" />
            </div>

            <h3>Metode Pengiriman</h3>
            <div className="logo-row">
              <img src="/assets/pengiriman.png" />
            </div>
          </div>

          <div className="footer-col">
            <h3>Customer Care</h3>
            <div className="social-item"><img src="/assets/whatsapp.png" /> 089669320161</div>
            <div className="social-item"><img src="/assets/customer-service.png" /> 0271-700</div>
            <div className="social-item"><img src="/assets/email.png" /> support@KiApotik.com</div>
            <div className="social-item"><img src="/assets/calendar.png" /> Senin s/d Minggu</div>
            <div className="social-item"><img src="/assets/clock.png" /> 08:00 - 21:00 WIB</div>

            <div className="logo-row-2">
              <img src="/assets/kemenkess.png" />
              <img src="/assets/bsii.jpeg" />
            </div>

            <p>
              KiApotik adalah Penyelenggara Sistem<br />
              Elektronik Farmasi yang tersertifikasi<br />
              ISO 27001.
            </p>
          </div>

        </div>

        <div className="footer-bottom">
          <p>KiApotik, 2025 - PT Adzkia Foundation</p>
        </div>

      </div>
    </section>
  );
}
