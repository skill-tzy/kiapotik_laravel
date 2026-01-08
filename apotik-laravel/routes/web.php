<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\KatalogController;
use App\Http\Controllers\InventoriController;

Route::get('/', function () {
    return view('api-info');
});
Route::get('/tentang', function () {
    return view('tentang');
});
Route::get('/kontak', function () {
    return view('kontak');
});

Route::get('/unauthorized', function () {
    return view('unauthorized');
})->name('unauthorized');

Route::get('/katalog', [KatalogController::class, 'index'])->name('katalog');

// Route::middleware(['auth'])->group(function () {
Route::get('/inventori', [InventoriController::class, 'index'])->name('inventori.index');
Route::post('/inventori', [InventoriController::class, 'store'])->name('inventori.store');
Route::put('/inventori/{id}', [InventoriController::class, 'update'])->name('inventori.update');
Route::delete('/inventori/{id}', [InventoriController::class, 'destroy'])->name('inventori.destroy');
// });