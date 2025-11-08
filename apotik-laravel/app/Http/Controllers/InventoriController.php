<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Produk;
use Illuminate\Support\Facades\File;

class InventoriController extends Controller
{
    public function index()
    {
        $produk = Produk::all();
        return view('inventori', compact('produk'));
    }

    // === SIMPAN PRODUK BARU ===
    public function store(Request $request)
    {
        $validated = $request->validate([
            'nama' => 'required|string',
            'harga' => 'required|numeric',
            'stok' => 'required|numeric',
            'gambar' => 'required|image|mimes:jpg,jpeg,png|max:2048',
        ]);

        // Simpan gambar ke public/produk
        $file = $request->file('gambar');
        $filename = time() . '_' . $file->getClientOriginalName();
        $file->move(public_path('produk'), $filename);

        Produk::create([
            'nama' => $validated['nama'],
            'harga' => $validated['harga'],
            'stok' => $validated['stok'],
            'gambar' => 'produk/' . $filename, // Simpan path relatif
        ]);

        return back()->with('success', 'Produk berhasil ditambahkan!');
    }

    // === UPDATE PRODUK ===
    public function update(Request $request, $id)
    {
        $produk = Produk::findOrFail($id);
        $validated = $request->validate([
            'nama' => 'required|string',
            'harga' => 'required|numeric',
            'stok' => 'required|numeric',
            'gambar' => 'nullable|image|mimes:jpg,jpeg,png|max:2048',
        ]);

        // Jika user upload gambar baru
        if ($request->hasFile('gambar')) {
            // Hapus gambar lama jika ada
            if ($produk->gambar && File::exists(public_path($produk->gambar))) {
                File::delete(public_path($produk->gambar));
            }

            $file = $request->file('gambar');
            $filename = time() . '_' . $file->getClientOriginalName();
            $file->move(public_path('produk'), $filename);
            $validated['gambar'] = 'produk/' . $filename;
        } else {
            // Jika tidak upload gambar baru, gunakan gambar lama
            $validated['gambar'] = $produk->gambar;
        }

        $produk->update($validated);

        return back()->with('success', 'Produk berhasil diperbarui!');
    }

    // === HAPUS PRODUK ===
    public function destroy($id)
    {
        $produk = Produk::findOrFail($id);

        // Hapus gambar fisik
        if ($produk->gambar && File::exists(public_path($produk->gambar))) {
            File::delete(public_path($produk->gambar));
        }

        $produk->delete();

        return back()->with('success', 'Produk berhasil dihapus!');
    }
}
