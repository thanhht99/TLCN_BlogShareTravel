'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        let data = [{
                name: 'Tour Guide Master',
                gender: 'Male',
                identity: '1234567890',
                dateOfBirth: '26/07/1999',
                email: 'hoangtienthanh1999@gmail.com',
                language: 'English, Vietnamese',
                address: 'TP TDM, Bình Dương',
                phone: '0456789159',
                avatarPath: 'https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/120852676_1544618902405442_305999119776730909_n.jpg?_nc_cat=105&ccb=2&_nc_sid=09cbfe&_nc_ohc=6EmJIJuysI8AX_KnVoT&_nc_ht=scontent.fsgn2-1.fna&oh=fd296ce2c12a0010d95342ac2de75056&oe=5FD8CF4E',
                tripNumber: 12,
                isStatus: true,
                accountId: 2
            },
            {
                name: 'Nguyễn Trung Đức',
                gender: 'Male',
                identity: '456415845',
                dateOfBirth: '21/08/1999',
                email: 'trungduc.ng@gmail.com',
                language: 'English, Vietnamese, French, German',
                address: 'Quận 1, TP HCM',
                phone: '0145987485',
                avatarPath: '../../assets/img/tourguide/huongdan1.jpg',
                tripNumber: 10,
                isStatus: true,
                accountId: 4
            },
            {
                name: 'Phan Thị Thắm',
                gender: 'Female',
                identity: '215456154',
                dateOfBirth: '26/11/1991',
                email: 'phanthitham@gmail.com',
                language: 'English, Vietnamese, Italian',
                address: 'TP TDM, Bình Dương',
                phone: '0456789159',
                avatarPath: '../../assets/img/tourguide/huongdan2.jpg',
                tripNumber: 2,
                isStatus: true,
                accountId: 5
            }
        ];
        data.map(item => {
            item.createdAt = Sequelize.literal('NOW()');
            item.updatedAt = Sequelize.literal('NOW()');
            return item;
        });
        return queryInterface.bulkInsert('TourGuides', data, {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('TourGuides', null, {});
    }
};