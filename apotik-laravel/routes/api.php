<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\InventoriController;

// Health check
Route::get('/health', fn() => response()->json(['status' => 'ok']));

// ========== AUTH (PUBLIC) ==========
Route::prefix('auth')->group(function () {
    Route::post('/register', [AuthController::class, 'register']);
    Route::post('/login', [AuthController::class, 'login']);
});

// ========== INVENTORI (PROTECTED) ==========
// Semua route di bawah ini hanya bisa diakses setelah login (token Sanctum valid)
Route::middleware('auth:sanctum')->group(function () {
    Route::get('/inventori', [InventoriController::class, 'apiIndex']);
    Route::post('/inventori', [InventoriController::class, 'storeApi']);
    Route::put('/inventori/{id}', [InventoriController::class, 'updateApi']);
    Route::delete('/inventori/{id}', [InventoriController::class, 'destroyApi']);

    // Logout endpoint
    Route::get('/auth/me', [AuthController::class, 'me']);
    Route::post('/auth/logout', [AuthController::class, 'logout']);
});
