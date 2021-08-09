const cargarTipoVehiculo = async()=>{
    let resultado = await axios.get("api/tipoVehiculos/get");
    let TipoVehiculos = resultado.data;
    let vehiculoSelect = document.querySelector("#tipo-select");
    TipoVehiculos.forEach(m=>{
        let option = document.createElement("option");
        option.innerText = m;
        vehiculoSelect.appendChild(option);
    });
};

document.addEventListener("DOMContentLoaded", ()=>{
    cargarTipoVehiculo();
});

document.querySelector("#registrar-btn").addEventListener("click", async ()=>{
    let marca = document.querySelector("#marca-txt").value;
    let anio = document.querySelector("#anio-txt").value;
    let modelo = document.querySelector("#modelo-txt").value;
    let tipo = document.querySelector("#tipo-select").value;
    let errores = [];

    if(marca === ""){
        errores.push("Debe ingresar una marca");
    }

    if(anio === ""){
        errores.push("Debe ingresar un año");
    }

    if(isNaN(anio)){
        errores.push("El año debe ser numerico");
    }else if( +anio < 1886){
        errores.push("El año es incorrecto")
    }

    if(modelo === ""){
        errores.push("Debe ingresar un modelo");
    }else{
        let vehiculos = await getVehiculos();
        let vehiculoEncontrado = vehiculos.find(c=>c.modelo.toLowerCase() === modelo.toLowerCase());
        if(vehiculoEncontrado != undefined){
            errores.push("El modelo ya existe");
        }
    }

    if(errores.length == 0){
        let vehiculo = {};
        vehiculo.marca = marca;
        vehiculo.anio = anio;
        vehiculo.modelo = modelo;
        vehiculo.tipo = tipo;
        let res = await crearVehiculo(vehiculo);
        await Swal.fire("Vehiculo Registrado", "Vehiculo registrado exitosamente", "info");
        window.location.href = "ver_vehiculos";
    }else{
        Swal.fire({
            title: "Errores de validacion",
            icon: "warning",
            html: errores.join("<br />")
        });
    }
});