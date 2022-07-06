const db = require('./db');
const helper = require('../helper');

async function getAll() {
  const rows = await db.query(
    `SELECT *
    FROM PRETS`
  );
  const data = helper.emptyOrRows(rows);

  return data;
}

async function remove(idetu, codebarre, datedebutpret) {
  const result = await db.query(
    `DELETE FROM PRETS
      WHERE idetu='${idetu}' AND codebarre='${codebarre}' AND datedebutpret='${datedebutpret}';`
  );
  return { done: result.affectedRows, id: result.insertId };
}

async function create(pret) {
  const result = await db.query(
    `INSERT INTO PRETS
    (idetu, codebarre, datedebutpret, datefinpret, idres)
      VALUES
    (idetu='${pret.idetu}', codebarre='${pret.codebarre}', datedebutpret='${pret.datedebutpret}', datefinpret='${pret.datefinpret}', idres='${pret.idres}')`
  );

  let message = 'Error in creating pret';

  if (result.affectedRows) {
    message = 'pret created successfully';
  }

  return { message, id: result.insertId };
}

module.exports = {
  getAll,
  remove,
  create,
};
