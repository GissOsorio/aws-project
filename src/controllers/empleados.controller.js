const empleadoCtrl={};


empleadoCtrl.getEmpleados = async (req, res) => {
    const empleados = "Welcome Taller";
    res.json(empleados);
};

module.exports=empleadoCtrl;