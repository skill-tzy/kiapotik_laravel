<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\OrderItem;

class Produk extends Model
{
    protected $table = 'produk';

    protected $fillable = [
        'nama',
        'harga',
        'stok',
        'gambar',
        'user_id'
    ];

    public function user()
    {
        return $this->belongsTo(\App\Models\User::class);
    }

    public function orderItems()
    {
        return $this->hasMany(OrderItem::class);
    }
}
