const empleadoCtrl={};


empleadoCtrl.getEmpleados = async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "content-type");
    res.setHeader( "Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS" ); 
    const empleados = "Welcome Taller";
    res.json(empleados);
};

module.exports=empleadoCtrl;