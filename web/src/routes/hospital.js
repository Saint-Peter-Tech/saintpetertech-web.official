var express = require("express");
var router = express.Router();

var hospitalController = require("../controllers/hospitalController");

router.get("/buscarHospitais", function (req, res) {
    hospitalController.buscarHospitais(req, res);
})

router.post("/cadastrar", function (req, res) {
    hospitalController.cadastrarHospital(req, res);
})

router.get("/buscarInfoUnidade", function (req, res){
    hospitalController.buscarInfoUnidade(req, res);
})

router.get("/buscarPorId", function (req, res) {
    hospitalController.buscarHospitalPorId(req, res);
})

module.exports = router;