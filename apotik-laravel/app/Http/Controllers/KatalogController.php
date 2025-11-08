<?php

namespace App\Http\Controllers;

use App\Models\Produk;
use Illuminate\Http\Request;

class KatalogController extends Controller
{
    public function index()
    {
        $produk = Produk::all();
        return view('katalog', compact('produk'));
    }
}
