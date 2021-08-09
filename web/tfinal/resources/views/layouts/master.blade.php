<!doctype html>
<html lang="es">
  <head>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{csrf_token()}}">

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
    <link rel="stylesheet" href="{{ asset('stylecss/style.css')}}">

    <title>Gestion de inventario</title>
  </head>
  <body >
    
    <header>
        <nav class="navbar navbar-expand-lg navbar-light  " id="navbar">
            <div class="container-fluid">
                <a class="navbar-brand" href="{{route('registro_usuarios')}}">
                    <img src="{{ asset('img/logo.png')}}" class="foto">
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <a class="nav-link text-white" href="{{route('registro_usuarios')}}">registro usuarios</a>
          		        <a class="nav-link text-white" href="{{route('ver_usuarios')}}">usuarios</a>
                        <a class="nav-link text-white" href="{{route('registro_vehiculo')}}">registro vehiculos</a>
                        <a class="nav-link text-white" href="{{route('ver_vehiculos')}}">vehiculos</a>
                        <a class="nav-link text-white" href="{{route('registro_repuesto')}}">registro repuestos</a>
                        <a class="nav-link text-white" href="{{route('ver_repuesto')}}">repuestos</a>
                    </div>
                </div>
            </div>
        </nav>
    </header>

    <main class="container-fluid">
        @yield("contenido")  
    </main>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
    <script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    <script src="{{asset('js/axios_config.js')}}"></script>
    @yield('JS')
  </body>
</html>