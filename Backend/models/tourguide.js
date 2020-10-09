'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TourGuide extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      TourGuide.belongsTo(models.Account, { foreignKey: 'accountId'});

      TourGuide.hasMany(models.TourGuideReviews, { foreignKey: 'tourGuideId'});

      TourGuide.hasMany(models.CommentsOfTour, { foreignKey: 'tourGuideId'});
      TourGuide.hasMany(models.CommentsOfBlog, { foreignKey: 'tourGuideId'});

      TourGuide.hasMany(models.Tour, { foreignKey: 'tourGuideId'});
      TourGuide.hasMany(models.Blog, { foreignKey: 'tourGuideId'});
      TourGuide.hasMany(models.Trip, { foreignKey: 'tourGuideId'});

    }
  };
  TourGuide.init({
    name: DataTypes.STRING,    
    gender: DataTypes.STRING,    
    identity: DataTypes.STRING,
    dateOfBirth: DataTypes.STRING,
    email: DataTypes.STRING,
    language: DataTypes.STRING,
    address: DataTypes.STRING,
    phone: DataTypes.STRING,
    avatarPath: DataTypes.TEXT,
    tripNumber: DataTypes.INTEGER,    
    isStatus: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'TourGuide',
  });
  return TourGuide;
};