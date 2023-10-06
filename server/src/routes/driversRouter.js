const { Router } = require('express');
// const getDrivers = require('../controllers/getDrivers.js');

const driversRouter = Router();

driversRouter.get('/', (req, res) => {
  res.send('get de /drivers');
});

driversRouter.get('/:idDriver', (req, res) => {
  res.send('get de /drivers/:idDriver');
});

driversRouter.post('/', (req, res) => {
  res.send('post de /drivers');
});

module.exports = driversRouter;
