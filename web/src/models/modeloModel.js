var database = require("../database/config");

// function cadastrarUnidade(fkHospital, cep, rua, numero, cidade, nome_unidade, email_responsavel, telefone_responsavel, rede_total) {
//     var instrucaoSql = `
//         INSERT INTO unidades (fk_hospital, cep, rua, numero, cidade, nome_unidade, email_responsavel, telefone_responsavel, rede_total) 
//         VALUES (${fkHospital}, '${cep}', '${rua}', '${numero}', '${cidade}', '${nome_unidade}', '${email_responsavel}', '${telefone_responsavel}', '${rede_total}');
//     `;
//     console.log("Executando a instrução SQL: \n" + instrucaoSql);
//     return database.executar(instrucaoSql);
// }

function buscarModelos() {
    var instrucaoSql = `
        SELECT id_modelo, nome, DATE_FORMAT(dtLancamento, '%d/%m/%Y') AS dtLancamento, marca, descricao FROM modelos;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    // cadastrarUnidade,
    buscarModelos,
}