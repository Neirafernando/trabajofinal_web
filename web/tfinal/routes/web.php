<?php

use Illuminate\Support\Facades\Route;





Route::view("/", "registro_usuarios")->name("registro_usuarios");
Route::view("/ver_usuarios", "ver_usuarios")->name("ver_usuarios");
Route::view("/registro_vehiculo", "registro_vehiculo")->name("registro_vehiculo");
Route::view("/ver_vehiculos", "ver_vehiculos")->name("ver_vehiculos");
Route::view("/registro_repuesto","registro_repuesto")->name("registro_repuesto");
Route::view("/ver_repuesto","ver_repuesto")->name("ver_repuesto");