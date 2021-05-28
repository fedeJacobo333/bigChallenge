<?php

use Illuminate\Support\Facades\Route;


Route::get('/', function () {
    return view('layout');
});

Route::get('/home{any}', function () {
    return view('home');
})->where('any', '.*');

Route::group(['prefix' => '/api/category'], function () {
    Route::GET('', 'App\Http\Controllers\CategoryController@get');
    Route::GET('/{category}/products',  'App\Http\Controllers\CategoryController@productsInCategory');
});

Route::group(['prefix' => '/api/cart'], function () {
    Route::POST('', 'App\Http\Controllers\CartController@store');
});
