@extends('layouts.master')

@section('contenido')
    <div class="row mt-5">
        <div class="col-12 col-md-6 col-lg-5 mx-auto">
            <div class="card">
                <div class="card-header text-white color-cardh">
                    <span>Ingreso de Vehiculos</span>
                </div>
                <div class="card-body bg-secondary">
                    <div class="mb-3">
                        <label for="marca-txt" class="form-label">Marca del Vehiculo</label>
                        <input type="text" id="marca-txt" class="form-control">
                    </div>
                    <div class="mb-3">
                        <label for="anio-txt" class="form-label">Año del Vehiculo</label>
                        <input type="number" id="anio-txt" class="form-control">
                    </div>
                    <div class="mb-3">
                        <label for="modelo-txt" class="form-label">Modelo del Vehiculo</label>
                        <input type="text" id="modelo-txt" class="form-control">
                    </div>
                    <div class="mb-3">
                        <label for="tipo-select" class="form-label">Tipo de Vehiculo</label>
                        <select class="form-select" id="tipo-select">

                        </select>
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
    <script src="{{asset('js/servicios/vehiculosService.js')}}"></script>
    <script src="{{asset('js/registro_vehiculos.js')}}"></script>
@endsection