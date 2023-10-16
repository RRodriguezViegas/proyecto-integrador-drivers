const { Router } = require('express');
const getTeams = require('../controllers/getTeams.js');
// const { Team } = require('../db');

const teamsRouter = Router();

teamsRouter.get('/', getTeams);

// teamsRouter.get('/FromDB', async (req, res) => {
//   const tim = await Team.findAll();
//   res.status(200).send(tim);
// });

module.exports = teamsRouter;
