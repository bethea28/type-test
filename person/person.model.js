const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Person = sequelize.define(
  "Person",
  {
    // Model attributes are defined here

    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    first: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
  },
  {
    // Other model options go here
    tableName: "Person",
    timestamps: true,
  }
);

// `sequelize.define` also returns the model
module.exports = Person;
