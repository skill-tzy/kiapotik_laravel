<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Produk; // nanti kita pakai untuk CRUD

class InventoriController extends Controller
{
    public function index()
    {
        // sementara hanya return view
        return view('inventori');
    }
}
