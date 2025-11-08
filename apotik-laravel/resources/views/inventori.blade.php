@extends('layouts.dbadmin')

@section('content')
<div class="inventori-container">
  <div class="inventori-header">
    <h4>Daftar Produk</h4>
    <button class="btn btn-success" id="btnTambah">+ Tambah Produk</button>
  </div>

  <!-- TABEL PRODUK -->
  <table class="inventori-table">
    <thead>
      <tr>
        <th>No</th>
        <th>Gambar</th>
        <th>Nama</th>
        <th>Harga</th>
        <th>Stok</th>
        <th>Aksi</th>
      </tr>
    </thead>
    <tbody>
      @forelse ($produk as $index => $item)
      <tr>
        <td>{{ $index + 1 }}</td>
        <td>
          @if($item->gambar)
            <img src="{{ asset('storage/produk/' . $item->gambar) }}" class="produk-img" alt="{{ $item->nama }}">
          @else
            <span class="text-muted">Tidak ada</span>
          @endif
        </td>
        <td>{{ $item->nama }}</td>
        <td>Rp {{ number_format($item->harga, 0, ',', '.') }}</td>
        <td>{{ $item->stok }}</td>
        <td>
        <button 
          class="btn btn-warning btn-sm btn-edit"
          data-bs-toggle="modal" 
          data-bs-target="#modalEdit"
          data-id="{{ $item->id }}"
          data-nama="{{ $item->nama }}"
          data-harga="{{ $item->harga }}"
          data-stok="{{ $item->stok }}">
          Edit
        </button>
          <form action="{{ route('inventori.destroy', $item->id) }}" method="POST" class="inline-form">
            @csrf
            @method('DELETE')
            <button class="btn btn-danger btn-sm" onclick="return confirm('Yakin ingin menghapus produk ini?')">Hapus</button>
          </form>
        </td>
      </tr>
      @empty
      <tr><td colspan="6" class="text-center">Belum ada produk</td></tr>
      @endforelse
    </tbody>
  </table>
  <!-- Modal Edit -->
<div class="modal fade" id="modalEdit" tabindex="-1" aria-labelledby="modalEditLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <form id="formEdit" method="POST" enctype="multipart/form-data">
        @csrf
        @method('PUT')
        <div class="modal-header">
          <h5 class="modal-title" id="modalEditLabel">Edit Data Produk</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Tutup"></button>
        </div>

        <div class="modal-body">
          <input type="hidden" id="edit-id" name="id">

          <div class="mb-3">
            <label for="edit-nama" class="form-label">Nama Produk</label>
            <input type="text" class="form-control" id="edit-nama" name="nama" required>
          </div>

          <div class="mb-3">
            <label for="edit-harga" class="form-label">Harga</label>
            <input type="number" class="form-control" id="edit-harga" name="harga" required>
          </div>

          <div class="mb-3">
            <label for="edit-stok" class="form-label">Stok</label>
            <input type="number" class="form-control" id="edit-stok" name="stok" required>
          </div>

          <div class="mb-3">
            <label for="edit-gambar" class="form-label">Ubah Gambar</label>
            <input type="file" class="form-control" id="edit-gambar" name="gambar">
            <small class="text-muted">Kosongkan jika tidak ingin mengubah gambar</small>
          </div>
        </div>

        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Batal</button>
          <button type="submit" class="btn btn-primary">Simpan Perubahan</button>
        </div>
      </form>
    </div>
  </div>
</div>
</div>

<!-- MODAL TAMBAH -->
<div id="modalTambah" class="modal">
  <div class="modal-content">
    <h5>Tambah Produk</h5>
    <form action="{{ route('inventori.store') }}" method="POST" enctype="multipart/form-data">
      @csrf
      <label>Nama Produk</label>
      <input type="text" name="nama" required>
      <label>Harga</label>
      <input type="number" name="harga" required>
      <label>Stok</label>
      <input type="number" name="stok" required>
      <label>Gambar</label>
      <input type="file" name="gambar" required>
      <div class="modal-actions">
        <button type="submit" class="btn btn-success">Simpan</button>
        <button type="button" class="btn btn-secondary" onclick="closeModal('modalTambah')">Batal</button>
      </div>
    </form>
  </div>
</div>
@endsection

@push('scripts')
<script src="{{ asset('js/script.js') }}"></script>
@endpush