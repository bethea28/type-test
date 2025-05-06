"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("Tasks", "createdAt_temp", {
      allowNull: true,
      type: Sequelize.DATE,
    });
    await queryInterface.addColumn("Tasks", "updatedAt_temp", {
      allowNull: true,
      type: Sequelize.DATE,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("Tasks", "createdAt_temp");
    await queryInterface.removeColumn("Tasks", "updatedAt_temp");
  },
};
