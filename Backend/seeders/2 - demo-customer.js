'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        let data =  [     
        {
            name: 'Customer 1',
            identity: '1234567890',
            email: 'nguyenquocviet1999@gmail.com',
            address: 'Quận 6, TP HCM',
            phone: '0123456789',
            avatarPath: 'https://scontent.fsgn2-5.fna.fbcdn.net/v/t1.0-9/53570526_1262093393964622_3394776729540100096_o.jpg?_nc_cat=104&ccb=2&_nc_sid=a4a2d7&_nc_ohc=0iX7PI4-2hkAX9-vhUC&_nc_ht=scontent.fsgn2-5.fna&oh=9f4575c9a7522097528fa4ec41ea46c9&oe=5FDB3FC4',
            isStatus: true,
            accountId: 3
        }];
        data.map(item => {
            item.createdAt = Sequelize.literal('NOW()');
            item.updatedAt = Sequelize.literal('NOW()');
            return item;
        });
        return queryInterface.bulkInsert('Customers', data, {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Customers', null, {});
    }
};