<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/home', function () {
    return view('home');
});

Route::group(['prefix' => '/category'], function () {
    Route::GET('', 'App\Http\Controllers\CategoryController@get');
    Route::GET('/{category}',  'App\Http\Controllers\CategoryController@productsInCategory');
});
