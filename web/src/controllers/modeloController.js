var modeloModel = require("../models/modeloModel");

function cadastrarModelo(req, res) {
    var nomeModelo = req.body.modeloServer
    var dataLancamento = req.body.dataServer
    var marca = req.body.marcaServer
    var descricao = req.body.descricaoServer

    modeloModel
        .cadastrarModelo(nomeModelo, dataLancamento, marca, descricao)
        .then(function (resultado) {
            res.json({ id: resultado.insertId });
        })
        .catch(function (erro) {
            console.log(erro);
            console.log(
                "\nHouve um erro ao realizar o cadastro! Erro: ",
                erro.sqlMessage,
            );
            res.status(500).json(erro.sqlMessage);
        });
}

function buscarModelos(req, res) {
  modeloModel.buscarModelos()
    .then(function (resultado) {
      res.json(resultado);
    })
    .catch(function (erro) {
      console.log(erro);
      res.status(500).json(erro.sqlMessage);
    });
}

function buscarModelosPorNome(req, res) {
  modeloModel.buscarModelos()
    .then(function (resultado) {
      res.json(resultado);
    })
    .catch(function (erro) {
      console.log(erro);
      res.status(500).json(erro.sqlMessage);
    });
}


module.exports = {
    cadastrarModelo,
    buscarModelos,
    buscarModelosPorNome
};
