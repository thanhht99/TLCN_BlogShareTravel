'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RegisterTrip extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      RegisterTrip.belongsTo(models.Trip, { foreignKey: 'tripId'});
      RegisterTrip.belongsTo(models.Customer, { foreignKey: 'customerId'});
    }
  };
  RegisterTrip.init({
    nameRegister: DataTypes.STRING,
    gender: DataTypes.STRING,
    identity: DataTypes.STRING,
    dateOfBirth: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    address: DataTypes.STRING,
    registerQuantity: DataTypes.INTEGER,
    detailQuantity: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'RegisterTrip',
  });
  return RegisterTrip;
};