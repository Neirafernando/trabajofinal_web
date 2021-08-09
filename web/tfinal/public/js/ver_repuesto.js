const iniciarEliminacion = async function(){
    let id = this.idRepuesto;
    let resp = await Swal.fire({title:"Esta seguro?", text:"Esta operacion es irreversible", icon:"warning", showCancelButton:true});
    if(resp.isConfirmed){
        if(await eliminarRepuesto(id)){
            let repuestos = await getRepuestos();
            cargarTabla(repuestos);
            Swal.fire("Repuesto Eliminado", "Repuesto eliminado exitosamente", "info");
        }else{
            Swal.fire("Error", "no se pudo atender su solicitud", "error");
        }
    }else{

    }
};
const cargarTabla = (repuestos)=>{
    let tbody = document.querySelector("#tbody-repuestos");
    for(let i=0; i < repuestos.length; ++i){
        let tr = document.createElement("tr");
        let tdMarca = document.createElement("td");
        tdMarca.innerText = repuestos[i].marca;
        let tdAnio = document.createElement("td");
        tdAnio.innerText = repuestos[i].anio;
        let tdModelo = document.createElement("td");
        tdModelo.innerText = repuestos[i].modelo;
        let tdTipo = document.createElement("td");
        tdTipo.innerText = repuestos[i].tipo;
        let tdAcciones = document.createElement("td");
        let botonEliminar = document.createElement("button");
        botonEliminar.innerText = "Eliminar repuesto";
        botonEliminar.classList.add("btn", "btn-danger");
        botonEliminar.addEventListener("click", iniciarEliminacion);
        botonEliminar.idVehiculo = repuestos[i].id;
        tdAcciones.appendChild(botonEliminar);
        tr.appendChild(tdMarca);
        tr.appendChild(tdAnio);
        tr.appendChild(tdModelo);
        tr.appendChild(tdTipo);
        tr.appendChild(tdAcciones);
        tbody.appendChild(tr);
    }
}

document.addEventListener("DOMContentLoaded", async ()=>{
let repuestos = await getRepuestos();
cargarTabla(repuestos);
});