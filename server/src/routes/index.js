const { Router } = require('express');
const { driversRouter } = require('./routes/driversRouter');
const { teamsRouter } = require('./routes/teamsRouter');

const router = Router();

router.use('/drivers', driversRouter);
router.use('/teams', teamsRouter);

module.exports = router;
