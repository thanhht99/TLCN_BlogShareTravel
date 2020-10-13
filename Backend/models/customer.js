'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Customer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Customer.belongsTo(models.Account, { foreignKey: 'accountId'});

      Customer.hasMany(models.TourGuideReviews, { foreignKey: 'customerId'});
      Customer.hasMany(models.TripReview, { foreignKey: 'customerId'});

      Customer.hasMany(models.CommentsOfTour, { foreignKey: 'customerId'});
      Customer.hasMany(models.CommentsOfBlog, { foreignKey: 'customerId'});

      Customer.hasMany(models.FeedbackOfTrip, { foreignKey: 'customerId'});
      Customer.hasMany(models.RegisterTrip, { foreignKey: 'customerId'});
    }
  };
  Customer.init({
    name: DataTypes.STRING,    
    identity: DataTypes.STRING,
    email: DataTypes.STRING,
    address: DataTypes.STRING,
    phone: DataTypes.STRING,
    avatarPath: DataTypes.TEXT,
    isStatus: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Customer',
  });
  return Customer;
};