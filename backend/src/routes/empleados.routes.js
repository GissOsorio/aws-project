const { Router }= require('express');
const router=Router();
const
empleado=require('../controllers/empleados.controller.js');
router.get('/',empleado.getEmpleados);
module.exports=router;