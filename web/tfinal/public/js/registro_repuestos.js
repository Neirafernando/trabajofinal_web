const cargarTipoRepuesto = async()=>{
    let resultado = await axios.get("api/tipoRepuestos/get");
    let TipoVehiculos = resultado.data;
    let repuestosSelect = document.querySelector ("#tipo-select");
    TipoVehiculos.forEach(m=>{
        let option = document.createElement("option");
        option.innerText = m;
        repuestosSelect.appendChild(option);

    })
};
document.addEventListener("DOMContentLoaded", ()=>{
    cargarTipoRepuesto();
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
        let repuestos = await getRepuestos();
        let repuestoEncontrado = repuestos.find(c=>c.modelo.toLowerCase() === modelo.toLowerCase());
        if(repuestoEncontrado != undefined){
            errores.push("El Modelo del Repuesto ya existe");
        }
    }

    if(errores.length == 0){
        let repuestos = {};
        repuestos.marca = marca;
        repuestos.anio = anio;
        repuestos.modelo = modelo;
        repuestos.tipo = tipo;
        let res = await crearRepuesto(repuestos);
        await Swal.fire("repuestos  Registrado", "repuestos  registrado exitosamente", "info");
        window.location.href = "ver_repuesto";
    }else{
        Swal.fire({
            title: "Errores de validacion",
            icon: "warning",
            html: errores.join("<br />")
        });
    }
});