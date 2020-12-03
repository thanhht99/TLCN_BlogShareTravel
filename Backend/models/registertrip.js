'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class RegisterTrip extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            RegisterTrip.belongsTo(models.Trip, { foreignKey: 'tripId' });
            RegisterTrip.belongsTo(models.Account, { foreignKey: 'accountId' });
        }
    };
    RegisterTrip.init({
        nameRegister: DataTypes.STRING,
        gender: DataTypes.STRING,
        identity: DataTypes.STRING,
        email: DataTypes.STRING,
        phone: DataTypes.STRING,
        address: DataTypes.STRING,
        adults: DataTypes.INTEGER,
        children: DataTypes.INTEGER,
        baby: DataTypes.INTEGER,
        isConfirm: DataTypes.BOOLEAN,
    }, {
        sequelize,
        modelName: 'RegisterTrip',
    });
    return RegisterTrip;
};