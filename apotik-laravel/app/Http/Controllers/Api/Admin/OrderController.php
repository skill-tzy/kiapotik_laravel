<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Order;
use App\Models\Produk;
use Illuminate\Support\Facades\DB;

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
            'status' => 'required|in:Menunggu Pembayaran,Dikemas,Dikirim,Selesai,Batal',
        ]);

        $order = Order::with('items.produk')->findOrFail($id);

        // Cegah update ke Dikemas kalau sudah Dikemas
        if ($order->status === 'Dikemas' && $request->status === 'Dikemas') {
            return response()->json([
                'message' => 'Order sudah dikemas sebelumnya'
            ], 400);
        }

        try {
            DB::transaction(function () use ($order, $request) {

                // Kembalikan stok saat batal
                if ($request->status === 'Batal' && in_array($order->status, ['Menunggu Pembayaran', 'Dikemas'])) {
                    foreach ($order->items as $item) {
                        $produk = Produk::lockForUpdate()->findOrFail($item->produk_id);
                        $produk->increment('stok', $item->qty);
                    }
                }

                // Update status
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
