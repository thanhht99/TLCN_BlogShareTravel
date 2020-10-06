'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here (xác định liên kết ở đây)
      
      
      User.hasMany(models.Review, { foreignKey: 'userId'});
      User.hasMany(models.Comment, { foreignKey: 'userId'});
      User.hasMany(models.Blog, { foreignKey: 'userId'});

      User.hasMany(models.Tour, { foreignKey: 'tourGuideId'});

      User.hasMany(models.ListCustomersOfTour, { foreignKey: 'customersId'});
    }
  };
  User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    avatarPath: DataTypes.TEXT,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    isTourGuide: DataTypes.BOOLEAN,
    isAdmin: DataTypes.BOOLEAN,
    isSuperAdmin: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};