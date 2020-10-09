'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CommentsOfTour extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      CommentsOfTour.belongsTo(models.Tour, { foreignKey: 'tourId'});
      CommentsOfTour.belongsTo(models.Customer, { foreignKey: 'customerId'});
      CommentsOfTour.belongsTo(models.TourGuide, { foreignKey: 'tourGuideId'});

      CommentsOfTour.belongsTo(models.CommentsOfTour, { as : 'Parent', foreignKey: 'parentCommentId'});
      CommentsOfTour.hasMany(models.CommentsOfTour, { as : 'SubComments', foreignKey: 'parentCommentId'});
    }
  };
  CommentsOfTour.init({
    message: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'CommentsOfTour',
  });
  return CommentsOfTour;
};