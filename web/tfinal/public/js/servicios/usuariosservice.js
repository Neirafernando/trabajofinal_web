const getusuarios = async ()=>{
    let resp = await axios.get("api/usuarios/get");
    return resp.data;
};

const crearusuario = async (usuario)=>{
    let resp = await axios.post("api/usuarios/post", usuario, {
        headers: {
            "Content-Type": "application/json"
        }
    });
    return resp.data;
};

const eliminarUsuario = async(id)=>{
    try{
        let resp = await axios.post("api/usuarios/delete", {id}, {
            headers:{
                "Content-Type": "application/json"
            }
        });
        return resp.data == "ok";
    }catch(e){
        return false;
    }
};

var busqueda = document.getElementById('buscar');
var table = document.getElementById("tabla").tBodies[0];

buscaTabla = function(){
  texto = busqueda.value.toLowerCase();
  var r=0;
  while(row = table.rows[r++])
  {
    if ( row.innerText.toLowerCase().indexOf(texto) !== -1 )
      row.style.display = null;
    else
      row.style.display = 'none';
  }
}

busqueda.addEventListener('keyup', buscaTabla);