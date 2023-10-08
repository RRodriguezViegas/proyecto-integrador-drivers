const axios = require('axios');

const getDriversById = (req, res) => {
  axios
    .get(`http://localhost:5000/drivers/${req.params.idDriver}`)
    .then(response => {
      res.status(200).send(response.data);
    })
    .catch(error => {                                           // debe funcionar para la DB ???
      res.status(400).send({ error: error.message });
    });
};

module.exports = getDriversById;
