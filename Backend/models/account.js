'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Account extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Account.hasMany(models.Customer, { foreignKey: 'accountId' });
            Account.hasMany(models.TourGuide, { foreignKey: 'accountId' });
            Account.hasMany(models.RegisterTrip, { foreignKey: 'accountId' });

        }
    };
    Account.init({
        username: DataTypes.STRING,
        password: DataTypes.STRING,
        isTourGuide: DataTypes.BOOLEAN,
        isCustomer: DataTypes.BOOLEAN,
        isAdmin: DataTypes.BOOLEAN,
        isSuperAdmin: DataTypes.BOOLEAN,
        isStatus: DataTypes.BOOLEAN
    }, {
        sequelize,
        modelName: 'Account',
    });
    return Account;
};