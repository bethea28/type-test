"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    queryInterface.createTable(
      "Persons",
      {
        // Model attributes are defined here

        first: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        last: {
          type: Sequelize.STRING,
          // allowNull defaults to true
        },
      },
      {
        // Other model options go here
      }
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  },
};
