const sequelize = require("sequelize");
const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("transactions", {
    timestamp: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    value: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    addressee: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    sender: { 
      type: DataTypes.STRING,
      allowNull: false,
    }
  });
};
