const db = require('./db');
const helper = require('../helper');

async function getAll() {
  const rows = await db.query(
    `SELECT *
    FROM ETUDIANTS`
  );
  const data = helper.emptyOrRows(rows);

  return data;
}

async function get(idetu) {
  const rows = await db.query(
    `SELECT *
    FROM ETUDIANTS
    WHERE idetu='${idetu}'`
  );
  const data = helper.emptyOrRows(rows);

  return data;
}

async function remove(idetu) {
  const result = await db.query(
    `DELETE FROM ETUDIANTS
      WHERE idetu = '${idetu}';`
  );
  return { done: result.affectedRows, id: result.insertId };
}

async function create(etudiant) {
  const result = await db.query(
    `INSERT INTO ETUDIANTS
    (nometud, prenometu)
      VALUES
    (nometud='${etudiant.nometud}', prenometu='${etudiant.prenometu}')`
  );

  let message = 'Error in creating etudiant';

  if (result.affectedRows) {
    message = 'etudiant created successfully';
  }

  return { message, id: result.insertId };
}

async function update(idetu, etudiant) {
  const result = await db.query(
    `UPDATE ETUDIANTS
      SET nometud='${etudiant.nometud}', prenometu='${etudiant.prenometu}'
      WHERE idetu='${idetu}';`
  );
  return { done: result.affectedRows, id: result.insertId };
}

module.exports = {
  getAll,
  remove,
  create,
  update,
  get,
};
