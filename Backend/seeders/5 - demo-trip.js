'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        let data =  [{
            infoHotel: 'Bạc Liêu',
            infoVehicle: 'Đi về bằng xe',
            startDate: '21/11/2020',
            endDate: '25/11/2020',
            price: '3.879.000',
            childrenPrice: '1.940.000',
            babyPrice: '0',
            amount: 40,
            theRemainingAmount: 30,    
            isStatus: true,
            tourId: 1,
            tourGuideId: 1
        },        
        {
            infoHotel: 'Vinpearl Tây Ninh',
            infoVehicle: 'Đi về bằng xe',
            startDate: '28/11/2020',
            endDate: '30/11/2020',
            price: '1.879.000',
            childrenPrice: '940.000',
            babyPrice: '0',   
            amount: 40,
            theRemainingAmount: 10, 
            isStatus: true,
            tourId: 8,
            tourGuideId: 1
        },        
        {
            infoHotel: 'Vinpearl Tây Ninh',
            infoVehicle: 'Đi về bằng xe',
            startDate: '20/12/2020',
            endDate: '22/12/2020',
            price: '1.879.000',
            childrenPrice: '940.000',
            babyPrice: '0',    
            amount: 40,
            theRemainingAmount: 11,
            isStatus: true,
            tourId: 8,
            tourGuideId: 1
        }];
        data.map(item => {
            item.createdAt = Sequelize.literal('NOW()');
            item.updatedAt = Sequelize.literal('NOW()');
            return item;
        });
        return queryInterface.bulkInsert('Trips', data, {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Trips', null, {});
    }
};