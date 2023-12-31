const { Router } = require('express');
const getDrivers = require('../controllers/getDrivers.js');
const getDriversById = require('../controllers/getDriversById.js');
const postDrivers = require('../controllers/postDriver.js');
const deleteDriver = require('../controllers/deleteDriver.js');

const driversRouter = Router();

driversRouter.get('/', getDrivers);

driversRouter.get('/:idDriver', getDriversById);

driversRouter.post('/', postDrivers);

driversRouter.delete('/:idDriver', deleteDriver);

module.exports = driversRouter;
