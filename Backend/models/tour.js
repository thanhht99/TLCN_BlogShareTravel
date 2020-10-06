'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tour extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Tour.belongsTo(models.User, { foreignKey: 'tourGuideId'});

      Tour.hasMany(models.Review, {foreignKey: 'tourId'});
      Tour.hasMany(models.Comment, {foreignKey: 'tourId'});
      Tour.hasMany(models.ListCustomersOfTour, {foreignKey: 'tourId'});
    }
  };
  Tour.init({
    nameTour: DataTypes.STRING,
    summary: DataTypes.TEXT,
    amount: DataTypes.INTEGER,
    isAccept: DataTypes.BOOLEAN,
    isRemove: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Tour',
  });
  return Tour;
};