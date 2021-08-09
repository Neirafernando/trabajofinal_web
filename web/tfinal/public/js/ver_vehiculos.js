const iniciarEliminacion =  async function(){
    let id = this.idVehiculo;
    let resp = await Swal.fire({title:"Esta seguro?", text:"Esta operacion es irreversible", icon:"warning", showCancelButton:true});
    if(resp.isConfirmed){
        if(await eliminarVehiculo(id)){
            let vehiculos = await getVehiculos();
            cargarTabla(vehiculos);
            Swal.fire("Vehiculo Eliminado", "Vehiculo eliminado exitosamente", "info");
        }else{
            Swal.fire("Error", "no se pudo atender su solicitud", "error");
        }
    }else{

    }
};

const cargarTabla = (vehiculos)=>{
    let tbody = document.querySelector("#tbody-vehiculos");
    tbody.innerHTML = "";
    for(let i=0; i < vehiculos.length; ++i){
        let tr = document.createElement("tr");
        let tdMarca = document.createElement("td");
        tdMarca.innerText = vehiculos[i].marca;
        let tdAnio = document.createElement("td");
        tdAnio.innerText = vehiculos[i].anio;
        let tdModelo = document.createElement("td");
        tdModelo.innerText = vehiculos[i].modelo;
        let tdTipo = document.createElement("td");
        tdTipo.innerText = vehiculos[i].tipo;
        let tdAcciones = document.createElement("td");
        let botonEliminar = document.createElement("button");
        botonEliminar.innerText = "Eliminar Vehiculo";
        botonEliminar.classList.add("btn", "btn-danger");
        botonEliminar.idVehiculo = vehiculos[i].id;
        botonEliminar.addEventListener("click", iniciarEliminacion);
        tdAcciones.appendChild(botonEliminar);
        tr.appendChild(tdMarca);
        tr.appendChild(tdAnio);
        tr.appendChild(tdModelo);
        tr.appendChild(tdTipo);
        tr.appendChild(tdAcciones);
        tbody.appendChild(tr);
    }
};

document.addEventListener("DOMContentLoaded", async ()=>{
    let vehiculos = await getVehiculos();
    cargarTabla(vehiculos);
});