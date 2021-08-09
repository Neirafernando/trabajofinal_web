<?php

namespace App\Http\Controllers;
use App\Models\Vehiculo;
use Illuminate\Http\Request;

class VehiculosController extends Controller
{
    public function getTipoVehiculo(){
        $vehiculos = ["Auto", "Camioneta", "4x4", "Bus", "Camion", "Moto", "Otro"];
        return $vehiculos;
    }

    public function getVehiculos(){
        $vehiculos = Vehiculo::all();
        return $vehiculos;
    }

    public function crearVehiculo(Request $request){
        $input = $request->all();
        $vehiculo = new Vehiculo();
        $vehiculo->marca = $input["marca"];
        $vehiculo->anio = $input["anio"];
        $vehiculo->modelo = $input["modelo"];
        $vehiculo->tipo = $input["tipo"];

        $vehiculo->save();
        return $vehiculo;
    }

    public function eliminarVehiculo(Request $request){
        $input = $request->all();
        $id = $input["id"];
        $vehiculo = Vehiculo::findOrFail($id);
        $vehiculo->delete();
        return "ok";
    }
}
