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
    queryInterface.createTable("Tasks", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        //   allowNull: false,
      },
      // Model attributes are defined here
      firstName: {
        type: Sequelize.STRING,
        //   allowNull: false,
      },
      lastName: {
        type: Sequelize.STRING,
        // allowNull defaults to true
      },
      description: {
        type: Sequelize.STRING,
        // allowNull defaults to true
      },
    });
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
