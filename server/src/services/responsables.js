const db = require('./db');
const helper = require('../helper');

async function getAll() {
  const rows = await db.query(
    `SELECT idres, nomres, prenomres, loginres
    FROM RESPONSABLES`
  );
  const data = helper.emptyOrRows(rows);

  return data;
}

async function login(loginres) {
  const rows = await db.query(
    `SELECT idres, nomres, prenomres, loginres, motdepasseres
    FROM RESPONSABLES
    WHERE loginres='${loginres}'`
  );
  const data = helper.emptyOrRows(rows);

  return data;
}

async function get(idres) {
  const rows = await db.query(
    `SELECT idres, nomres, prenomres, loginres
    FROM RESPONSABLES
    WHERE idres='${idres}'`
  );
  const data = helper.emptyOrRows(rows);

  return data;
}

async function remove(idres) {
  const result = await db.query(
    `DELETE FROM RESPONSABLES
      WHERE idres = '${idres}';`
  );
  return { done: result.affectedRows, id: result.insertId };
}

async function create(responsable) {
  const result = await db.query(
    `INSERT INTO RESPONSABLES
    (nomres, prenomres, loginres, motdepasseres)
      VALUES
    ('${responsable.nomres}', '${responsable.prenomres}', '${responsable.loginres}', '${responsable.motdepasseres}')`
  );

  let message = 'Error in creating responsable';

  if (result.affectedRows) {
    message = 'responsable created successfully';
  }

  return { message, id: result.insertId };
}

async function update(idres, responsable) {
  const result = await db.query(
    `UPDATE RESPONSABLES
      SET nomres='${responsable.nomres}', prenomres='${responsable.prenomres}', loginres='${responsable.loginres}', motdepasseres='${responsable.motdepasseres}'
      WHERE idres = '${idres}';`
  );
  return { done: result.affectedRows, id: result.insertId };
}

module.exports = {
  getAll,
  remove,
  create,
  update,
  get,
  login,
};
