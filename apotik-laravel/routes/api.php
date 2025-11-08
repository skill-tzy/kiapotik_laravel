<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\InventoriController;

Route::get('/inventori', [InventoriController::class, 'apiIndex']);
Route::post('/inventori', [InventoriController::class, 'storeApi']);
Route::put('/inventori/{id}', [InventoriController::class, 'updateApi']);
Route::delete('/inventori/{id}', [InventoriController::class, 'destroyApi']);
