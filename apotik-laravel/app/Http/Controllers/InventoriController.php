<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Produk;
use Illuminate\Support\Facades\File;

class InventoriController extends Controller
{
    // ================= Web =================
    public function index()
    {
        $produk = Produk::all();
        return view('inventori', compact('produk'));
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'nama'   => 'required|string',
            'harga'  => 'required|numeric',
            'stok'   => 'required|numeric',
            'gambar' => 'required|image|mimes:jpg,jpeg,png|max:2048',
        ]);

        $file = $request->file('gambar');
        $filename = time() . '_' . $file->getClientOriginalName();
        $file->move(public_path('produk'), $filename);

        Produk::create([
            'nama'    => $validated['nama'],
            'harga'   => $validated['harga'],
            'stok'    => $validated['stok'],
            'gambar'  => 'produk/' . $filename,
            'user_id' => auth()->id()
        ]);

        return back()->with('success', 'Produk berhasil ditambahkan!');
    }

    public function update(Request $request, $id)
    {
        $produk = Produk::findOrFail($id);

        if (
            $produk->user_id !== auth()->id() &&
            auth()->user()->role !== 'admin'
        ) {
            abort(403, 'Forbidden');
        }

        $validated = $request->validate([
            'nama'   => 'required|string',
            'harga'  => 'required|numeric',
            'stok'   => 'required|numeric',
            'gambar' => 'nullable|image|mimes:jpg,jpeg,png|max:2048',
        ]);

        if ($request->hasFile('gambar')) {
            if ($produk->gambar && File::exists(public_path($produk->gambar))) {
                File::delete(public_path($produk->gambar));
            }

            $file = $request->file('gambar');
            $filename = time() . '_' . $file->getClientOriginalName();
            $validated['gambar'] = 'produk/' . $filename;
            $file->move(public_path('produk'), $filename);
        } else {
            $validated['gambar'] = $produk->gambar;
        }

        $produk->update($validated);

        return back()->with('success', 'Produk berhasil diperbarui!');
    }

    public function destroy($id)
    {
        $produk = Produk::findOrFail($id);

        if (
            $produk->user_id !== auth()->id() &&
            auth()->user()->role !== 'admin'
        ) {
            abort(403, 'Forbidden');
        }

        if ($produk->gambar && File::exists(public_path($produk->gambar))) {
            File::delete(public_path($produk->gambar));
        }

        $produk->delete();

        return back()->with('success', 'Produk berhasil dihapus!');
    }

    // ================= API =================
    public function apiIndex()
    {
        return response()->json([
            'status' => 'success',
            'data'   => Produk::all()
        ]);
    }

    public function storeApi(Request $request)
    {
        $validated = $request->validate([
            'nama'   => 'required|string',
            'harga'  => 'required|numeric',
            'stok'   => 'required|numeric',
            'gambar' => 'required|image|mimes:jpg,jpeg,png|max:2048',
        ]);

        $file = $request->file('gambar');
        $filename = time() . '_' . $file->getClientOriginalName();
        $file->move(public_path('produk'), $filename);

        $produk = Produk::create([
            'nama'    => $validated['nama'],
            'harga'   => $validated['harga'],
            'stok'    => $validated['stok'],
            'gambar'  => 'produk/' . $filename,
            'user_id' => auth()->id() // 🔑 WAJIB
        ]);

        return response()->json([
            'status'  => 'success',
            'message' => 'Produk berhasil ditambahkan!',
            'data'    => $produk
        ]);
    }

    public function updateApi(Request $request, $id)
    {
        $produk = Produk::findOrFail($id);

        if (
            $produk->user_id !== auth()->id() &&
            auth()->user()->role !== 'admin'
        ) {
            return response()->json([
                'message' => 'Forbidden'
            ], 403);
        }

        $validated = $request->validate([
            'nama'   => 'required|string',
            'harga'  => 'required|numeric',
            'stok'   => 'required|numeric',
            'gambar' => 'nullable|image|mimes:jpg,jpeg,png|max:2048',
        ]);

        if ($request->hasFile('gambar')) {
            if ($produk->gambar && File::exists(public_path($produk->gambar))) {
                File::delete(public_path($produk->gambar));
            }

            $file = $request->file('gambar');
            $filename = time() . '_' . $file->getClientOriginalName();
            $validated['gambar'] = 'produk/' . $filename;
            $file->move(public_path('produk'), $filename);
        } else {
            $validated['gambar'] = $produk->gambar;
        }

        $produk->update($validated);

        return response()->json([
            'status'  => 'success',
            'message' => 'Produk berhasil diperbarui!',
            'data'    => $produk
        ]);
    }

    public function destroyApi($id)
    {
        $produk = Produk::findOrFail($id);

        if (
            $produk->user_id !== auth()->id() &&
            auth()->user()->role !== 'admin'
        ) {
            return response()->json([
                'message' => 'Forbidden'
            ], 403);
        }

        if ($produk->gambar && File::exists(public_path($produk->gambar))) {
            File::delete(public_path($produk->gambar));
        }

        $produk->delete();

        return response()->json([
            'status'  => 'success',
            'message' => 'Produk berhasil dihapus!'
        ]);
    }
}
