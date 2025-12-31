<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
public function up(): void
{
    Schema::create('orders', function (Blueprint $table) {
        $table->id();
        $table->foreignId('user_id')
              ->constrained('users')
              ->onDelete('cascade');

        $table->decimal('total_harga', 15, 2)->default(0);

        $table->enum('status', [
            'Belum Bayar',
            'Dikemas',
            'Dikirim',
            'Selesai',
            'Batal'
        ])->default('Belum Bayar');

        $table->timestamps();
    });
}

};
