<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('index');
});

Route::get('/tentang', function () {
    return view('tentang');
});

Route::get('/katalog', function () {
    return view('katalog');
});

Route::get('/kontak', function () {
    return view('kontak');
});