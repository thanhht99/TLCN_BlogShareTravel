'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CommentsOfBlog extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      CommentsOfBlog.belongsTo(models.Blog, { foreignKey: 'blogId'});
      CommentsOfBlog.belongsTo(models.Customer, { foreignKey: 'customerId'});
      CommentsOfBlog.belongsTo(models.TourGuide, { foreignKey: 'tourGuideId'});

      CommentsOfBlog.belongsTo(models.CommentsOfBlog, { as : 'Parent', foreignKey: 'parentCommentId'});
      CommentsOfBlog.hasMany(models.CommentsOfBlog, { as : 'SubComments', foreignKey: 'parentCommentId'});
    }
  };
  CommentsOfBlog.init({
    message: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'CommentsOfBlog',
  });
  return CommentsOfBlog;
};