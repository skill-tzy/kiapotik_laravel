<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Kiapotik</title>
    <link rel="icon" href="{{ asset('asset/favicon.png') }}" type="image/png">
  <link rel="stylesheet" href="{{ asset('css/style.css') }}" />
</head>
<body>
  <header class="main-header">
    <img src="{{ asset('asset/background.webp') }}" alt="Header Background" class="header-bg" />
    <div class="navbar">
      <div class="logo">
        <a href="{{ url('/') }}">
          <img src="{{ asset('asset/kiapotik.png') }}" alt="Logo Kiapotik" />
        </a>
      </div>
      <ul class="menu">
        <li><a href="{{ url('/tentang') }}">Tentang</a></li>
        <li><a href="{{ url('/katalog') }}">Katalog Produk</a></li>
        <li><a href="{{ url('/kontak') }}">Kontak</a></li>
      </ul>
      <div class="nav-right">
        <a href="{{ url('/inventori') }}" class="download-btn">Pesan Obat</a>
      </div>
    </div>
    <div class="header-content">
      <p class="tagline">#ApotekTapiOnline</p>
      <h1>Platform Apotek</h1>
      <p class="sub">
      <span id="changing-text">Terpercaya</span>
      <img src="{{ asset('asset/mingcute.svg') }}" alt="Ikon" id="sub-icon" class="sub-icon" />
      </p>
      <a href="{{ url('/tentang') }}">
        <button class="content-btn">Tentang Kiapotik →</button>
      </a>
    </div>
  </header>

  <section class="hero">
    <div class="partner-section">
      <h2 class="partner-title">Partner Kami</h2>

      <div class="partner-logos">
        <div class="scrolling-wrapper" id="scrollingWrapper">
          <div class="logo-strip">
            <img src="{{ asset('asset/tokopedia.png') }}" alt="Tokopedia" />
            <img src="{{ asset('asset/teman.png') }}" alt="Teman" />
            <img src="{{ asset('asset/doctor.png') }}" alt="Doctor" />
            <img src="{{ asset('asset/tiktok.png') }}" alt="Tiktok" />
            <img src="{{ asset('asset/dkonsul.png') }}" alt="Dkonsul" />
            <img src="{{ asset('asset/bca.png') }}" alt="BCA" />
            <img src="{{ asset('asset/blibli.png') }}" alt="Blibli" />
            <img src="{{ asset('asset/lazada.png') }}" alt="Lazada" />
            <img src="{{ asset('asset/shopee.png') }}" alt="Shopee" />
          </div>
        </div>
      </div>

  <div class="partner-main-img">
    <img src="{{ asset('asset/frame.webp') }}" alt="Frame" class="frame-img" />

      <div class="overlay-content">
        <img src="{{ asset('asset/indonesia.webp') }}" alt="Peta Indonesia" class="map-img" />
        <p class="overlay-text">
          KiApotik telah menjangkau kebutuhan kesehatan <strong class="tengah-teks"> pelanggan di 480+ kota</strong> di seluruh Indonesia.
        </p>
      </div>
    </div>
    </div>
  </section>

  <section class="footer">
    <div class="footer-container">
      <div class="footer-top">
        <img src="{{ asset('asset/kiapotik.png') }}" alt="Ikon Kesehatan" class="footer-icon" />
        <h2 class="footer-title">Digitalisasi Layanan Kesehatan & Farmasi.</h2>
      </div>
  
      <div class="footer-columns">
        <div class="footer-col">
          <h3>Ikuti Kami</h3>
          <div class="social-item"><img src="{{ asset('asset/instagram.png') }}" /> @KiApotik</div>
          <div class="social-item"><img src="{{ asset('asset/tiktok_icon.png') }}" /> @KiApotik</div>
          <div class="social-item"><img src="{{ asset('asset/youtube.png') }}" /> @KiApotik</div>
        </div>
  
        <div class="footer-col">
          <h3>Metode Pembayaran</h3>
          <div class="logo-row">
            <img src="{{ asset('asset/pembayaran.png') }}" />
          </div>
  
          <h3>Metode Pengiriman</h3>
          <div class="logo-row">
            <img src="{{ asset('asset/pengiriman.png') }}" />
          </div>
        </div>
  
        <div class="footer-col">
          <h3>Customer Care</h3>
          <div class="social-item"><img src="{{ asset('asset/whatsapp.png') }}" /> 089669320161</div>
          <div class="social-item"><img src="{{ asset('asset/customer-service.png') }}" /> 0271-700</div>
          <div class="social-item"><img src="{{ asset('asset/email.png') }}" /> support@KiApotik.com</div>
          <div class="social-item"><img src="{{ asset('asset/calendar.png') }}" /> Senin s/d Minggu</div>
          <div class="social-item"><img src="{{ asset('asset/clock.png') }}" /> 08:00 - 21:00 WIB</div>
          <div class="logo-row-2">
            <img src="{{ asset('asset/kemenkess.png') }}" />
            <img src="{{ asset('asset/bsii.jpeg') }}" />
          </div>
          <p>
            KiApotik adalah Penyelenggara Sistem</br>
            Elektronik Farmasi yang tersertifikasi</br>
            ISO 27001.
          </p>
        </div>
      </div>
      <div class="footer-bottom">
        <p>
          KiApotik, 2025 - PT Adzkia Foundation
        </p>
      </div>
    </div>
  </section>

  <script src="{{ asset('js/script.js') }}"></script>
</body>
</html>
