const { DataTypes } = require('sequelize');

module.exports = sequelize => {
  sequelize.define('Driver', {
    ID: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    Nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Apellido: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Descripción: {
      type: DataTypes.STRING,
    },
    Imagen: {
      type: DataTypes.STRING,
    },
    Nacionalidad: {
      type: DataTypes.STRING,
    },
    Fecha_de_Nacimiento: {
      type: DataTypes.DATE,
    },
  });
};
