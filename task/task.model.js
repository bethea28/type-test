const sequelize = require("../config/database");
const { DataTypes } = require("sequelize");
const Person = require("../person/person.model");
const personService = require("../person/person.service");
const Task = sequelize.define(
  "Task",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      //   allowNull: false,
    },
    // Model attributes are defined here
    firstName: {
      type: DataTypes.STRING,
      //   allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
    description: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
    personId: {
      type: DataTypes.INTEGER,
      // allowNull defaults to true
    },

    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  },
  {
    // Other model options go here
  }
);
Task.belongsTo(Person, { foreignKey: "personId" });

module.exports = Task;
