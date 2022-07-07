const express = require('express');
const bcrypt = require('bcrypt');
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

router.get('/login/:login/:password', async function (req, res, next) {
  try {
    const data = await responsables.login(req.params.login);
    if (data.length === 0) {
      res.sendStatus(500);
      return;
    }
    let resp = data[0];
    if (await bcrypt.compare(req.params.password, resp.motdepasseres)) {
      res.json({
        ...resp,
        motdepasseres: '',
      });
    } else {
      res.sendStatus(500);
    }
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
    const hash = await bcrypt.hash(req.body.motdepasseres, 10);
    const data = await responsables.create({
      ...req.body,
      motdepasseres: hash,
    });
    res.sendStatus(200);
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
