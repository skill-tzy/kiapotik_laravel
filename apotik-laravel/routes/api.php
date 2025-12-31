<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\KatalogController;
use App\Http\Controllers\InventoriController;
use App\Http\Controllers\Api\CheckoutController;
use App\Http\Controllers\Api\Admin\OrderController;
use App\Models\User;

/*
|--------------------------------------------------------------------------
| Health Check
|--------------------------------------------------------------------------
*/
Route::get('/health', fn () => response()->json(['status' => 'ok']));
Route::get('/katalog', [KatalogController::class, 'publicIndex']);

/*
|--------------------------------------------------------------------------
| AUTH - PUBLIC
|--------------------------------------------------------------------------
*/
Route::prefix('auth')->group(function () {
    Route::post('/register', [AuthController::class, 'register']);
    Route::post('/login',    [AuthController::class, 'login']);
});

/*
|--------------------------------------------------------------------------
| AUTHENTICATED USER (SANCTUM)
|--------------------------------------------------------------------------
*/
Route::middleware('auth:sanctum')->group(function () {

    // ===== AUTH =====
    Route::get('/auth/me', [AuthController::class, 'me']);
    Route::post('/auth/logout', [AuthController::class, 'logout']);

    // ===== INVENTORI =====
    Route::get('/inventori',        [InventoriController::class, 'apiIndex']);
    Route::post('/inventori',       [InventoriController::class, 'storeApi']);
    Route::put('/inventori/{id}',   [InventoriController::class, 'updateApi']);
    Route::delete('/inventori/{id}',[InventoriController::class, 'destroyApi']);

    // ===== USER ORDER =====
    Route::post('/checkout', [CheckoutController::class, 'checkout']);
    Route::get('/orders',    [CheckoutController::class, 'index']);

    /*
    |--------------------------------------------------------------------------
    | ADMIN ONLY
    |--------------------------------------------------------------------------
    */
    Route::middleware('role:admin')->prefix('admin')->group(function () {

        // List semua user
        Route::get('/users', function () {
            return User::select('id','name','email','role','created_at')->get();
        });

        // Admin inventori
        Route::get('/inventori', [InventoriController::class, 'apiIndex']);

        // ===== ADMIN ORDER =====
        Route::get('/orders', [OrderController::class, 'index']);
        Route::get('/orders/{id}', [OrderController::class, 'show']);
        Route::put('/orders/{id}/status', [OrderController::class, 'updateStatus']);
    });
});
