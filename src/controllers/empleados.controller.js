const empleadoCtrl={};
const Empleado = require('../models/Empleado');


empleadoCtrl.getEmpleados = async (req, res) => {
    const empleados = "Práctica AWS";
    res.json(empleados);

};

module.exports=empleadoCtrl;