"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Add a temporary timestamp column
    // await queryInterface.addColumn("Tasks", "createdAt_temp", {
    //   type: Sequelize.DATE,
    //   allowNull: true,
    // });
    // await queryInterface.addColumn("Tasks", "updatedAt_temp", {
    //   type: Sequelize.DATE,
    //   allowNull: true,
    // });

    // Copy data from integer columns to temporary timestamp columns
    await queryInterface.sequelize.query(`
      UPDATE "Tasks"
      SET
        "createdAt_temp" = TO_TIMESTAMP("createdAt"::BIGINT),
        "updatedAt_temp" = TO_TIMESTAMP("updatedAt"::BIGINT)
      WHERE "createdAt" IS NOT NULL AND "updatedAt" IS NOT NULL;
    `);

    // Remove the original integer columns
    await queryInterface.removeColumn("Tasks", "createdAt");
    await queryInterface.removeColumn("Tasks", "updatedAt");

    // Rename the temporary columns to the original names
    await queryInterface.renameColumn("Tasks", "createdAt_temp", "createdAt");
    await queryInterface.renameColumn("Tasks", "updatedAt_temp", "updatedAt");

    // Set the NOT NULL constraint and default value on the new timestamp columns
    await queryInterface.changeColumn("Tasks", "createdAt", {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal("NOW()"),
    });
    await queryInterface.changeColumn("Tasks", "updatedAt", {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal("NOW()"),
    });
  },

  async down(queryInterface, Sequelize) {
    // Reverting this precisely is complex and might lead to data loss
    console.warn(
      "Reverting this migration might lead to data loss or incorrect data."
    );
  },
};
