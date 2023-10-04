const { DataTypes } = require('sequelize');

module.exports = sequelize => {
  sequelize.define('Team', {
    ID: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    Nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
