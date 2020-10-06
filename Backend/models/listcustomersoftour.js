'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ListCustomersOfTour extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ListCustomersOfTour.belongsTo(models.Tour, { foreignKey: 'tourId'});
      ListCustomersOfTour.belongsTo(models.User, { foreignKey: 'customersId'});
    }
  };
  ListCustomersOfTour.init({
    nameCustomer: DataTypes.STRING,
    phone: DataTypes.STRING,
    identityCard: DataTypes.STRING,
    amount: DataTypes.INTEGER,
    isRegister: DataTypes.BOOLEAN,
    isCancel: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'ListCustomersOfTour',
  });
  return ListCustomersOfTour;
};