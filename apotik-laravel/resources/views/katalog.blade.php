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
        <li><a href="katalog.php" class="highlight">Katalog Produk</a></li>
        <li><a href="kontak.php">Kontak</a></li>
      </ul>
      <div class="nav-right">
        <a href="katalog.php" class="download-btn">Pesan Obat</a>
      </div>
    </div>
  </header>

  <section class="hero">
    <h1 class="profil-detail-title">Katalog Produk</h1>
    <div class="struktur-organisasi-container">
      <div class="struktur-organisasi-row">
        <?php
          $result = $koneksi->query("SELECT * FROM produk");
          while ($row = $result->fetch_assoc()):
        ?>
        <div class="struktur-organisasi-box" onclick="addToCart(<?= $row['id'] ?>, '<?= $row['nama'] ?>', <?= $row['harga'] ?>)">
          <img src="<?= $row['gambar'] ?>" alt="<?= $row['nama'] ?>" class="struktur-organisasi-photo">
          <div class="struktur-organisasi-info">
            <p class="struktur-organisasi-name"><?= $row['nama'] ?></p>
            <p class="struktur-organisasi-position">Rp <?= number_format($row['harga'], 0, ',', '.') ?></p>
          </div>
        </div>
        <?php endwhile; ?>
      </div>
    </div>
  </section>

  <section class="keranjang container">
    <h1 class="profil-detail-title-2">Keranjang Belanja</h1>

    <form id="checkoutForm" onsubmit="printReceipt(event)">
      <label for="nama">Nama:</label>
      <input type="text" id="nama" name="nama" placeholder="Masukkan Nama Anda" required>

      <label for="alamat">Alamat:</label>
      <input type="text" id="alamat" name="alamat" placeholder="Masukkan Alamat" required>

      <table id="cartTable">
        <thead>
          <tr>
            <th>Produk</th>
            <th>Qty</th>
            <th>Harga</th>
            <th>Subtotal</th>
            <th>Hapus</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>

      <p style="font-weight:bold; font-size: 16px; margin-top:10px;">Total: Rp <span id="totalHarga">0</span></p>

      <div class="button-row">
        <button type="submit">Beli</button>
        <button type="button" class="danger" onclick="kosongkanKeranjang()">Kosongkan Keranjang</button>
      </div>
    </form>
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
