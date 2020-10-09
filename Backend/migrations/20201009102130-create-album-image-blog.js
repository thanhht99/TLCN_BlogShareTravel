'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('AlbumImageBlogs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      imagePath1: {
        type: Sequelize.TEXT
      },
      imagePath2: {
        type: Sequelize.TEXT
      },
      imagePath3: {
        type: Sequelize.TEXT
      },
      imagePath4: {
        type: Sequelize.TEXT
      },
      imagePath5: {
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
    await queryInterface.dropTable('AlbumImageBlogs');
  }
};