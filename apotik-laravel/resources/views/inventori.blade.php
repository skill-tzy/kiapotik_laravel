@extends('layouts.dbadmin')

@section('content')
<div class="container-fluid">
    <div class="d-flex justify-content-between mb-3">
        <h4>Daftar Produk</h4>
        <button class="btn btn-success" data-bs-toggle="modal" data-bs-target="#modalTambah">+ Tambah Produk</button>
    </div>

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
        <tbody id="tabel-produk">
            <!-- Contoh data -->
            <tr>
                <td>1</td>
                <td><img src="{{ asset('produk/paracetamol.jpg') }}" width="60" height="60" style="object-fit:cover"></td>
                <td>Paracetamol</td>
                <td>Rp 10.000</td>
                <td>25</td>
                <td>
                    <button class="btn btn-warning btn-sm" data-bs-toggle="modal" data-bs-target="#modalEdit">Edit</button>
                    <button class="btn btn-danger btn-sm">Hapus</button>
                </td>
            </tr>
        </tbody>
    </table>
</div>

<!-- Modal Tambah -->
<div class="modal fade" id="modalTambah" tabindex="-1" aria-labelledby="tambahLabel" aria-hidden="true">
  <div class="modal-dialog">
    <form class="modal-content">
      <div class="modal-header bg-success text-white">
        <h5 class="modal-title" id="tambahLabel">Tambah Produk</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
      </div>
      <div class="modal-body">
          <div class="mb-3">
              <label>Nama Produk</label>
              <input type="text" class="form-control" name="nama">
          </div>
          <div class="mb-3">
              <label>Harga</label>
              <input type="number" class="form-control" name="harga">
          </div>
          <div class="mb-3">
              <label>Stok</label>
              <input type="number" class="form-control" name="stok">
          </div>
          <div class="mb-3">
              <label>Gambar</label>
              <input type="file" class="form-control" name="gambar">
          </div>
      </div>
      <div class="modal-footer">
        <button type="submit" class="btn btn-success">Simpan</button>
      </div>
    </form>
  </div>
</div>

<!-- Modal Edit -->
<div class="modal fade" id="modalEdit" tabindex="-1" aria-labelledby="editLabel" aria-hidden="true">
  <div class="modal-dialog">
    <form class="modal-content">
      <div class="modal-header bg-warning">
        <h5 class="modal-title" id="editLabel">Edit Produk</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
      </div>
      <div class="modal-body">
          <div class="mb-3">
              <label>Nama Produk</label>
              <input type="text" class="form-control" value="Paracetamol">
          </div>
          <div class="mb-3">
              <label>Harga</label>
              <input type="number" class="form-control" value="10000">
          </div>
          <div class="mb-3">
              <label>Stok</label>
              <input type="number" class="form-control" value="25">
          </div>
          <div class="mb-3">
              <label>Ganti Gambar</label>
              <input type="file" class="form-control">
          </div>
      </div>
      <div class="modal-footer">
        <button type="submit" class="btn btn-warning text-white">Update</button>
      </div>
    </form>
  </div>
</div>
@endsection
