<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\Order;
use App\Models\Produk;

class OrderController extends Controller
{
    public function updateStatus(Request $request, $id)
    {
        $request->validate([
            'status' => 'required|in:Belum Bayar,Dikemas,Dikirim,Selesai,Batal',
        ]);

        $order = Order::with('items')->findOrFail($id);

        // Cegah double Dikemas
        if ($order->status === 'Dikemas' && $request->status === 'Dikemas') {
            return response()->json([
                'message' => 'Order sudah dikemas sebelumnya'
            ], 400);
        }

        try {
            DB::transaction(function () use ($order, $request) {

                if ($request->status === 'Dikemas' && $order->status === 'Belum Bayar') {
                    foreach ($order->items as $item) {
                        $produk = Produk::lockForUpdate()->findOrFail($item->produk_id);

                        if ($produk->stok < $item->qty) {
                            throw new \Exception("Stok {$produk->nama} tidak mencukupi");
                        }

                        $produk->decrement('stok', $item->qty);
                    }
                }

                if ($request->status === 'Batal' && $order->status === 'Dikemas') {
                    foreach ($order->items as $item) {
                        $produk = Produk::lockForUpdate()->findOrFail($item->produk_id);
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
