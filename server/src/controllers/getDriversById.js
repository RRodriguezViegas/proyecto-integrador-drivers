const axios = require('axios');
const { Driver } = require('../db');

const getDriversById = async (req, res) => {
  const { idDriver } = req.params;
  if (idDriver < 999) {
    axios
      .get(`http://localhost:5000/drivers/${idDriver}`)
      .then(response => {
        res.status(200).send(response.data);
      })
      .catch(error => {
        res.status(404).send({ error: error.message });
      });
  } else {
    try {
      let driver = await Driver.findByPk(idDriver.toString());
      if (driver) {
        res.status(200).send(driver);
      } else {
        res.status(404).send({ error: 'Driver not found' });
      }
    } catch (error) {
      res.status(404).send({ error: error.message });
    }
  }
};

module.exports = getDriversById;
