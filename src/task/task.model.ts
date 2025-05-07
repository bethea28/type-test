import sequelize from "../../config/database.js";
import { DataTypes } from "sequelize";
import Person from "../person/person.model.ts";
// import personService from "../person/person.service.js"; // You might not need to import the service here

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
      references: {
        model: Person,
        key: "id",
      },
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  },
  {
    // Other model options go here
  }
);

Task.belongsTo(Person, { foreignKey: "personId" });

export default Task;
