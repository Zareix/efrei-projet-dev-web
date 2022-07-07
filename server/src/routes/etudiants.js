const express = require('express');
const router = express.Router();
const etudiants = require('../services/etudiants');

router.get('/', async function (req, res, next) {
  try {
    res.json(await etudiants.getAll());
  } catch (err) {
    console.error('Error while getting etudiants ', err.message);
    next(err);
  }
});

router.get('/:idetu', async function (req, res, next) {
  try {
    const data = await etudiants.get(req.params.idetu);
    if (data.length > 0) res.json(data[0]);
    else res.sendStatus(500);
  } catch (err) {
    console.error('Error while getting etudiants ', err.message);
    next(err);
  }
});

router.delete('/:idetu', async function (req, res, next) {
  try {
    const data = await etudiants.remove(req.params.idetu);
    res.sendStatus(200);
  } catch (err) {
    console.error('Error while patching etudiant ', err.message);
    next(err);
  }
});

router.post('/', async function (req, res, next) {
  try {
    const data = await etudiants.create(req.body);
    res.sendStatus(200);
  } catch (err) {
    console.error('Error while creating etudiants ', err.message);
    next(err);
  }
});

router.patch('/:idetu', async function (req, res, next) {
  try {
    const data = await etudiants.update(req.params.idetu, req.body);
    res.sendStatus(200);
  } catch (err) {
    console.error('Error while patching etudiant ', err.message);
    next(err);
  }
});

module.exports = router;
