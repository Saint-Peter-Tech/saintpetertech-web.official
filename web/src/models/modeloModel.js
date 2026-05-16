var database = require("../database/config");

function cadastrarModelo(nomeModelo, dataLancamento, marca, descricao) {
    var instrucaoSql = `
        INSERT INTO modelos (nome, dtLancamento, marca, descricao) 
        VALUES ('${nomeModelo}', '${dataLancamento}', '${marca}', '${descricao}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarModelos() {
    var instrucaoSql = `
        SELECT id_modelo, nome, DATE_FORMAT(dtLancamento, '%d/%m/%Y') AS dtLancamento, marca, descricao FROM modelos;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    cadastrarModelo,
    buscarModelos,
}