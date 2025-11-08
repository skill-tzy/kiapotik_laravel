const phrases = [
  { text: "Terlengkap", icon: "asset/product.svg" },
  { text: "Termurah", icon: "asset/cheap.svg" },
  { text: "Terjangkau", icon: "asset/location.svg" }
];

const textEl = document.getElementById("changing-text");
const iconEl = document.getElementById("sub-icon");

let index = 0;

setInterval(() => {
  index = (index + 1) % phrases.length;

  textEl.classList.remove("slide");
  void textEl.offsetWidth; 
  textEl.classList.add("slide");

  iconEl.classList.remove("slide-img");
  void iconEl.offsetWidth;
  iconEl.classList.add("slide-img");

  textEl.textContent = phrases[index].text;
  iconEl.src = phrases[index].icon;
  iconEl.alt = phrases[index].text + " Icon";
}, 2500);

const wrapper = document.getElementById('scrollingWrapper');
if (wrapper && wrapper.firstElementChild) {
  const clone = wrapper.firstElementChild.cloneNode(true);
  wrapper.appendChild(clone);
}

let cart = [];

function addToCart(id, nama, harga) {
  const existing = cart.find(item => item.id === id);
  if (existing) {
    existing.qty += 1; 
  } else {
    cart.push({ id, nama, harga, qty: 1 });
  }
  renderCart();
}

function renderCart() {
  const tbody = document.querySelector("#cartTable tbody");
  const totalEl = document.getElementById("totalHarga");
  tbody.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    const subtotal = item.qty * item.harga;
    total += subtotal;

    const row = `<tr>
      <td>${item.nama}</td>
      <td>${item.qty}</td>
      <td>Rp ${item.harga.toLocaleString()}</td>
      <td>Rp ${subtotal.toLocaleString()}</td>
      <td><button onclick="hapusItem(${index})">X</button></td>
    </tr>`;
    tbody.innerHTML += row;
  });

  totalEl.textContent = total.toLocaleString();
}

function hapusItem(index) {
  cart.splice(index, 1);
  renderCart();
}

function kosongkanKeranjang() {
  cart = [];
  renderCart();
}

function printReceipt(e) {
  e.preventDefault();
  const nama = e.target.nama.value;
  const alamat = e.target.alamat.value;

  let strukWindow = window.open('', '', 'width=800,height=600');

  let total = 0;
  let rows = '';
  cart.forEach(item => {
    const subtotal = item.qty * item.harga;
    total += subtotal;
    rows += `
      <tr>
        <td>${item.nama}</td>
        <td>${item.qty}</td>
        <td>Rp ${item.harga.toLocaleString()}</td>
        <td>Rp ${subtotal.toLocaleString()}</td>
      </tr>`;
  });

  strukWindow.document.write(`
    <html>
      <head>
        <title>Struk Pembelian</title>
        <style>
          body { font-family: Arial, sans-serif; padding: 20px; }
          h2 { text-align: center; }
          table { width: 100%; border-collapse: collapse; margin-top: 20px; }
          th, td { border: 1px solid #ddd; padding: 8px; text-align: center; }
          th { background-color: #f2f2f2; }
          p { margin: 5px 0; }
        </style>
      </head>
      <body>
        <h2>STRUK PEMBELIAN - KiApotik</h2>
        <p><strong>Nama:</strong> ${nama}</p>
        <p><strong>Alamat:</strong> ${alamat}</p>
        <table>
          <thead>
            <tr>
              <th>Produk</th>
              <th>Qty</th>
              <th>Harga</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            ${rows}
          </tbody>
        </table>
        <h3 style="margin-top:20px;">TOTAL: Rp ${total.toLocaleString()}</h3>
        <p style="margin-top:30px; text-align:center;">Terima kasih telah berbelanja di KiApotik!</p>
        <script>
          window.onload = function() {
            window.print();
          }
        </script>
      </body>
    </html>
  `);

  strukWindow.document.close();
}

document.addEventListener('DOMContentLoaded', function () {
    console.log('✅ script.js berhasil dimuat');

    // === Modal Manual ===
    const btnTambah = document.getElementById('btnTambah');
    const modalTambah = document.getElementById('modalTambah');
    const modals = document.querySelectorAll('.modal');

    if (btnTambah && modalTambah) {
        btnTambah.addEventListener('click', () => {
            modalTambah.style.display = 'flex';
        });
    }

    modals.forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });

        const modalContent = modal.querySelector('.modal-content');
        if (modalContent) {
            modalContent.addEventListener('click', function (event) {
                event.stopPropagation();
            });
        }
    });

    // === Modal Edit ===
    const formEdit = document.getElementById('formEdit');
    const modalEdit = document.getElementById('modalEdit');

    document.querySelectorAll('.btn-edit').forEach(button => {
        button.addEventListener('click', function() {
            const id = this.dataset.id;
            const nama = this.dataset.nama;
            const harga = this.dataset.harga;
            const stok = this.dataset.stok;

            document.getElementById('edit-id').value = id;
            document.getElementById('edit-nama').value = nama;
            document.getElementById('edit-harga').value = harga;
            document.getElementById('edit-stok').value = stok;

            if (formEdit) formEdit.action = `/inventori/${id}`;
            if (modalEdit) modalEdit.style.display = 'flex';
        });
    });

    // Tombol tutup manual (opsional)
    document.querySelectorAll('.btn-close-modal').forEach(btn => {
        btn.addEventListener('click', function() {
            const target = this.dataset.target;
            document.getElementById(target).style.display = 'none';
        });  
    });
}); // ← ini penutup event DOMContentLoaded

// === Fungsi Tutup Modal Manual (dipakai tombol "Batal") ===
function closeModal(id) {
    const modal = document.getElementById(id);
    if (modal) modal.style.display = 'none';
}

// === Klik gambar untuk memperbesar ===
document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('imgModal');
    const modalImg = document.getElementById('imgPreview');

    document.querySelectorAll('.produk-img').forEach(img => {
        img.addEventListener('click', function () {
            modalImg.src = this.src;
            modal.classList.add('active');
        });
    });

    // Klik area luar gambar untuk menutup modal
    modal.addEventListener('click', function () {
        modal.classList.remove('active');
    });
});
