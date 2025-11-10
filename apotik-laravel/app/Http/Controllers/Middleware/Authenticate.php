<?php

namespace App\Http\Middleware;

use Illuminate\Auth\Middleware\Authenticate as Middleware;

class Authenticate extends Middleware
{
    protected function redirectTo($request): ?string
    {
        // Jika request dari API, kembalikan null (biar tidak redirect)
        if ($request->expectsJson()) {
            return null;
        }

        // Kalau dari web (bukan JSON), arahkan ke halaman khusus "belum login"
        return route('unauthorized');
    }
}
