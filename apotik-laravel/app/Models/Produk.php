<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Produk extends Model
{
    protected $table = 'produk';
    protected $fillable = ['id', 'nama', 'harga', 'gambar', 'stok']; 
    public $timestamps = false;
}
