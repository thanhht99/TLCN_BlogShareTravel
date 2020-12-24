'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        let data = [{
                nameRegister: 'Trần Thành Phát',
                gender: 'Nam',
                identity: '025877996',
                email: 'nguyenquocviet1999@gmail.com',
                phone: '0967181299',
                address: 'Long An',
                adults: 2,
                children: 1,
                baby: 3,
                totalMoney: '9.698.000',
                maTour: 1111,
                isConfirm: false,
                accountId: 3,
                tripId: 1
            },
            {
                nameRegister: 'Phạm Dĩ Bằng',
                gender: 'Nam',
                identity: '015678934',
                email: 'nguyenquocviet1999@gmail.com',
                phone: '0972666589',
                address: 'Bình Phước',
                adults: 3,
                children: 1,
                baby: 0,
                totalMoney: '13.577.000',
                maTour: 1111,
                isConfirm: false,
                accountId: 6,
                tripId: 1
            },
            {
                nameRegister: 'Hoàng Tiến Thành',
                gender: 'Nam',
                identity: '0581479654',
                email: 'nguyenquocviet1999@gmail.com',
                phone: '0689756321',
                address: 'Bình Dương',
                adults: 4,
                children: 0,
                baby: 2,
                totalMoney: '15.516.000',
                maTour: 1111,
                isConfirm: false,
                accountId: 7,
                tripId: 1
            },
            {
                nameRegister: 'Đào Sơn Tùng',
                gender: 'Nam',
                identity: '025466653',
                email: 'vietnqv1812@gmail.com',
                phone: '0909929969',
                address: 'Quận 3',
                adults: 2,
                children: 1,
                baby: 2,
                totalMoney: '4.698.000',
                maTour: 8122,
                isConfirm: false,
                accountId: 7,
                tripId: 2
            },
            {
                nameRegister: 'Nguyễn Trọng Luật',
                gender: 'Nam',
                identity: '025868688',
                email: 'phanvanduc1999@gmail.com',
                phone: '0967086868',
                address: 'Quận thủ đức',
                adults: 5,
                children: 2,
                baby: 3,
                totalMoney: '11.275.000',
                maTour: 8122,
                isConfirm: false,
                accountId: 3,
                tripId: 2
            },
            {
                nameRegister: 'Phan Xuân Tuấn Anh',
                gender: 'Nam',
                identity: '025844663',
                email: 'phanvanduc1999@gmail.com',
                phone: '0962250207',
                address: 'Quận Thủ Đức',
                adults: 7,
                children: 3,
                baby: 5,
                totalMoney: '15.973.000',
                maTour: 8122,
                isConfirm: false,
                accountId: 2,
                tripId: 2
            },
            {
                nameRegister: 'Nguyễn Hứa Huy',
                gender: 'Nam',
                identity: '024677119',
                email: 'phanvanduc1999@gmail.com',
                phone: '0123456789',
                address: 'Quận Thủ Đức',
                adults: 5,
                children: 3,
                baby: 2,
                totalMoney: '12.215.000',
                maTour: 8122,
                isConfirm: false,
                accountId: 6,
                tripId: 2
            },
            {
                nameRegister: 'Nguyễn Thanh Trúc',
                gender: 'Nữ',
                identity: '025830810',
                email: 'phanvanduc1999@gmail.com',
                phone: '0987180308',
                address: 'Quận 1',
                adults: 3,
                children: 1,
                baby: 0,
                totalMoney: '6.577.000',
                maTour: 8133,
                isConfirm: false,
                accountId: 6,
                tripId: 3
            },
            {
                nameRegister: 'Phạm Thị Thanh Mỹ',
                gender: 'Nữ',
                identity: '014722369',
                email: 'phanvanduc1999@gmail.com',
                phone: '0147258369',
                address: 'Tây Ninh',
                adults: 2,
                children: 1,
                baby: 0,
                totalMoney: '4.698.000',
                maTour: 8133,
                isConfirm: false,
                accountId: 7,
                tripId: 3
            },
            {
                nameRegister: 'Nguyễn Ngọc Kiều Vy',
                gender: 'Nam',
                identity: '014739792',
                email: 'phanvanduc1999@gmail.com',
                phone: '0258003979',
                address: 'Quận 5',
                adults: 4,
                children: 2,
                baby: 0,
                totalMoney: '9.396.000',
                maTour: 8133,
                isConfirm: false,
                accountId: 4,
                tripId: 3
            }
        ];
        data.map(item => {
            item.createdAt = Sequelize.literal('NOW()');
            item.updatedAt = Sequelize.literal('NOW()');
            return item;
        });
        return queryInterface.bulkInsert('RegisterTrips', data, {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('RegisterTrips', null, {});
    }
};