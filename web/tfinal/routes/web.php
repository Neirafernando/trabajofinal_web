<?php

use Illuminate\Support\Facades\Route;





Route::view("/", "registro_usuarios")->name("registro_usuarios");
Route::view("/ver_usuarios", "ver_usuarios")->name("ver_usuarios");
