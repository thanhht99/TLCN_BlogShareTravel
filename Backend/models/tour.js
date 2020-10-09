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
      Tour.belongsTo(models.TourGuide, { foreignKey: 'tourGuideId'});

      Tour.hasMany(models.CommentsOfTour, {foreignKey: 'tourId'});
      Tour.hasMany(models.Blog, {foreignKey: 'tourId'});
      Tour.hasMany(models.Trip, {foreignKey: 'tourId'});
    }
  };
  Tour.init({
    name: DataTypes.STRING,
    summary: DataTypes.TEXT,
    price: DataTypes.DOUBLE,
    time: DataTypes.STRING,
    departureLocation: DataTypes.STRING,
    amount: DataTypes.INTEGER,
    isStatus: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Tour',
  });
  return Tour;
};