const router = require("express").Router()
const controller= require("../controllers/controller_form")


router.route("/")
        //Aqui el api recupera todos los registros que contengan con el parametro de busqueda
        .get(controller.buscar)
        //El api crea un registro nuevo en la base de datos
        .post(controller.crear);

module.exports = router;