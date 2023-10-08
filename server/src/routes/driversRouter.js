const { Router } = require('express');
const getDrivers = require('../controllers/getDrivers.js');
const getDriversById = require('../controllers/getDriversById.js');

const driversRouter = Router();

driversRouter.get('/', getDrivers);

driversRouter.get('/:idDriver', getDriversById);

driversRouter.post('/', (req, res) => {
  res.send('post de /drivers');
});

module.exports = driversRouter;
