<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Order;

class OrderController extends Controller
{
    // Tampilkan semua order beserta item & produk
    public function index()
    {
        try {
            $orders = Order::with('items.produk', 'user')->get(); 
            return response()->json($orders);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Gagal fetch order: ' . $e->getMessage()
            ], 500);
        }
    }

    // Update status order
    public function updateStatus(Request $request, $id)
    {
        $request->validate([
            'status' => 'required|in:Belum Bayar,Dikemas,Dikirim,Selesai,Batal',
        ]);

        $order = Order::with('items')->findOrFail($id);

        if ($order->status === 'Dikemas' && $request->status === 'Dikemas') {
            return response()->json([
                'message' => 'Order sudah dikemas sebelumnya'
            ], 400);
        }

        try {
            \DB::transaction(function () use ($order, $request) {
                if ($request->status === 'Dikemas' && $order->status === 'Belum Bayar') {
                    foreach ($order->items as $item) {
                        $produk = \App\Models\Produk::lockForUpdate()->findOrFail($item->produk_id);

                        if ($produk->stok < $item->qty) {
                            throw new \Exception("Stok {$produk->nama} tidak mencukupi");
                        }

                        $produk->decrement('stok', $item->qty);
                    }
                }

                if ($request->status === 'Batal' && $order->status === 'Dikemas') {
                    foreach ($order->items as $item) {
                        $produk = \App\Models\Produk::lockForUpdate()->findOrFail($item->produk_id);
                        $produk->increment('stok', $item->qty);
                    }
                }

                $order->update([
                    'status' => $request->status
                ]);
            });

            return response()->json([
                'message' => 'Status order berhasil diperbarui',
                'order_id' => $order->id,
                'status' => $request->status
            ]);

        } catch (\Exception $e) {
            return response()->json([
                'message' => $e->getMessage()
            ], 400);
        }
    }
}
