const axios = require('axios');
const { Op } = require('sequelize');
const { Driver } = require('../db');

const getDrivers = async (req, res) => {
  const { name } = req.query;
  if (name) {
    const { rows: drivers } = await Driver.findAndCountAll({
      where: {
        Nombre: {
          [Op.iLike]: `%${name}%`,
        },
      },
      offset: 0,
      limit: 15,
    });

    axios
      .get(`http://localhost:5000/drivers`)
      .then(response => {
        for (const driver of response.data) {
          if (
            driver.name.forename.toLowerCase() === name.toLowerCase() &&
            drivers.length < 15
          ) {
            drivers.push(driver);
          }
        }
        res.status(200).send(drivers);
      })
      .catch(error => {
        res.status(400).send({ error: error.message });
      });
  } else {
    let drivers = [];
    const driversFromDB = await Driver.findAll();
    if (driversFromDB.length > 0) drivers.push(driversFromDB);
    axios
      .get('http://localhost:5000/drivers')
      .then(response => {
        drivers.push(response.data);
        res.status(200).send(drivers);
      })
      .catch(error => {
        res.status(400).send({ error: error.message });
      });
  }
};

module.exports = getDrivers;
