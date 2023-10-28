const { Driver, Team } = require('../db');
const { Op } = require('sequelize');

const postDriver = async (req, res) => {
  try {
    const { name, surname, description, image, nationality, dob, teams } =
      req.body;
    if (!name || !surname || !nationality || !dob) {
      return res.status(400).json({ error: 'Faltan datos obligatorios' });
    }

    const newDriver = await Driver.create({
      name,
      surname,
      description,
      image,
      nationality,
      dob,
    });

    const teamObjects = await Team.findAll({
      where: {
        nombre: {
          [Op.in]: teams,
        },
      },
    });

    await newDriver.setTeams(teamObjects);

    res.status(201).json(newDriver);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = postDriver;
