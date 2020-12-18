'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        let data = [{
                name: 'Customer 1',
                identity: '1234567890',
                email: 'nguyenquocviet1999@gmail.com',
                address: 'Quận 6, TP HCM',
                phone: '0123456789',
                avatarPath: '../../assets/img/customer/user1.png',
                isStatus: true,
                accountId: 3
            },
            {
                name: 'Phan Văn Đức',
                identity: '1478529510',
                email: 'phanvanduc1999@gmail.com',
                address: 'Quận 10, TP HCM',
                phone: '0123456781',
                avatarPath: '../../assets/img/customer/user1.png',
                isStatus: true,
                accountId: 6
            },
            {
                name: 'Nguyễn Công Phượng',
                identity: '281156415',
                email: 'congphuong.ng@gmail.com',
                address: 'Quận 1, TP HCM',
                phone: '0147841456',
                avatarPath: '../../assets/img/customer/user2.png',
                isStatus: true,
                accountId: 7
            }
        ];
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