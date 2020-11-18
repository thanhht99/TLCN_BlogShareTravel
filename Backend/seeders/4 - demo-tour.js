'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        let data =  [     
        {
            name: 'DU LỊCH MỸ THO - CẦN THƠ - CÀ MAU - BẠC LIÊU - SÓC TRĂNG',
            summary: 'Đến Mỹ Tho thưởng thức trái cây theo mùa, nghe nhạc tài tử...',
            price: '3.879.000',
            time: '4 ngày 3 đêm',
            departureLocation: 'TP. HỒ CHÍ MINH',
            destination: 'MIỀN TÂY | ĐBSCL',
            amount: 3,
            avatarPath: 'https://drive.google.com/file/d/18yzNocS-sp8PsQqkus3o276lyXWAFb30/view',
            isStatus: true,
            tourGuideId: 1
        },
        {
            name: 'DU LỊCH HỒ TRÀM - TRẢI NGHIỆM ĐẲNG CẤP 5 SAO THE GRAND HO TRAM STRIP',
            summary: 'Trải nghiệm dịch vụ 5 sao cao cấp tại The Grand Ho Tram Strip...',
            price: '2.379.000',
            time: '2 ngày 1 đêm',
            departureLocation: 'TP. HỒ CHÍ MINH',
            destination: 'HỒ TRÀM',
            amount: 0,
            avatarPath: 'https://drive.google.com/file/d/1y6jUrQoB80p_NF7eGfFSSn08Ik2B2gyj/view?usp=sharing',
            isStatus: true,
            tourGuideId: 1
        },
        {
            name: 'DU LỊCH PHAN THIẾT - MŨI NÉ - LÀNG CHÀI XƯA',
            summary: 'Tham quan đồi cát vàng...',
            price: '2.379.000',
            time: '3 ngày 2 đêm',
            departureLocation: 'TP. HỒ CHÍ MINH',
            destination: 'PHAN THIẾT',
            amount: 4,
            avatarPath: 'https://drive.google.com/file/d/1sIkKlrVJdgV-lxJOoJkqI9S6VnIiGMDo/view?usp=sharing',
            isStatus: true,
            tourGuideId: 1
        }];
        data.map(item => {
            item.createdAt = Sequelize.literal('NOW()');
            item.updatedAt = Sequelize.literal('NOW()');
            return item;
        });
        return queryInterface.bulkInsert('Tours', data, {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Tours', null, {});
    }
};