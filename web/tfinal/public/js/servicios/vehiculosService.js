const getVehiculos = async ()=>{
    let resp = await axios.get("api/vehiculos/get");
    return resp.data;
};

const crearVehiculo = async(vehiculo)=>{
    let resp = await axios.post("api/vehiculos/post", vehiculo, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return resp.data;
};

const eliminarVehiculo = async(id)=>{
    try{
        let resp = await axios.post("api/vehiculos/delete", {id}, {
            headers:{
                "Content-Type": "application/json"
            }
        });
        return resp.data == "ok";
    }catch(e){
        return false;
    }
};