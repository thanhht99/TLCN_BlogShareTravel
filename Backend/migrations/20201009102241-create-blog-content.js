'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('BlogContents', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      preamble: {
        type: Sequelize.TEXT
      },
      content1: {
        type: Sequelize.TEXT
      },
      imagePath1: {
        type: Sequelize.TEXT
      },
      content2: {
        type: Sequelize.TEXT
      },
      imagePath2: {
        type: Sequelize.TEXT
      },
      content3: {
        type: Sequelize.TEXT
      },
      imagePath3: {
        type: Sequelize.TEXT
      },
      end: {
        type: Sequelize.TEXT
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
    await queryInterface.dropTable('BlogContents');
  }
};