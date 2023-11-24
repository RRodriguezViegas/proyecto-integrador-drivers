const { DataTypes } = require("sequelize");

module.exports = sequelize => {
  sequelize.define("Driver", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    surname: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    description: {
      type: DataTypes.TEXT,
    },
    image: {
      type: DataTypes.TEXT,
      defaultValue: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    },
    nationality: {
      type: DataTypes.STRING,
    },
    dob: {
      type: DataTypes.DATEONLY,
    },
  });
};
