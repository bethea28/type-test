// image.model.js
import { DataTypes } from "sequelize";
import sequelize from "../../config/database.js";

const Image = sequelize.define("Image", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  url: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  // You can add other metadata like caption, order, etc.
});

export default Image;
