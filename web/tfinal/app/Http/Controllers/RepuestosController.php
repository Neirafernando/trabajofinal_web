<?php

namespace App\Http\Controllers;
use App\Models\Repuesto;
use Illuminate\Http\Request;

class RepuestosController extends Controller
{
    public function getTiporepuesto(){
        $repuestos = ["Filtro de Aceite", "Filtro de Combustible", "Filtro de Aire", "Bujias", "Correa de Distribucion", "Kit Embrague", "Pastillas de Freno"];
        return $repuestos;
    }

    public function getRepuestos(){
        $repuestos = Repuesto::all();
        return $repuestos;
    }
    
    public function crearRepuesto(Request $request){
        $input = $request->all();
        $repuestos = new Repuesto();
        $repuestos->marca = $input["marca"];
        $repuestos->anio = $input["anio"];
        $repuestos->modelo = $input["modelo"];
        $repuestos->tipo = $input["tipo"];
        
        $repuestos->save();
        return $repuestos;
    }

    public function eliminarRepuesto(Request $request){
        $input = $request->all();
        $id = $input["id"];
        $repuesto = Repuesto::findOrFail($id);
        $repuesto->delete();
        return "ok";
    }
}
