var express = require("express");
var router = express.Router();

var modeloController = require("../controllers/modeloController");


router.post("/cadastrar", function (req, res) {
    unidadeController.cadastrarUnidade(req, res);
})

router.get("/listarModelos", function (req, res) {
    modeloController.buscarModelos(req, res);
})

module.exports = router;