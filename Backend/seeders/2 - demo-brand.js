'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        let data =  [{
            name: 'Saigontourist',
            imagePath: '',
            description: 'Lữ hành Saigontourist, thương hiệu lữ hành hàng đầu Việt Nam Thương hiệu quốc gia. Tổng đài: 1900 1808. Email: info@saigontourist.net'
        },
        {
            name: 'Vietravel',
            imagePath: '',
            description: 'Vietravel - Nhà tổ chức du lịch chuyên nghiệp. Website travel.com.vn tự hào là mạng bán tour du lịch trực tuyến hàng đầu tại Việt Nam, với hơn 1.000 tour'
        },
        {            
            name: 'Datviettour',
            imagePath: '',
            description: 'Công Ty Đất Việt Tour chuyên tổ chức tour du lịch trong và ngoài nước,du lịch team building,cho thuê xe,đặt vé máy bay.Cam kết dịch vụ tốt,giá ưu đãi.'
        },
        {
            name: 'Du lịch tự túc',
            imagePath: '',
            description: ''
        },
        {            
            name: 'Phượt',
            imagePath: '',
            description: ''
        }];
        data.map(item => {
            item.createdAt = Sequelize.literal('NOW()');
            item.updatedAt = Sequelize.literal('NOW()');
            return item;
        });
        return queryInterface.bulkInsert('Brands', data, {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Brands', null, {});
    }
};