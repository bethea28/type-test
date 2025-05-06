import { Sequelize, DataTypes } from "sequelize";
import sequelize from "../../config/database.js"; // Assuming your database.js uses export default

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
export default Person;
