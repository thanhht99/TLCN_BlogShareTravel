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
            Blog.belongsTo(models.Tour, { foreignKey: 'tourId' });
            Blog.belongsTo(models.TourGuide, { foreignKey: 'tourGuideId' });

        }
    };
    Blog.init({
        day1: DataTypes.STRING,
        content1: DataTypes.TEXT,
        imagePath1: DataTypes.TEXT,
        day2: DataTypes.STRING,
        content2: DataTypes.TEXT,
        imagePath2: DataTypes.TEXT,
        day3: DataTypes.STRING,
        content3: DataTypes.TEXT,
        imagePath3: DataTypes.TEXT,
        day4: DataTypes.STRING,
        content4: DataTypes.TEXT,
        imagePath4: DataTypes.TEXT,
        day5: DataTypes.STRING,
        content5: DataTypes.TEXT,
        imagePath5: DataTypes.TEXT,
        day6: DataTypes.STRING,
        content6: DataTypes.TEXT,
        imagePath6: DataTypes.TEXT,
        day7: DataTypes.STRING,
        content7: DataTypes.TEXT,
        imagePath7: DataTypes.TEXT,
        isStatus: DataTypes.BOOLEAN
    }, {
        sequelize,
        modelName: 'Blog',
    });
    return Blog;
};