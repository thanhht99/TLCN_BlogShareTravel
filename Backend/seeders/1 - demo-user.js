'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        let data =  [{
            name: 'SuperAdmin',
            email: '',
            phone: '',
            avatarPath: "/img/SuperAdmin.png",
            username: 'superadmin',
            password: 'superadmin',
            isAdmin: false,
            isSuperAdmin: true
        },
        {
            name: 'Admin',
            email: '',
            phone: '',
            avatarPath: "/img/Admin.png",
            username: 'admin',
            password: 'admin',
            isAdmin: true,
            isSuperAdmin: false
        },
        {            
            name: 'User',
            email: '',
            phone: '',
            avatarPath: "/img/User.png",
            username: 'user',
            password: 'user',
            isAdmin: false,
            isSuperAdmin: false
        }];
        data.map(item => {
            item.createdAt = Sequelize.literal('NOW()');
            item.updatedAt = Sequelize.literal('NOW()');
            return item;
        });
        return queryInterface.bulkInsert('Users', data, {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Users', null, {});
    }
};