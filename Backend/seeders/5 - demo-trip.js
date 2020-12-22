'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        let data = [{
                infoHotel: 'Bạc Liêu',
                infoVehicle: 'Đi về bằng xe',
                startDate: '21/11/2020',
                endDate: '25/11/2020',
                price: '3.879.000',
                childrenPrice: '1.940.000',
                babyPrice: '0',
                amount: 40,
                theRemainingAmount: 40,
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
                theRemainingAmount: 40,
                isStatus: true,
                tourId: 8,
                tourGuideId: 2
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
                theRemainingAmount: 40,
                isStatus: true,
                tourId: 8,
                tourGuideId: 3
            },
            //1
            {
                infoHotel: 'Resort Hàm Tiến - Mũi Né',
                infoVehicle: 'Đi về bằng xe',
                startDate: '21/12/2020',
                endDate: '24/12/2020',
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
                startDate: '25/12/2020',
                endDate: '28/12/2020',
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
                startDate: '30/12/2020',
                endDate: '2/1/2021',
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
                startDate: '4/1/2021',
                endDate: '7/1/2021',
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
                startDate: '10/1/2021',
                endDate: '13/1/2021',
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
                startDate: '15/1/2021',
                endDate: '18/1/2021',
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
                startDate: '20/1/2021',
                endDate: '23/1/2021',
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
                startDate: '25/1/2021',
                endDate: '28/1/2021',
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
                startDate: '30/1/2021',
                endDate: '2/2/2021',
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
                startDate: '5/2/2021',
                endDate: '8/2/2021',
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
                startDate: '10/2/2021',
                endDate: '13/2/2021',
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
                startDate: '15/2/2021',
                endDate: '18/2/2021',
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
                startDate: '20/2/2021',
                endDate: '23/2/2020',
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
                startDate: '25/2/2021',
                endDate: '28/2/2021',
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
                startDate: '1/3/2021',
                endDate: '4/3/2021',
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
                startDate: '5/3/2021',
                endDate: '8/3/2021',
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
                startDate: '10/3/2021',
                endDate: '13/3/2021',
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
                startDate: '15/3/2021',
                endDate: '18/3/2021',
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
                startDate: '20/3/2021',
                endDate: '23/3/2021',
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
                startDate: '25/3/2021',
                endDate: '28/3/2021',
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
                startDate: '20/12/2020',
                endDate: '24/12/2020',
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
                startDate: '25/12/2020',
                endDate: '29/12/2020',
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
                startDate: '30/12/2020',
                endDate: '3/1/2021',
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
                startDate: '5/1/2021',
                endDate: '09/1/2021',
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
                startDate: '10/1/2021',
                endDate: '14/1/2021',
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
                startDate: '15/1/2021',
                endDate: '19/1/2021',
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
                startDate: '20/1/2021',
                endDate: '24/1/2021',
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
                startDate: '25/1/2021',
                endDate: '29/1/2021',
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
                startDate: '30/1/2021',
                endDate: '4/2/2021',
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
                startDate: '5/2/2021',
                endDate: '9/2/2021',
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
                startDate: '10/2/2021',
                endDate: '14/2/2021',
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
                startDate: '15/2/2021',
                endDate: '19/2/2021',
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
                startDate: '20/2/2021',
                endDate: '24/2/2021',
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
                startDate: '25/2/2021',
                endDate: '1/3/2021',
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
                startDate: '2/3/2021',
                endDate: '6/3/2021',
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
                startDate: '8/3/2021',
                endDate: '12/3/2021',
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
                startDate: '15/3/2021',
                endDate: '19/3/2021',
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
                startDate: '20/3/2021',
                endDate: '24/3/2021',
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
                startDate: '25/3/2021',
                endDate: '29/3/2021',
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
                startDate: '30/3/2021',
                endDate: '4/4/2021',
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