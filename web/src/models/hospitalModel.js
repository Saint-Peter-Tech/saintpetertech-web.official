var database = require("../database/config");

function buscarHospitais(idEmpresa) {
    var instrucaoSql =
        `SELECT id_hospital, nome_hospital FROM hospitais
        WHERE fk_empresa = ${idEmpresa}`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function cadastrarHospital(nomeHospital, cnpjHospital, telefoneHospital, fkEmpresa) {
    var instrucaoSql = `
        INSERT INTO hospitais (nome_hospital, cnpj_hospital, telefone_hospital, fk_empresa) 
        VALUES ('${nomeHospital}', '${cnpjHospital}', '${telefoneHospital}', ${fkEmpresa});
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarInfoUnidade(idHospital) {
    var instrucaoSql =
        `
    select  
        u.id_unidade,
        u.nome_unidade, 
		u.cidade,
        (select 
        count(id_monitor) 
        from monitores WHERE fk_unidade = u.id_unidade
        ) as 'qtdMonitores'
        from unidades as u 
        where u.fk_hospital = ${idHospital};`;

    console.log("Executando instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarHospitalPorId(idHospital) {
    var instrucaoSql =
        `SELECT id_hospital, nome_hospital 
        FROM hospitais 
        WHERE id_hospital = ${idHospital}`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarHospitais,
    cadastrarHospital,
    buscarInfoUnidade,
    buscarHospitalPorId
};