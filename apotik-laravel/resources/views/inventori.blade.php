@extends('layouts.dbadmin')

@section('content')
<div class="container-fluid inventori-container">
    <div class="d-flex justify-content-between mb-3">
        <h4>Daftar Produk</h4>
        <button class="btn btn-success" data-bs-toggle="modal" data-bs-target="#modalTambah">+ Tambah Produk</button>
    </div>

    <!-- TABEL PRODUK -->
    <table class="table table-bordered table-striped align-middle">
        <thead class="table-dark">
            <tr>
                <th>#</th>
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
                    <button type="button"
                        class="btn btn-warning btn-sm btn-edit"
                        data-id="{{ $item->id }}"
                        data-nama="{{ $item->nama }}"
                        data-harga="{{ $item->harga }}"
                        data-stok="{{ $item->stok }}"
                        data-bs-toggle="modal"
                        data-bs-target="#modalEdit">
                        Edit
                    </button>
                    <form action="{{ route('inventori.destroy', $item->id) }}" method="POST" class="d-inline">
                        @csrf
                        @method('DELETE')
                        <button class="btn btn-danger btn-sm" onclick="return confirm('Yakin ingin menghapus produk ini?')">Hapus</button>
                    </form>
                </td>
            </tr>
            @empty
            <tr>
                <td colspan="6" class="text-center text-muted">Belum ada produk</td>
            </tr>
            @endforelse
        </tbody>
    </table>
    <!-- MODAL EDIT (GLOBAL) -->
    <div class="modal fade" id="modalEdit" tabindex="-1" aria-labelledby="editLabel" aria-hidden="true">
      <div class="modal-dialog">
        <form id="formEdit" method="POST" enctype="multipart/form-data" class="modal-content">
            @csrf
            @method('PUT')
            <div class="modal-header bg-warning">
                <h5 class="modal-title text-white" id="editLabel">Edit Produk</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div class="modal-body">
                <input type="hidden" id="edit-id" name="id">
                <div class="mb-3">
                    <label>Nama Produk</label>
                    <input type="text" class="form-control" id="edit-nama" name="nama">
                </div>
                <div class="mb-3">
                    <label>Harga</label>
                    <input type="number" class="form-control" id="edit-harga" name="harga">
                </div>
                <div class="mb-3">
                    <label>Stok</label>
                    <input type="number" class="form-control" id="edit-stok" name="stok">
                </div>
                <div class="mb-3">
                    <label>Ganti Gambar</label>
                    <input type="file" class="form-control" name="gambar">
                </div>
            </div>
            <div class="modal-footer">
                <button type="submit" class="btn btn-warning text-white">Update</button>
            </div>
        </form>
      </div>
    </div>
</div>

<!-- MODAL TAMBAH -->
<div class="modal fade" id="modalTambah" tabindex="-1" aria-labelledby="tambahLabel" aria-hidden="true">
  <div class="modal-dialog">
    <form action="{{ route('inventori.store') }}" method="POST" enctype="multipart/form-data" class="modal-content">
      @csrf
      <div class="modal-header bg-success text-white">
        <h5 class="modal-title" id="tambahLabel">Tambah Produk</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
      </div>
      <div class="modal-body">
          <div class="mb-3">
              <label>Nama Produk</label>
              <input type="text" class="form-control" name="nama" required>
          </div>
          <div class="mb-3">
              <label>Harga</label>
              <input type="number" class="form-control" name="harga" required>
          </div>
          <div class="mb-3">
              <label>Stok</label>
              <input type="number" class="form-control" name="stok" required>
          </div>
          <div class="mb-3">
              <label>Gambar</label>
              <input type="file" class="form-control" name="gambar" required>
          </div>
      </div>
      <div class="modal-footer">
        <button type="submit" class="btn btn-success">Simpan</button>
      </div>
    </form>
  </div>
</div>
@endsection

@push('scripts')
<script src="{{ asset('js/script.js') }}"></script>
@endpush