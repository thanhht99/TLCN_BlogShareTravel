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
      Blog.belongsTo(models.Brand, { foreignKey: 'brandId'});
      Blog.belongsTo(models.Place, { foreignKey: 'placeId'});
      Blog.hasMany(models.Review, {foreignKey: 'blogId'});

    }
  };
  Blog.init({
    title: DataTypes.STRING,
    imagePath: DataTypes.TEXT,
    summary: DataTypes.TEXT,
    isAccept: DataTypes.BOOLEAN,
    isRemove: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Blog',
  });
  return Blog;
};