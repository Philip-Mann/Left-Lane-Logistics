'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Loads', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      company: {
        type: Sequelize.STRING
      },
      origin: {
        type: Sequelize.STRING
      },
      destination: {
        type: Sequelize.STRING
      },
      equipment: {
        type: Sequelize.STRING
      },
      length: {
        type: Sequelize.STRING
      },
      weight: {
        type: Sequelize.STRING
      },
      full_or_partial: {
        type: Sequelize.STRING
      },
      date_posted: {
        type: Sequelize.STRING
      },
      rate: {
        type: Sequelize.INTEGER
      },
      commodity: {
        type: Sequelize.STRING
      },
      comments: {
        type: Sequelize.TEXT
      },
      factor: {
        type: Sequelize.BOOLEAN
      },
      ref_num: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Loads');
  }
};