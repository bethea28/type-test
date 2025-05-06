"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  // Example migration for the Person model
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Person", {
      // Use the explicit name "Person" here
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      // ... your other attributes for the Person model
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Person"); // Use the explicit name "Person" here as well
  },
};
