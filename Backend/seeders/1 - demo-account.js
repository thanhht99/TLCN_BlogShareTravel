'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        let data =  [{
            username: 'admin',
            password: '$2b$10$chY2mPBjMkXoLf1OmvODHO7G2/HHSkA4O1lzCM6DqnNPbhuMfPCPa',
            isTourGuide: false,
            isCustomer: false,
            isAdmin: true,
            isSuperAdmin: false,
            isStatus: false,
        },        
        {
            username: 'tourguide',
            password: '$2b$10$chY2mPBjMkXoLf1OmvODHO7G2/HHSkA4O1lzCM6DqnNPbhuMfPCPa',
            isTourGuide: true,
            isCustomer: false,
            isAdmin: false,
            isSuperAdmin: false,
            isStatus: false,
        },        
        {
            username: 'customer',
            password: '$2b$10$chY2mPBjMkXoLf1OmvODHO7G2/HHSkA4O1lzCM6DqnNPbhuMfPCPa',
            isTourGuide: false,
            isCustomer: true,
            isAdmin: false,
            isSuperAdmin: false,
            isStatus: false,
        }];
        data.map(item => {
            item.createdAt = Sequelize.literal('NOW()');
            item.updatedAt = Sequelize.literal('NOW()');
            return item;
        });
        return queryInterface.bulkInsert('Accounts', data, {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Accounts', null, {});
    }
};