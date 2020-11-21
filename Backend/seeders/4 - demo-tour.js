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
            avatarPath: 'https://www.saigontourist.net/uploads/destination/TrongNuoc/Mientay/My-tho-Vinh-tranh-pagoda.jpg',
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
            avatarPath: 'https://www.saigontourist.net/uploads/destination/TrongNuoc/Vungtau/ho-tram-outside.jpg',
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
            avatarPath: 'https://www.saigontourist.net/uploads/destination/TrongNuoc/Phanthiet/Mui-Ne-beach_1085095151.jpg',
            isStatus: true,
            tourGuideId: 1
        },
        {
            name: 'DU LỊCH ĐÀ LẠT - THÁC DATANLA - ĐỒI CHÈ CẦU ĐẤT -TRANG TRẠI RAU & HOA - THÁC DAMBRI',
            summary: 'Tham quan thác Dambri - ngọn thác hùng vĩ tại cao nguyên Bảo Lộc...',
            price: '3.079.000',
            time: '4 ngày 3 đêm',
            departureLocation: 'TP. HỒ CHÍ MINH',
            destination: 'ĐÀ LẠT',
            amount: 14,
            avatarPath: '../../assets/img/tour/dalat1.jpg',
            isStatus: true,
            tourGuideId: 1
        },
        {
            name: 'DU LỊCH SÓC TRĂNG - BẠC LIÊU - CÀ MAU - HÀ TIÊN - CHÂU ĐỐC- SA ĐÉC',
            summary: 'Tham quan chụp ảnh tại nhà máy Điện gió Bạc Liêu. - Chụp ảnh...',
            price: '5.129.000',
            time: '5 ngày 4 đêm',
            departureLocation: 'TP. HỒ CHÍ MINH',
            destination: 'MIỀN TÂY',
            amount: 1,
            avatarPath: '../../assets/img/tour/mientay1.jpg',
            isStatus: true,
            tourGuideId: 1
        },
        {
            name: 'DU LỊCH SÓC TRĂNG - BẠC LIÊU - CÀ MAU - HÀ TIÊN - CHÂU ĐỐC- SA ĐÉC',
            summary: 'Tham quan khu du lịch Hòn Lao - đảo Khỉ, khu du lịch sinh...',
            price: '2.979.000',
            time: '4 ngày 3 đêm',
            departureLocation: 'TP. HỒ CHÍ MINH',
            destination: 'NHA TRANG',
            amount: 17,
            avatarPath: '../../assets/img/tour/nhatrang1.jpg',
            isStatus: true,
            tourGuideId: 1
        },
        {
            name: 'DU LỊCH ĐÀ LẠT - HỒ TUYỀN LÂM - ĐƯỜNG HẦM ĐIÊU KHẮC',
            summary: 'Tham quan Đường hầm điêu khắc đất đỏ (Đà Lạt Star)...',
            price: '2.379.000',
            time: '3 ngày 2 đêm',
            departureLocation: 'TP. HỒ CHÍ MINH',
            destination: 'ĐÀ LẠT',
            amount: 7,
            avatarPath: '../../assets/img/tour/dalat2.jpg',
            isStatus: true,
            tourGuideId: 1
        },
        {
            name: 'DU LỊCH TÂY NINH - TÒA THÁNH TÂY NINH - NÚI BÀ ĐEN - HỒ DẦU TIẾNG',
            summary: 'Chinh phục Núi Bà Đen- ngon núi cao nhất Đông Nam Bộ  chỉ mất...',
            price: '1.879.000',
            time: '2 ngày 1 đêm',
            departureLocation: 'TP. HỒ CHÍ MINH',
            destination: 'TÂY NINH',
            amount: 10,
            avatarPath: '../../assets/img/tour/tayninh1.jpg',
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