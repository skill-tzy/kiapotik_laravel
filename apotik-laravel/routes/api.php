<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\KatalogController;
use App\Http\Controllers\InventoriController;
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

    // ===== INVENTORI (SEMUA USER LOGIN) =====
    Route::get('/inventori',        [InventoriController::class, 'apiIndex']);
    Route::post('/inventori',       [InventoriController::class, 'storeApi']);
    Route::put('/inventori/{id}',   [InventoriController::class, 'updateApi']);
    Route::delete('/inventori/{id}',[InventoriController::class, 'destroyApi']);

    /*
    |--------------------------------------------------------------------------
    | ADMIN ONLY
    |--------------------------------------------------------------------------
    */
    Route::middleware('role:admin')->group(function () {

        // List semua user
        Route::get('/admin/users', function () {
            return User::select('id','name','email','role','created_at')->get();
        });

        // (Opsional) inventori full akses admin
        Route::get('/admin/inventori', [InventoriController::class, 'apiIndex']);
    });
});
