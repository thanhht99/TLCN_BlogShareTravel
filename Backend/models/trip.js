'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Trip extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Trip.belongsTo(models.Tour, { foreignKey: 'tourId'});
      Trip.belongsTo(models.TourGuide, { foreignKey: 'tourGuideId'});

      Trip.hasMany(models.TripReview, { foreignKey: 'tripId'});
      Trip.hasMany(models.FeedbackOfTrip, { foreignKey: 'tripId'});
    }
  };
  Trip.init({
    infoHotel: DataTypes.STRING,
    infoVehicle: DataTypes.STRING,
    detailTrip: DataTypes.TEXT,
    detailPrice: DataTypes.TEXT,
    startDate: DataTypes.STRING,
    endDate: DataTypes.STRING,
    departureLocation: DataTypes.STRING,
    isStatus: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Trip',
  });
  return Trip;
};