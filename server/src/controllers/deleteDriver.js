const { Driver } = require('../db');

const deleteDriver = async (req, res) => {
  const { idDriver } = req.params;
  try {
    await Driver.destroy({
      where: {
        id: idDriver.toString(),
      },
    });
    res.status(200).send({ message: 'Driver deleted successfully' });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

module.exports = deleteDriver;
