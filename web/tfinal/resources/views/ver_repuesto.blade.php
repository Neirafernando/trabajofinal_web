@extends('layouts.master')

@section('contenido')
    <div class="row mt-5">
        <div class="col-12 col-md-12 col-lg-6 mx-auto">
            <table class="table table-hover table-bordered table-striped table-responsive">
                <thead class="bg-secondary text-white">
                    <tr>
                        <td>Marca</td>
                        <td>Año</td>
                        <td>Modelo</td>
                        <td>Tipo de repuesto</td>
                        <td>Acciones</td>
                    </tr>
                </thead>
                <tbody id="tbody-repuestos" class="bg-white"></tbody>
            </table>
        </div>
    </div>
@endsection

@section('JS')
    <script src="{{asset('js/servicios/repuestosservice.js')}}"></script>
    <script src="{{asset('js/ver_repuesto.js')}}"></script>
@endsection