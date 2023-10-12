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
    Descripcion: {
      type: DataTypes.STRING,
    },
    Imagen: {
      type: DataTypes.STRING,
      defaultValue: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
    },
    Nacionalidad: {
      type: DataTypes.STRING,
    },
    Fecha_de_Nacimiento: {
      type: DataTypes.DATEONLY,
    },
  });
};
