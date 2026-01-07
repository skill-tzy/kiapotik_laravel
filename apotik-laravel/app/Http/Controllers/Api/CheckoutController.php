<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\Order;
use App\Models\OrderItem;
use App\Models\Produk;

class CheckoutController extends Controller
{
    public function checkout(Request $request)
    {
        $request->validate([
            'items' => 'required|array|min:1',
            'items.*.produk_id' => 'required|exists:produk,id',
            'items.*.qty' => 'required|integer|min:1',
        ]);

        $user = $request->user();

        try {
            $order = DB::transaction(function () use ($request, $user) {

                $order = Order::create([
                    'user_id' => $user->id,
                    'total_harga' => 0,
                    'status' => 'Menunggu Pembayaran',
                ]);

                $totalHarga = 0;

                foreach ($request->items as $item) {
                    $produk = Produk::lockForUpdate()->findOrFail($item['produk_id']);

                    if ($produk->stok < $item['qty']) {
                        throw new \Exception("Stok {$produk->nama} tidak mencukupi");
                    }

                    $subtotal = $produk->harga * $item['qty'];

                    OrderItem::create([
                        'order_id' => $order->id,
                        'produk_id' => $produk->id,
                        'qty' => $item['qty'],
                        'harga' => $produk->harga,
                        'subtotal' => $subtotal,
                    ]);

                    $totalHarga += $subtotal;
                }

                $order->update([
                    'total_harga' => $totalHarga
                ]);

                return $order;
            });

            return response()->json([
                'message' => 'Checkout berhasil',
                'order_id' => $order->id,
                'status' => $order->status,
                'total_harga' => $order->total_harga
            ], 201);

        } catch (\Exception $e) {
            return response()->json([
                'message' => $e->getMessage()
            ], 400);
        }
    }
    public function index(Request $request)
    {
        $user = $request->user();

        $orders = Order::with('items.produk')
            ->where('user_id', $user->id)
            ->orderBy('created_at', 'desc')
            ->get();

        return response()->json($orders);
    }
    public function cancel($id, Request $request)
    {
        $user = $request->user();

        $order = Order::where('id', $id)
            ->where('user_id', $user->id)
            ->firstOrFail();

        if ($order->status !== 'Menunggu Pembayaran') {
            return response()->json([
                'message' => 'Order tidak dapat dibatalkan'
            ], 400);
        }

        $order->update([
            'status' => 'Batal'
        ]);

        return response()->json([
            'message' => 'Order berhasil dibatalkan',
            'order_id' => $order->id,
            'status' => 'Batal'
        ]);
    }
}
