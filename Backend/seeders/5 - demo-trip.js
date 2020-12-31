'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        let data = [{
                infoHotel: 'Bạc Liêu',
                infoVehicle: 'Đi về bằng xe',
                startDate: '2020-11-21',
                endDate: '2020-11-25',
                price: '3.879.000',
                childrenPrice: '1.940.000',
                babyPrice: '0',
                amount: 40,
                theRemainingAmount: 24,
                isStatus: true,
                tourId: 1,
                tourGuideId: 1
            },
            {
                infoHotel: 'Vinpearl Tây Ninh',
                infoVehicle: 'Đi về bằng xe',
                startDate: '2020-11-28',
                endDate: '2020-11-30',
                price: '1.879.000',
                childrenPrice: '940.000',
                babyPrice: '0',
                amount: 40,
                theRemainingAmount: 0,
                isStatus: true,
                tourId: 8,
                tourGuideId: 2
            },
            {
                infoHotel: 'Vinpearl Tây Ninh',
                infoVehicle: 'Đi về bằng xe',
                startDate: '2020-11-20',
                endDate: '2020-11-22',
                price: '1.879.000',
                childrenPrice: '940.000',
                babyPrice: '0',
                amount: 40,
                theRemainingAmount: 27,
                isStatus: true,
                tourId: 8,
                tourGuideId: 3
            },
            //1
            {
                infoHotel: 'Resort Hàm Tiến - Mũi Né',
                infoVehicle: 'Đi về bằng xe',
                startDate: '2020-12-21',
                endDate: '2020-12-24',
                price: '2.379.000',
                childrenPrice: '1.190.000',
                babyPrice: '0',
                amount: 40,
                theRemainingAmount: 40,
                isStatus: true,
                tourId: 3,
                tourGuideId: 1
            },
            //2
            {
                infoHotel: 'Resort Hàm Tiến - Mũi Né',
                infoVehicle: 'Đi về bằng xe',
                startDate: '2021-11-25',
                endDate: '2021-11-28',
                price: '2.379.000',
                childrenPrice: '1.190.000',
                babyPrice: '0',
                amount: 40,
                theRemainingAmount: 40,
                isStatus: true,
                tourId: 3,
                tourGuideId: 2
            },
            //3
            {
                infoHotel: 'Resort Hàm Tiến - Mũi Né',
                infoVehicle: 'Đi về bằng xe',
                startDate: '2021-11-21',
                endDate: '2021-11-24',
                price: '2.379.000',
                childrenPrice: '1.190.000',
                babyPrice: '0',
                amount: 40,
                theRemainingAmount: 40,
                isStatus: true,
                tourId: 3,
                tourGuideId: 3
            },
            //4
            {
                infoHotel: 'Resort Hàm Tiến - Mũi Né',
                infoVehicle: 'Đi về bằng xe',
                startDate: '2021-11-25',
                endDate: '2021-11-28',
                price: '2.379.000',
                childrenPrice: '1.190.000',
                babyPrice: '0',
                amount: 40,
                theRemainingAmount: 40,
                isStatus: true,
                tourId: 3,
                tourGuideId: 2
            },
            //5
            {
                infoHotel: 'Resort Hàm Tiến - Mũi Né',
                infoVehicle: 'Đi về bằng xe',
                startDate: '2021-01-21',
                endDate: '2021-01-24',
                price: '2.379.000',
                childrenPrice: '1.190.000',
                babyPrice: '0',
                amount: 40,
                theRemainingAmount: 40,
                isStatus: true,
                tourId: 3,
                tourGuideId: 3
            },
            //6
            {
                infoHotel: 'Resort Hàm Tiến - Mũi Né',
                infoVehicle: 'Đi về bằng xe',
                startDate: '2021-07-21',
                endDate: '2021-07-24',
                price: '2.379.000',
                childrenPrice: '1.190.000',
                babyPrice: '0',
                amount: 40,
                theRemainingAmount: 40,
                isStatus: true,
                tourId: 3,
                tourGuideId: 3
            },
            //7
            {
                infoHotel: 'Resort Hàm Tiến - Mũi Né',
                infoVehicle: 'Đi về bằng xe',
                startDate: '2021-08-21',
                endDate: '2021-08-24',
                price: '2.379.000',
                childrenPrice: '1.190.000',
                babyPrice: '0',
                amount: 40,
                theRemainingAmount: 40,
                isStatus: true,
                tourId: 3,
                tourGuideId: 1
            },
            //8
            {
                infoHotel: 'Resort Hàm Tiến - Mũi Né',
                infoVehicle: 'Đi về bằng xe',
                startDate: '2021-09-21',
                endDate: '2021-09-24',
                price: '2.379.000',
                childrenPrice: '1.190.000',
                babyPrice: '0',
                amount: 40,
                theRemainingAmount: 40,
                isStatus: true,
                tourId: 3,
                tourGuideId: 2
            },
            //9
            {
                infoHotel: 'Resort Hàm Tiến - Mũi Né',
                infoVehicle: 'Đi về bằng xe',
                startDate: '2021-04-21',
                endDate: '2021-04-24',
                price: '2.379.000',
                childrenPrice: '1.190.000',
                babyPrice: '0',
                amount: 40,
                theRemainingAmount: 40,
                isStatus: true,
                tourId: 3,
                tourGuideId: 3
            },
            //10
            {
                infoHotel: 'Resort Hàm Tiến - Mũi Né',
                infoVehicle: 'Đi về bằng xe',
                startDate: '2021-05-21',
                endDate: '2021-05-24',
                price: '2.379.000',
                childrenPrice: '1.190.000',
                babyPrice: '0',
                amount: 40,
                theRemainingAmount: 40,
                isStatus: true,
                tourId: 3,
                tourGuideId: 1
            },
            //11
            {
                infoHotel: 'Resort Hàm Tiến - Mũi Né',
                infoVehicle: 'Đi về bằng xe',
                startDate: '2021-11-01',
                endDate: '2021-11-04',
                price: '2.379.000',
                childrenPrice: '1.190.000',
                babyPrice: '0',
                amount: 40,
                theRemainingAmount: 40,
                isStatus: true,
                tourId: 3,
                tourGuideId: 2
            },
            //12
            {
                infoHotel: 'Resort Hàm Tiến - Mũi Né',
                infoVehicle: 'Đi về bằng xe',
                startDate: '2021-02-01',
                endDate: '2021-02-04',
                price: '2.379.000',
                childrenPrice: '1.190.000',
                babyPrice: '0',
                amount: 40,
                theRemainingAmount: 40,
                isStatus: true,
                tourId: 3,
                tourGuideId: 3
            },
            //13
            {
                infoHotel: 'Resort Hàm Tiến - Mũi Né',
                infoVehicle: 'Đi về bằng xe',
                startDate: '2021-03-01',
                endDate: '2021-03-04',
                price: '2.379.000',
                childrenPrice: '1.190.000',
                babyPrice: '0',
                amount: 40,
                theRemainingAmount: 40,
                isStatus: true,
                tourId: 3,
                tourGuideId: 1
            },
            //14
            {
                infoHotel: 'Resort Hàm Tiến - Mũi Né',
                infoVehicle: 'Đi về bằng xe',
                startDate: '2021-04-01',
                endDate: '2021-04-04',
                price: '2.379.000',
                childrenPrice: '1.190.000',
                babyPrice: '0',
                amount: 40,
                theRemainingAmount: 40,
                isStatus: true,
                tourId: 3,
                tourGuideId: 1
            },
            //15
            {
                infoHotel: 'Resort Hàm Tiến - Mũi Né',
                infoVehicle: 'Đi về bằng xe',
                startDate: '2021-05-01',
                endDate: '2021-05-04',
                price: '2.379.000',
                childrenPrice: '1.190.000',
                babyPrice: '0',
                amount: 40,
                theRemainingAmount: 40,
                isStatus: true,
                tourId: 3,
                tourGuideId: 2
            },
            //16
            {
                infoHotel: 'Resort Hàm Tiến - Mũi Né',
                infoVehicle: 'Đi về bằng xe',
                startDate: '2021-06-01',
                endDate: '2021-06-04',
                price: '2.379.000',
                childrenPrice: '1.190.000',
                babyPrice: '0',
                amount: 40,
                theRemainingAmount: 40,
                isStatus: true,
                tourId: 3,
                tourGuideId: 3
            },
            //17
            {
                infoHotel: 'Resort Hàm Tiến - Mũi Né',
                infoVehicle: 'Đi về bằng xe',
                startDate: '2021-07-01',
                endDate: '2021-07-04',
                price: '2.379.000',
                childrenPrice: '1.190.000',
                babyPrice: '0',
                amount: 40,
                theRemainingAmount: 40,
                isStatus: true,
                tourId: 3,
                tourGuideId: 1
            },
            //18
            {
                infoHotel: 'Resort Hàm Tiến - Mũi Né',
                infoVehicle: 'Đi về bằng xe',
                startDate: '2021-11-07',
                endDate: '2021-11-010',
                price: '2.379.000',
                childrenPrice: '1.190.000',
                babyPrice: '0',
                amount: 40,
                theRemainingAmount: 40,
                isStatus: true,
                tourId: 3,
                tourGuideId: 2
            },
            //19
            {
                infoHotel: 'Resort Hàm Tiến - Mũi Né',
                infoVehicle: 'Đi về bằng xe',
                startDate: '2021-01-07',
                endDate: '2021-01-010',
                price: '2.379.000',
                childrenPrice: '1.190.000',
                babyPrice: '0',
                amount: 40,
                theRemainingAmount: 40,
                isStatus: true,
                tourId: 3,
                tourGuideId: 3
            },
            //20
            {
                infoHotel: 'Resort Hàm Tiến - Mũi Né',
                infoVehicle: 'Đi về bằng xe',
                startDate: '2021-02-07',
                endDate: '2021-02-010',
                price: '2.379.000',
                childrenPrice: '1.190.000',
                babyPrice: '0',
                amount: 40,
                theRemainingAmount: 40,
                isStatus: true,
                tourId: 3,
                tourGuideId: 1
            },
            //1
            {
                infoHotel: 'Khách sạn 3 sao ĐÀ LẠT',
                infoVehicle: 'Đi về bằng xe',
                startDate: '2021-11-07',
                endDate: '2021-11-011',
                price: '3.079.000',
                childrenPrice: '1.540.000',
                babyPrice: '0',
                amount: 40,
                theRemainingAmount: 40,
                isStatus: true,
                tourId: 4,
                tourGuideId: 1
            },
            //2
            {
                infoHotel: 'Khách sạn 3 sao ĐÀ LẠT',
                infoVehicle: 'Đi về bằng xe',
                startDate: '2021-12-07',
                endDate: '2021-12-011',
                price: '3.079.000',
                childrenPrice: '1.540.000',
                babyPrice: '0',
                amount: 40,
                theRemainingAmount: 40,
                isStatus: true,
                tourId: 4,
                tourGuideId: 2
            },
            //3
            {
                infoHotel: 'Khách sạn 3 sao ĐÀ LẠT',
                infoVehicle: 'Đi về bằng xe',
                startDate: '2021-01-07',
                endDate: '2021-01-011',
                price: '3.079.000',
                childrenPrice: '1.540.000',
                babyPrice: '0',
                amount: 40,
                theRemainingAmount: 40,
                isStatus: true,
                tourId: 4,
                tourGuideId: 2
            },
            //4
            {
                infoHotel: 'Khách sạn 3 sao ĐÀ LẠT',
                infoVehicle: 'Đi về bằng xe',
                startDate: '2021-02-07',
                endDate: '2021-02-011',
                price: '3.079.000',
                childrenPrice: '1.540.000',
                babyPrice: '0',
                amount: 40,
                theRemainingAmount: 40,
                isStatus: true,
                tourId: 4,
                tourGuideId: 3
            },
            //5
            {
                infoHotel: 'Khách sạn 3 sao ĐÀ LẠT',
                infoVehicle: 'Đi về bằng xe',
                startDate: '2021-03-07',
                endDate: '2021-03-011',
                price: '3.079.000',
                childrenPrice: '1.540.000',
                babyPrice: '0',
                amount: 40,
                theRemainingAmount: 40,
                isStatus: true,
                tourId: 4,
                tourGuideId: 3
            },
            //6
            {
                infoHotel: 'Khách sạn 3 sao ĐÀ LẠT',
                infoVehicle: 'Đi về bằng xe',
                startDate: '2021-04-07',
                endDate: '2021-04-011',
                price: '3.079.000',
                childrenPrice: '1.540.000',
                babyPrice: '0',
                amount: 40,
                theRemainingAmount: 40,
                isStatus: true,
                tourId: 4,
                tourGuideId: 2
            },
            //7
            {
                infoHotel: 'Khách sạn 3 sao ĐÀ LẠT',
                infoVehicle: 'Đi về bằng xe',
                startDate: '2021-05-07',
                endDate: '2021-05-011',
                price: '3.079.000',
                childrenPrice: '1.540.000',
                babyPrice: '0',
                amount: 40,
                theRemainingAmount: 40,
                isStatus: true,
                tourId: 4,
                tourGuideId: 1
            },
            //8
            {
                infoHotel: 'Khách sạn 3 sao ĐÀ LẠT',
                infoVehicle: 'Đi về bằng xe',
                startDate: '2021-06-07',
                endDate: '2021-06-011',
                price: '3.079.000',
                childrenPrice: '1.540.000',
                babyPrice: '0',
                amount: 40,
                theRemainingAmount: 40,
                isStatus: true,
                tourId: 4,
                tourGuideId: 3
            },
            //9
            {
                infoHotel: 'Khách sạn 3 sao ĐÀ LẠT',
                infoVehicle: 'Đi về bằng xe',
                startDate: '2021-07-07',
                endDate: '2021-07-011',
                price: '3.079.000',
                childrenPrice: '1.540.000',
                babyPrice: '0',
                amount: 40,
                theRemainingAmount: 40,
                isStatus: true,
                tourId: 4,
                tourGuideId: 2
            },
            //10
            {
                infoHotel: 'Khách sạn 3 sao ĐÀ LẠT',
                infoVehicle: 'Đi về bằng xe',
                startDate: '2021-11-25',
                endDate: '2021-11-29',
                price: '3.079.000',
                childrenPrice: '1.540.000',
                babyPrice: '0',
                amount: 40,
                theRemainingAmount: 40,
                isStatus: true,
                tourId: 4,
                tourGuideId: 1
            },
            //11
            {
                infoHotel: 'Khách sạn 3 sao ĐÀ LẠT',
                infoVehicle: 'Đi về bằng xe',
                startDate: '2021-02-23',
                endDate: '2021-02-27',
                price: '3.079.0000',
                childrenPrice: '1.540.000',
                babyPrice: '0',
                amount: 40,
                theRemainingAmount: 40,
                isStatus: true,
                tourId: 4,
                tourGuideId: 2
            },
            //12
            {
                infoHotel: 'Khách sạn 3 sao ĐÀ LẠT',
                infoVehicle: 'Đi về bằng xe',
                startDate: '2021-03-25',
                endDate: '2021-03-29',
                price: '3.079.000',
                childrenPrice: '1.540.000',
                babyPrice: '0',
                amount: 40,
                theRemainingAmount: 40,
                isStatus: true,
                tourId: 4,
                tourGuideId: 2
            },
            //13
            {
                infoHotel: 'Khách sạn 3 sao ĐÀ LẠT',
                infoVehicle: 'Đi về bằng xe',
                startDate: '2021-04-25',
                endDate: '2021-04-29',
                price: '3.079.000',
                childrenPrice: '1.540.000',
                babyPrice: '0',
                amount: 40,
                theRemainingAmount: 40,
                isStatus: true,
                tourId: 4,
                tourGuideId: 3
            },
            //14
            {
                infoHotel: 'Khách sạn 3 sao ĐÀ LẠT',
                infoVehicle: 'Đi về bằng xe',
                startDate: '2021-05-25',
                endDate: '2021-05-29',
                price: '3.079.000',
                childrenPrice: '1.540.000',
                babyPrice: '0',
                amount: 40,
                theRemainingAmount: 40,
                isStatus: true,
                tourId: 4,
                tourGuideId: 3
            },
            //15
            {
                infoHotel: 'Khách sạn 3 sao ĐÀ LẠT',
                infoVehicle: 'Đi về bằng xe',
                startDate: '2021-06-25',
                endDate: '2021-06-29',
                price: '3.079.000',
                childrenPrice: '1.540.000',
                babyPrice: '0',
                amount: 40,
                theRemainingAmount: 40,
                isStatus: true,
                tourId: 4,
                tourGuideId: 1
            },
            //16
            {
                infoHotel: 'Khách sạn 3 sao ĐÀ LẠT',
                infoVehicle: 'Đi về bằng xe',
                startDate: '2021-07-25',
                endDate: '2021-07-29',
                price: '3.079.000',
                childrenPrice: '1.540.000',
                babyPrice: '0',
                amount: 40,
                theRemainingAmount: 40,
                isStatus: true,
                tourId: 4,
                tourGuideId: 1
            },
            //17
            {
                infoHotel: 'Khách sạn 3 sao ĐÀ LẠT',
                infoVehicle: 'Đi về bằng xe',
                startDate: '2021-08-25',
                endDate: '2021-08-29',
                price: '3.079.000',
                childrenPrice: '1.540.000',
                babyPrice: '0',
                amount: 40,
                theRemainingAmount: 40,
                isStatus: true,
                tourId: 4,
                tourGuideId: 3
            },
            //18
            {
                infoHotel: 'Khách sạn 3 sao ĐÀ LẠT',
                infoVehicle: 'Đi về bằng xe',
                startDate: '2021-09-25',
                endDate: '2021-09-29',
                price: '3.079.000',
                childrenPrice: '1.540.000',
                babyPrice: '0',
                amount: 40,
                theRemainingAmount: 40,
                isStatus: true,
                tourId: 4,
                tourGuideId: 2
            },
            //19
            {
                infoHotel: 'Khách sạn 3 sao ĐÀ LẠT',
                infoVehicle: 'Đi về bằng xe',
                startDate: '2021-11-013',
                endDate: '2021-11-017',
                price: '3.079.000',
                childrenPrice: '1.540.000',
                babyPrice: '0',
                amount: 40,
                theRemainingAmount: 40,
                isStatus: true,
                tourId: 4,
                tourGuideId: 2
            },
            //20
            {
                infoHotel: 'Khách sạn 3 sao ĐÀ LẠT',
                infoVehicle: 'Đi về bằng xe',
                startDate: '2021-01-013',
                endDate: '2021-01-017',
                price: '3.079.000',
                childrenPrice: '1.540.000',
                babyPrice: '0',
                amount: 40,
                theRemainingAmount: 40,
                isStatus: true,
                tourId: 4,
                tourGuideId: 3
            },
        ];
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