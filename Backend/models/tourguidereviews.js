'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TourGuideReviews extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      TourGuideReviews.belongsTo(models.TourGuide, { foreignKey: 'tourGuideId'});
      TourGuideReviews.belongsTo(models.Customer, { foreignKey: 'customerId'});
    }
  };
  TourGuideReviews.init({
    message: DataTypes.TEXT,
    rating: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'TourGuideReviews',
  });
  return TourGuideReviews;
};