'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BlogContent extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      BlogContent.belongsTo(models.Blog, { foreignKey: 'blogId'});

    }
  };
  BlogContent.init({
    preamble: DataTypes.TEXT,
    content1: DataTypes.TEXT,
    imagePath1: DataTypes.TEXT,
    content2: DataTypes.TEXT,
    imagePath2: DataTypes.TEXT,
    content3: DataTypes.TEXT,
    imagePath3: DataTypes.TEXT,
    end: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'BlogContent',
  });
  return BlogContent;
};