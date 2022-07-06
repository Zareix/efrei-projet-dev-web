const express = require('express');
const router = express.Router();
const prets = require('../services/prets');

router.get('/', async function (req, res, next) {
  try {
    res.json(await prets.getAll());
  } catch (err) {
    console.error('Error while getting prets ', err.message);
    next(err);
  }
});

router.delete(
  '/:idetu/:codebarre/:datedebutpret',
  async function (req, res, next) {
    try {
      const data = await prets.remove(
        req.params.idetu,
        req.params.codebarre,
        req.params.datedebutpret
      );
      res.sendStatus(200);
    } catch (err) {
      console.error('Error while patching pret ', err.message);
      next(err);
    }
  }
);

router.post('/', async function (req, res, next) {
  try {
    const data = await prets.create(req.body);
    if (!data.id) return res.status(500).send('Error');
    res.send(data);
  } catch (err) {
    console.error('Error while creating prets ', err.message);
    next(err);
  }
});

module.exports = router;
