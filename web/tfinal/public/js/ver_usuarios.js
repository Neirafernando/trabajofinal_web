const iniciarEliminacion = async function(){
    let id = this.idUsuario;
    let resp = await Swal.fire({title:"¿Esta seguro de eliminar este usuario?", text:"esta opcion es irreversible!!", icon:"warning", showCancelButton:true});
    if(resp.isConfirmed){
        if(await eliminarUsuario(id)){
            let usuarios = await getusuarios();
            cargarTabla(usuarios);
            Swal.fire("usuario eliminado", "eliminado exitosamente!!", "info");
        }else{
            Swal.fire("la accion no se pudo realizar", "operacion cancelada ", "error");
        }
    }else{
        Swal.fire("Cancelado", "Cancelado a peticion del usuario", "info");
    }
};

const cargarTabla = (usuarios)=>{
    let tbody = document.querySelector("#tbody-usuarios");
    tbody.innerHTML = "";
    for(let i=0; i < usuarios.length; ++i){
        let tr = document.createElement("tr");
        let tdNombre = document.createElement("td");
        tdNombre.innerText = usuarios[i].nombre;
        let tdAnio = document.createElement("td");
        tdAnio.innerText = usuarios[i].anio;
        let tdCorreo = document.createElement("td");
        tdCorreo.innerText = usuarios[i].correo;
        let tdUsuarioId = document.createElement("td");
        tdUsuarioId.innerText = usuarios[i].usuarioid;
        let tdAcciones = document.createElement("td");
        let botonEliminar = document.createElement("button");
        botonEliminar.innerText = "Eliminar Usuario";
        botonEliminar.classList.add("btn", "btn-danger");
        botonEliminar.idUsuario = usuarios[i].id;
        botonEliminar.addEventListener("click", iniciarEliminacion);
        tdAcciones.appendChild(botonEliminar);
        tr.appendChild(tdNombre);
        tr.appendChild(tdAnio);
        tr.appendChild(tdCorreo);
        tr.appendChild(tdUsuarioId);
        tr.appendChild(tdAcciones);
        tbody.appendChild(tr);
    }
}


document.addEventListener("DOMContentLoaded", async ()=>{
    let usuarios = await getusuarios();
    cargarTabla(usuarios);
});