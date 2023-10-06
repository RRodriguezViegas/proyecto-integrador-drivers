const { Router } = require('express');

const driversRouter = Router();

driversRouter.get('/'); // solo / porque ya estoy en /drivers

module.exports = driversRouter;
