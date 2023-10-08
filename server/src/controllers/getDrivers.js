const axios = require('axios');

const getDrivers = (req, res) => {
  axios
    .get('http://localhost:5000/drivers')
    .then(response => {
      res.status(200).send(response.data);
    })
    .catch(error => {
      res.status(400).send({ error: error.message });
    });
};

module.exports = getDrivers;
