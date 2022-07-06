const express = require('express');
const router = express.Router();
const responsables = require('../services/responsables');

router.get('/', async function (req, res, next) {
  try {
    res.json(await responsables.getAll());
  } catch (err) {
    console.error('Error while getting responsables ', err.message);
    next(err);
  }
});

router.get('/:idres', async function (req, res, next) {
  try {
    const data = await responsables.get(req.params.idres);
    if (data.length > 0) res.json(data[0]);
    else res.sendStatus(500);
  } catch (err) {
    console.error('Error while getting responsables ', err.message);
    next(err);
  }
});

router.delete('/:idres', async function (req, res, next) {
  try {
    const data = await responsables.remove(req.params.idres);
    res.sendStatus(200);
  } catch (err) {
    console.error('Error while patching responsable ', err.message);
    next(err);
  }
});

router.post('/', async function (req, res, next) {
  try {
    const data = await responsables.create(req.body);
    if (!data.id) return res.status(500).send('Error');
    res.send(data);
  } catch (err) {
    console.error('Error while creating responsables ', err.message);
    next(err);
  }
});

router.patch('/:idres', async function (req, res, next) {
  try {
    const data = await responsables.update(req.params.idres, req.body);
    res.sendStatus(200);
  } catch (err) {
    console.error('Error while patching responsable ', err.message);
    next(err);
  }
});

module.exports = router;
