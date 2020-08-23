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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::middleware('auth:sanctum')->get('/authenticate', function (Request $request) {
    return true;
});

// Route::get('/','AppController@index');
Route::get('/logout','LoginController@logout')->middleware('auth:sanctum');
Route::post('/login','LoginController@login');

// Route::get('/dashboard', function () {
//     return view('dashboard');
// });

