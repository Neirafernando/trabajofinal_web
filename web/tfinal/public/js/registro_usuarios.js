document.querySelector("#registrar-btn").addEventListener("click", async ()=>{
    let nombre = document.querySelector("#nombre-txt").value.trim();
    let anio = document.querySelector("#an-txt").value.trim();
    let correo = document.querySelector("#ct-txt").value.trim();
    let unombre = document.querySelector("#usi-txt").value.trim();

    let errores = [];

    if(nombre === ""){
        errores.push("campo obligatorio");
    }

    if(anio === ""){
        errores.push("ingrese un año");
    }
    
    if(isNaN(anio)){
        errores.push("ingrese una edad valida");
    }else if( +anio < 0){
        errores.push("año incorrecto");
    }

    if(correo === ""){
        errores.push("ingrese un correo");
    }else{
        let usuarios = await getusuarios();
        let usuarioEncontrado = usuarios.find(c=>c.correo.toLowerCase() === correo.toLowerCase());
        if(usuarioEncontrado != undefined){
            errores.push("correo ya existente");
        }
    }

    if(unombre === ""){
        errores.push("ingrese un usuario");
    }

    if(errores.length == 0){
        let usuario = {};
        usuario.nombre = nombre;
        usuario.anio = anio;
        usuario.correo = correo;
        usuario.usuarioid = unombre;
        let resp = await crearusuario(usuario);
        Swal.fire("Usuario creado", "Usuario creado correctamente", "info");
        window.location.href = "ver_usuarios";
    }else{
        Swal.fire({
            title:"error validation",
            icon:"warning",
            html: errores.join("<br />")
        });
    }
});