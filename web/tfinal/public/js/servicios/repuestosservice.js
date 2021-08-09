const getRepuestos = async ()=>{
    let resp = await axios.get("api/repuestos/get");
    return resp.data;
}
const crearRepuesto = async(repuestos)=>{
    let resp = await axios.post ("api/repuestos/post", repuestos, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return resp.data;
};

const eliminarRepuesto = async(id)=>{
    try{
        let resp = await axios.post("api/repuestos/delete", {id}, {
            headers:{
                "Content-Type": "application/json"
            }
        });
        return resp.data == "ok";
    }catch(e){
        return false;
    }
};
