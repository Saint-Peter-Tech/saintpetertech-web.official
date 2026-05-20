var database = require("../database/config");

function cadastrarMonitor(
  fkUnidade,
  fkEmpresa,
  fkModelo,
  status_monitor,
  dtFabricacao,
  dtManutencao,
) {
  var instrucaoSql = `
        INSERT INTO monitores (fk_unidade, fk_empresa, fk_modelo, dtFabricacao, dtManutencao, status_monitor) 
        VALUES (${fkUnidade}, ${fkEmpresa}, ${fkModelo}, '${dtFabricacao}', '${dtManutencao}', '${status_monitor}');
    `;
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function vincularComponente(idMonitor, idComponente, limite) {
  var instrucaoSql = `
        INSERT INTO componente_monitor (fk_monitor, fk_componente, limite) 
        VALUES (${idMonitor}, ${idComponente}, ${limite});
    `;
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function listarNomesMonitores(fkEmpresa, fkUnidade) {
  var instrucaoSql = `
    select id_monitor from monitores where fk_empresa = ${fkEmpresa} and fk_unidade = ${fkUnidade};
    `;
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function listarParametros(idComponente, fkMonitor) {
  var instrucaoSql = `
    select limite from componente_monitor where fk_monitor = ${fkMonitor} and fk_componente = ${idComponente};
    `;

  console.log("Executando a instrução SQL: \n " + instrucaoSql);
  return database.executar(instrucaoSql)
}

module.exports = {
  cadastrarMonitor,
  vincularComponente,
  listarNomesMonitores,
  listarParametros,
};
