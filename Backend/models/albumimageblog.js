'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AlbumImageBlog extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      AlbumImageBlog.belongsTo(models.Blog, { foreignKey: 'blogId'});

    }
  };
  AlbumImageBlog.init({
    imagePath1: DataTypes.TEXT,
    imagePath2: DataTypes.TEXT,
    imagePath3: DataTypes.TEXT,
    imagePath4: DataTypes.TEXT,
    imagePath5: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'AlbumImageBlog',
  });
  return AlbumImageBlog;
};