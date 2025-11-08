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
  <header>
    <div class="navbar">
      <div class="logo">
        <a href="{{ url('/') }}">
          <img src="{{ asset('asset/kiapotik.png') }}" alt="Logo Kiapotik" />
        </a>
      </div>
      <ul class="menu">
        <li><a href="{{ url('/tentang') }}">Tentang</a></li>
        <li><a href="{{ url('/katalog') }}" class="highlight">Katalog Produk</a></li>
        <li><a href="{{ url('/kontak') }}">Kontak</a></li>
      </ul>
      <div class="nav-right">
        <a href="{{ url('/inventori') }}" class="download-btn">Pesan Obat</a>
      </div>
    </div>
  </header>

  <section class="hero">
    <h1 class="profil-detail-title">Katalog Produk</h1>
    <div class="struktur-organisasi-container">
      <div class="struktur-organisasi-row">
        @foreach ($produk as $row)
          <div class="struktur-organisasi-box">
            <img src="{{ asset($row->gambar) }}" alt="{{ $row->nama }}" class="struktur-organisasi-photo">
            <div class="struktur-organisasi-info">
              <p class="struktur-organisasi-name">{{ $row->nama }}</p>
              <p class="struktur-organisasi-position">Rp {{ number_format($row->harga, 0, ',', '.') }}</p>
            </div>
          </div>
        @endforeach
      </div>
    </div>
  </section>

  <section class="pesan-obat">
    <div class="pesan-wrapper">
      <a href="{{ url('/inventori') }}" class="pesan-btn">Pesan Sekarang</a>
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
