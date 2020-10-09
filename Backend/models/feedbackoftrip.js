'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class FeedbackOfTrip extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      FeedbackOfTrip.belongsTo(models.Trip, { foreignKey: 'tripId'});
      FeedbackOfTrip.belongsTo(models.Customer, { foreignKey: 'customerId'});


    }
  };
  FeedbackOfTrip.init({
    advantages: DataTypes.TEXT,
    disadvantages: DataTypes.TEXT,
    isLike: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'FeedbackOfTrip',
  });
  return FeedbackOfTrip;
};