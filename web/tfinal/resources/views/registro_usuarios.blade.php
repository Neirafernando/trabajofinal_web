@extends('layouts.master')
@section('contenido')
<div class="row mt-5">
    <div class="col-12 col-md-6 col-lg-5 ">
        <div class="card">
            <div class="card-header text-white color-cardh" >
                <span>Ingreso de Usuarios</span>
            </div>
            <div class="card-body bg-secondary">
                <div class="mb-3">
                    <label for="nombre-txt" class="form-label">Nombre</label>
                    <input type="text" id="nombre-txt" class="form-control">
                </div>
                
                <div class="mb-3">
                    <label for="an-txt" class="form-label">Año</label>
                    <input type="number" class="form-control" id="an-txt">
                </div>
                <div class="mb-3">
                    <label for="ct-txt" class="form-label">Correo</label>
                    <input type="email" id="ct-txt" class="form-control">
                </div>
                <div class="mb-3">
                    <label for="usi-txt" class="from-label">Usuario Identificador</label>
                    <input type="text" id="usi-txt" class="form-control">
                </div>
            </div>
            <div class="card-footer d-grid gap-1 bg-secondary">
                <button id="registrar-btn" class="btn btn-secondary text-white colo-btn">Registrar</button>
            </div>
        </div>
    </div>
</div>





@endsection

@section('JS')
    <script src="{{asset('js/registro_usuarios.js')}}"></script>
    <script src="{{asset('js/servicios/usuariosservice.js')}}"></script>
@endsection