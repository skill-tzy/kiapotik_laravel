<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Produk; 

class InventoriController extends Controller
{
    public function index()
    {
        $produk = Produk::all();
        return view('inventori', compact('produk'));
    }
    public function store(Request $request)
    {
    $validated = $request->validate([
        'nama' => 'required|string',
        'harga' => 'required|numeric',
        'stok' => 'required|numeric',
        'gambar' => 'required|image|mimes:jpg,jpeg,png|max:2048',
    ]);

    $path = $request->file('gambar')->store('produk', 'public');

    Produk::create([
        'nama' => $validated['nama'],
        'harga' => $validated['harga'],
        'stok' => $validated['stok'],
        'gambar' => basename($path),
    ]);

    return back()->with('success', 'Produk berhasil ditambahkan!');
    }

    public function update(Request $request, $id)
    {
        $produk = Produk::findOrFail($id);
        $validated = $request->validate([
            'nama' => 'required|string',
            'harga' => 'required|numeric',
            'stok' => 'required|numeric',
            'gambar' => 'nullable|image|mimes:jpg,jpeg,png|max:2048',
        ]);

        if ($request->hasFile('gambar')) {
            $path = $request->file('gambar')->store('produk', 'public');
            $validated['gambar'] = basename($path);
        }

        $produk->update($validated);

        return back()->with('success', 'Produk berhasil diperbarui!');
    }

    public function destroy($id)
    {
        $produk = Produk::findOrFail($id);
        $produk->delete();

        return back()->with('success', 'Produk berhasil dihapus!');
    }
}
