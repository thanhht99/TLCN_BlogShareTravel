'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Place extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Place.hasMany(models.Blog, {foreignKey: 'placeId'});
    }
  };
  Place.init({
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    dictrict: DataTypes.STRING,
    province: DataTypes.STRING,
    avatarPath: DataTypes.TEXT,
    isStatus: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Place',
  });
  return Place;
};