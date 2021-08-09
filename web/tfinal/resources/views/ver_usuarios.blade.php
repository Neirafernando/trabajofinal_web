@extends('layouts.master')
@section('contenido')
<div class="row mt-2">
    <div class="col-12 col-md-6 col-lg-5 mx-auto">
        <div class="card">
            <div class="card-header bg-secondary text-white">
                <span>Filtrar</span>
            </div>
            <div class="card-body">
                <input id="buscar" type="text" class="form-control border-dark" placeholder="Ingrese su busqueda" />
            </div>
        </div>
    </div>
</div>
<div class="row mt-5">
    <div class="col-12 col-md-12 col-lg-6 mx-auto">
        <table id="tabla" class="table table-hover table-bordered table-striped table-responsive">
            <thead class="bg-secondary text-white">
                <tr>
                    <td>Nombre </td>
                    <td>Año</td>
                    <td>Correo </td>
                    <td>Identificador</td>
                    <td>Acciones</td>
                </tr>
            </thead>
            <tbody id="tbody-usuarios" class="bg-white">

            </tbody>
        </table>
    </div>
</div>   
@endsection

@section('JS')
    <script src="{{asset('js/servicios/usuariosservice.js')}}"></script>
    <script src="{{asset('js/ver_usuarios.js')}}"></script>
@endsection