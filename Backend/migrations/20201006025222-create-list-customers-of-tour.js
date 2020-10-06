'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('ListCustomersOfTours', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nameCustomer: {
        type: Sequelize.STRING
      },
      phone: {
        type: Sequelize.STRING
      },
      identityCard: {
        type: Sequelize.STRING
      },
      amount: {
        type: Sequelize.INTEGER
      },
      isRegister: {
        type: Sequelize.BOOLEAN
      },
      isCancel: {
        type: Sequelize.BOOLEAN
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
    await queryInterface.dropTable('ListCustomersOfTours');
  }
};