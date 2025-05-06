import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";
import User from "../user/user.model.js";
import Image from "../image/image.model.js"; // Import the Image model

const Story = sequelize.define(
  "Story",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    slug: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: true,
    },
    storyType: {
      type: DataTypes.ENUM("one-sided", "two-sided"),
      allowNull: true,
      defaultValue: "one-sided",
    },
    sideAContent: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    sideAVideoUrl: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    sideAAuthorId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: User,
        key: "id",
      },
    },
    sideAAcknowledged: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    sideBContent: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    sideBVideoUrl: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    sideBAuthorId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: User,
        key: "id",
      },
    },
    sideBAcknowledged: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    status: {
      type: DataTypes.ENUM("draft", "pending-second", "complete", "archived"),
      allowNull: false,
      defaultValue: "draft",
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  },
  {}
);

// Define associations with the User model
Story.belongsTo(User, { foreignKey: "sideAAuthorId", as: "sideAAuthor" });
Story.belongsTo(User, { foreignKey: "sideBAuthorId", as: "sideBAuthor" });

// Define many-to-many relationship for Side A images
const SideAImage = sequelize.define("SideAImage", {
  storyId: {
    type: DataTypes.INTEGER,
    references: {
      model: Story,
      key: "id",
    },
    primaryKey: true,
  },
  imageId: {
    type: DataTypes.INTEGER,
    references: {
      model: Image,
      key: "id",
    },
    primaryKey: true,
  },
  // You can add attributes specific to this association (e.g., order)
});

Story.belongsToMany(Image, {
  through: SideAImage,
  as: "sideAImages",
  foreignKey: "storyId",
});
Image.belongsToMany(Story, {
  through: SideAImage,
  as: "sideAStories",
  foreignKey: "imageId",
});

// Define many-to-many relationship for Side B images
const SideBImage = sequelize.define("SideBImage", {
  storyId: {
    type: DataTypes.INTEGER,
    references: {
      model: Story,
      key: "id",
    },
    primaryKey: true,
  },
  imageId: {
    type: DataTypes.INTEGER,
    references: {
      model: Image,
      key: "id",
    },
    primaryKey: true,
  },
  // You can add attributes specific to this association (e.g., order)
});

Story.belongsToMany(Image, {
  through: SideBImage,
  as: "sideBImages",
  foreignKey: "storyId",
});
Image.belongsToMany(Story, {
  through: SideBImage,
  as: "sideBStoriesB",
  foreignKey: "imageId",
});

export default Story;
