const express = require('express');
const router = express.Router();
const materiels = require('../services/materiels');

router.get('/', async function (req, res, next) {
  try {
    res.json(await materiels.getAll());
  } catch (err) {
    console.error('Error while getting materiels ', err.message);
    next(err);
  }
});

router.get('/:codebarre', async function (req, res, next) {
  try {
    const data = await materiels.get(req.params.codebarre);
    if (data.length > 0) res.json(data[0]);
    else res.sendStatus(500);
  } catch (err) {
    console.error('Error while getting materiels ', err.message);
    next(err);
  }
});

router.delete('/:codebarre', async function (req, res, next) {
  try {
    const data = await materiels.remove(req.params.codebarre);
    res.sendStatus(200);
  } catch (err) {
    console.error('Error while patching materiel ', err.message);
    next(err);
  }
});

router.post('/', async function (req, res, next) {
  try {
    const data = await materiels.create(req.body);
    if (!data.id) return res.status(500).send('Error');
    res.send(data);
  } catch (err) {
    console.error('Error while creating materiels ', err.message);
    next(err);
  }
});

router.patch('/:codebarre', async function (req, res, next) {
  try {
    const data = await materiels.update(req.params.codebarre, req.body);
    res.sendStatus(200);
  } catch (err) {
    console.error('Error while patching materiel ', err.message);
    next(err);
  }
});

module.exports = router;
