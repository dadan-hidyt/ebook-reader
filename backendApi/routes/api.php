<?php

use App\Http\Controllers\ApiController;
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
Route::post('login',[ApiController::class,'authtenticate']);
Route::group(['middleware' => 'jwt.verify'], function () {
    Route::get('book', function () {
        return 24;
    });
    Route::get('myprofile', [ApiController::class,'user_data']);
});