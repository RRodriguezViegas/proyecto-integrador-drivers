const { Driver } = require('../db');

const deleteDriver = async (req, res) => {
  const { idDriver } = req.params;
  try {
    await Driver.findByPk(idDriver.toString());
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

module.exports = deleteDriver;
