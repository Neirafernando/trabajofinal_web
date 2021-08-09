<?php

namespace App\Http\Controllers;
use App\Models\Usuario;
use Illuminate\Http\Request;

class registrocontroller extends Controller
{
    public function getusuarios(Request $request){
        $input =$request->all();
        $usuarios = Usuario::all();
        return $usuarios;
    }

    public function crearusuario(Request $request){
        $input = $request->all();
        $usuario = new Usuario();
        $usuario->nombre = $input["nombre"];
        $usuario->anio = $input["anio"];
        $usuario->correo = $input["correo"];
        $usuario->usuarioid = $input["usuarioid"];

        $usuario->save();
        return $usuario;
    }

    public function eliminarusuario(Request $request){
        $input = $request->all();
        $id = $input["id"];
        $usuario = Usuario::findOrFail($id);
        $usuario->delete();
        return "ok";
    }
}

