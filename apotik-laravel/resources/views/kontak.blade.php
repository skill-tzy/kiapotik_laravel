<?php include 'db.php'; ?>
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Kiapotik</title>
    <link rel="icon" href="asset/favicon.png" type="image/png">
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <header>
    <div class="navbar">
      <div class="logo">
        <a href="index.php">
          <img src="asset/kiapotik.png" alt="Logo Kiapotik" />
        </a>
      </div>
      <ul class="menu">
        <li><a href="tentang.php">Tentang</a></li>
        <li><a href="katalog.php">Katalog Produk</a></li>
        <li><a href="kontak.php" class="highlight">Kontak</a></li>
      </ul>
      <div class="nav-right">
        <a href="katalog.php" class="download-btn">Pesan Obat</a>
      </div>
    </div>
  </header>

  <section class="kontak-section">
    <h1 class="profil-detail-title">Kontak Kami</h1>

    <div class="kontak-container">
      <div class="kontak-info">
        <h2>Alamat Kantor</h2>
        <p>
          Titan Center, Lantai 12<br>
          Jl. Boulevard Bintaro Blok B7/B1 No. 05<br>
          Bintaro Jaya Sektor 7, Tangerang Selatan 15424<br>
          Indonesia
        </p>

        <h2>Kontak</h2>
        <p><img src="asset/whatsapp.png" class="icon"> Whatsapp: 0817-4979-622</p>
        <p><img src="asset/customer-service.png" class="icon"> Hotline: 021-2221-3737</p>
        <p><img src="asset/email.png" class="icon"> Email: cs@kiapotik.com</p>
      </div>

      <div class="kontak-extra">
        <h2>Jam Operasional</h2>
        <ul>
          <li>Senin – Jumat: 08.00 – 21.00 WIB</li>
          <li>Sabtu – Minggu: 09.00 – 17.00 WIB</li>
          <li>Hari Libur Nasional: Tutup</li>
        </ul>

        <h2>Ikuti Kami</h2>
        <div class="kontak-social">
          <div><img src="asset/instagram.png" class="icon"> @KiApotik</div>
          <div><img src="asset/tiktok_icon.png" class="icon"> @KiApotik</div>
          <div><img src="asset/youtube.png" class="icon"> @KiApotik</div>
        </div>
      </div>
    </div>

    <div class="kontak-map-offline">
      <img src="asset/sharelok.png" alt="Peta Lokasi" />
    </div>
  </section>

  <section class="footer">
    <div class="footer-container">
      <div class="footer-top">
        <img src="asset/kiapotik.png" alt="Ikon Kesehatan" class="footer-icon" />
        <h2 class="footer-title">Digitalisasi Layanan Kesehatan & Farmasi.</h2>
      </div>
  
      <div class="footer-columns">
        <div class="footer-col">
          <h3>Ikuti Kami</h3>
          <div class="social-item"><img src="asset/instagram.png" /> @KiApotik</div>
          <div class="social-item"><img src="asset/tiktok_icon.png" /> @KiApotik</div>
          <div class="social-item"><img src="asset/youtube.png" /> @KiApotik</div>
        </div>
  
        <div class="footer-col">
          <h3>Metode Pembayaran</h3>
          <div class="logo-row">
            <img src="asset/pembayaran.png" />
          </div>
  
          <h3>Metode Pengiriman</h3>
          <div class="logo-row">
            <img src="asset/pengiriman.png" />
          </div>
        </div>
  
        <div class="footer-col">
          <h3>Customer Care</h3>
          <div class="social-item"><img src="asset/whatsapp.png" /> 089669320161</div>
          <div class="social-item"><img src="asset/customer-service.png" /> 0271-700</div>
          <div class="social-item"><img src="asset/email.png" /> support@KiApotik.com</div>
          <div class="social-item"><img src="asset/calendar.png" /> Senin s/d Minggu</div>
          <div class="social-item"><img src="asset/clock.png" /> 08:00 - 21:00 WIB</div>
          <div class="logo-row-2">
            <img src="asset/kemenkess.png" />
            <img src="asset/bsii.jpeg" />
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

  <script src="script.js"></script>
</body>
</html>
