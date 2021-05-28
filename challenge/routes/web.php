<?php

use Illuminate\Support\Facades\Route;


Route::get('/', function () {
    return view('layout');
});

Route::get('/home{any}', function () {
    return view('home');
})->where('any', '.*');

