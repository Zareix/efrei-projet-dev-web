const db = require('./db');
const helper = require('../helper');

async function getAll() {
  const rows = await db.query(
    `SELECT *
    FROM MATERIELS`
  );
  const data = helper.emptyOrRows(rows);

  return data;
}

async function get(codebarre) {
  const rows = await db.query(
    `SELECT *
    FROM MATERIELS
    WHERE codebarre='${codebarre}'`
  );
  const data = helper.emptyOrRows(rows);

  return data;
}

async function remove(codebarre) {
  const result = await db.query(
    `DELETE FROM MATERIELS
      WHERE codebarre = '${codebarre}';`
  );
  return { done: result.affectedRows, id: result.insertId };
}

async function create(materiel) {
  const result = await db.query(
    `INSERT INTO MATERIELS
    (codebarre, nommat, descriptionmat, dateachatmat, prixachatmat, fournisseurmat)
      VALUES
    ('${materiel.codebarre}', '${materiel.nommat}', '${materiel.descriptionmat}', '${materiel.dateachatmat}', ${materiel.prixachatmat}, '${materiel.fournisseurmat}')`
  );

  let message = 'Error in creating materiel';

  if (result.affectedRows) {
    message = 'materiel created successfully';
  }

  return { message, id: result.insertId };
}

async function update(codebarre, materiel) {
  const result = await db.query(
    `UPDATE MATERIELS
      SET codebarre='${materiel.codebarre}', nommat='${materiel.nommat}', descriptionmat='${materiel.descriptionmat}', dateachatmat='${materiel.dateachatmat}', prixachatmat='${materiel.prixachatmat}', fournisseurmat='${materiel.fournisseurmat}'
      WHERE codebarre='${codebarre}';`
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
