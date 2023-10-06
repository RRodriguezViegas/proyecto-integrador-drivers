const { Router } = require('express');

const teamsRouter = Router();

teamsRouter.get('/', (req, res) => {
  res.send('get de /teams');
});

module.exports = teamsRouter;
