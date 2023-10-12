const { Driver } = require('../db');

const postDriver = async (req, res) => {
  try {
    const {
      Nombre,
      Apellido,
      Descripcion,
      imagen,
      Nacionalidad,
      Fecha_de_Nacimiento,
      teams,
    } = req.body;
    if (!Nombre || !Apellido || !Nacionalidad || !Fecha_de_Nacimiento) {
      res.status(400).send({ error: 'Faltan datos obligatorios' });
    }

    const newDriver = await Driver.create({
      Nombre,
      Apellido,
      Descripcion,
      imagen,
      Nacionalidad,
      Fecha_de_Nacimiento,
    });

    newDriver.addTeams(teams);

    res.status(201).send(newDriver);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

module.exports = postDriver;
