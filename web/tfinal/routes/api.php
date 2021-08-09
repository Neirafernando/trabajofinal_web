<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\registrocontroller;
use App\Http\Controllers\VehiculosController;
use App\Http\Controllers\RepuestosController;
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

Route::get("usuarios/get", [registrocontroller::class, "getusuarios"]);
Route::post("usuarios/post", [registrocontroller::class, "crearusuario"]);
Route::post("usuarios/delete", [registrocontroller::class, "eliminarusuario"]);

Route::get("tipoVehiculos/get", [VehiculosController::class, "getTipoVehiculo"]);
Route::get("vehiculos/get", [VehiculosController::class, "getVehiculos"]);
Route::post("vehiculos/post", [VehiculosController::class, "crearVehiculo"]);
Route::post("vehiculos/delete", [VehiculosController::class, "eliminarVehiculo"]);

Route::get("tipoRepuestos/get", [RepuestosController::class, "getTiporepuesto"]);
Route::get("repuestos/get", [RepuestosController::class, "getRepuestos"]);
Route::post("repuestos/post", [RepuestosController::class, "crearRepuesto"]);
Route::post("repuestos/delete", [RepuestosController::class, "eliminarRepuesto"]);


