'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Blog extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Blog.belongsTo(models.Tour, { foreignKey: 'tourId'});
      Blog.belongsTo(models.TourGuide, { foreignKey: 'tourGuideId'});

    }
  };
  Blog.init({
    title: DataTypes.STRING,
    address: DataTypes.STRING,
    imagePath: DataTypes.TEXT,
    summary: DataTypes.TEXT,
    isStatus: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Blog',
  });
  return Blog;
};