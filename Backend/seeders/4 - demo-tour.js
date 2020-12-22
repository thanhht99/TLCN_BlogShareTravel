'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        let data = [{
                //1
                name: 'DU LỊCH MỸ THO - CẦN THƠ - CÀ MAU - BẠC LIÊU - SÓC TRĂNG',
                summary: 'Tham quan chợ nổi Cái Răng - một chợ nổi lớn của Đồng Bằng sông Cửu Long...',
                price: '3.879.000',
                time: '4 ngày 3 đêm',
                departureLocation: 'TP. HỒ CHÍ MINH',
                destination: 'MIỀN TÂY | ĐBSCL',
                amount: 50,
                avatarPath: 'https://www.saigontourist.net/uploads/destination/TrongNuoc/Mientay/My-tho-Vinh-tranh-pagoda.jpg',
                isStatus: true,
                tourGuideId: 1
            },
            {
                //2
                name: 'DU LỊCH HỒ TRÀM - TRẢI NGHIỆM ĐẲNG CẤP 5 SAO THE GRAND HO TRAM STRIP',
                summary: 'Với khu vực bãi biển riêng trên dải bãi biển Hồ Tràm, The Grand Ho Tram Resort & Casino là resort...',
                price: '2.379.000',
                time: '2 ngày 1 đêm',
                departureLocation: 'TP. HỒ CHÍ MINH',
                destination: 'HỒ TRÀM',
                amount: 50,
                avatarPath: 'https://www.saigontourist.net/uploads/destination/TrongNuoc/Vungtau/ho-tram-outside.jpg',
                isStatus: true,
                tourGuideId: 1
            },
            
                //3
                name: 'DU LỊCH PHAN THIẾT - MŨI NÉ - LÀNG CHÀI XƯA',
                summary: 'Tham quan đồi cát vàng tác động của gió biển tạo nên những hình dạng rất tuyệt vời...',
                price: '2.379.000',
                time: '3 ngày 2 đêm',
                departureLocation: 'TP. HỒ CHÍ MINH',
                destination: 'PHAN THIẾT',
                amount: 50,
                avatarPath: 'https://www.saigontourist.net/uploads/destination/TrongNuoc/Phanthiet/Mui-Ne-beach_1085095151.jpg',
                isStatus: true,
                tourGuideId: 1
            },
            {
                //4
                name: 'DU LỊCH ĐÀ LẠT - THÁC DATANLA - ĐỒI CHÈ CẦU ĐẤT -TRANG TRẠI RAU & HOA - THÁC DAMBRI',
                summary: 'Tham quan thác Dambri - ngọn thác hùng vĩ tại cao nguyên Bảo Lộc...',
                price: '3.079.000',
                time: '4 ngày 3 đêm',
                departureLocation: 'TP. HỒ CHÍ MINH',
                destination: 'ĐÀ LẠT',
                amount: 50,
                avatarPath: '../../assets/img/tour/dalat1.jpg',
                isStatus: true,
                tourGuideId: 1
            },
            {
                //5
                name: 'DU LỊCH SÓC TRĂNG - BẠC LIÊU - CÀ MAU - HÀ TIÊN - CHÂU ĐỐC- SA ĐÉC',
                summary: 'Khu dinh thự Công tử Bạc Liêu -  tìm hiểu cuộc đời của Hắc công tử Trần Trinh Huy nổi tiếng...',
                price: '5.129.000',
                time: '5 ngày 4 đêm',
                departureLocation: 'TP. HỒ CHÍ MINH',
                destination: 'MIỀN TÂY',
                amount: 50,
                avatarPath: '../../assets/img/tour/mientay1.jpg',
                isStatus: true,
                tourGuideId: 1
            },
            {
                //6
                name: 'DU LỊCH SÓC TRĂNG - BẠC LIÊU - CÀ MAU - HÀ TIÊN - CHÂU ĐỐC- SA ĐÉC',
                summary: 'Tham quan Khu dinh thự Công tử Bạc Liêu,cuộc đời của Hắc công tử nổi tiếng giàu có, ăn chơi...',
                price: '2.979.000',
                time: '4 ngày 3 đêm',
                departureLocation: 'TP. HỒ CHÍ MINH',
                destination: 'NHA TRANG',
                amount: 50,
                avatarPath: '../../assets/img/tour/nhatrang1.jpg',
                isStatus: true,
                tourGuideId: 1
            },
            {
                //7
                name: 'DU LỊCH ĐÀ LẠT - HỒ TUYỀN LÂM - ĐƯỜNG HẦM ĐIÊU KHẮC',
                summary: 'Tham quan phân viện sinh học Đà Lạt, chụp hình tại Đồi chè Cầu Đất ...',
                price: '2.379.000',
                time: '3 ngày 2 đêm',
                departureLocation: 'TP. HỒ CHÍ MINH',
                destination: 'ĐÀ LẠT',
                amount: 50,
                avatarPath: '../../assets/img/tour/dalat2.jpg',
                isStatus: true,
                tourGuideId: 1
            },
            {
                //8
                name: 'DU LỊCH TÂY NINH - TÒA THÁNH TÂY NINH - NÚI BÀ ĐEN - HỒ DẦU TIẾNG',
                summary: 'Chinh phục Núi Bà Đen- ngon núi cao nhất Đông Nam Bộ  chỉ mất...',
                price: '1.879.000',
                time: '2 ngày 1 đêm',
                departureLocation: 'TP. HỒ CHÍ MINH',
                destination: 'TÂY NINH',
                amount: 50,
                avatarPath: '../../assets/img/tour/tayninh1.jpg',
                isStatus: true,
                tourGuideId: 1
            },
            {
                //9
                name: 'ĐÀ NẴNG - HỘI AN - BÀ NÀ - MỸ KHÊ - BẢO TÀNG TRANH 3D',
                summary: ' Tham quan Bảo tàng tranh 3D Art In Paradise Đà Nẵng, du khách sẽ hoá thân...',
                price: '8.219.000',
                time: '3 ngày 2 đêm',
                departureLocation: 'TP. HỒ CHÍ MINH',
                destination: 'ĐÀ NẴNG',
                amount: 50,
                avatarPath: '../../assets/img/tour/danang1.jpg',
                isStatus: true,
                tourGuideId: 2

            },
            {
                //10
                name: 'HUẾ - QUẢNG BÌNH - ĐỘNG THIÊN ĐƯỜNG - ĐÀ NẴNG- HỘI AN - BÀ NÀ - CẦU VÀNG',
                summary: 'Tham quan động Thiên Đường - một trong những hang động kỳ vĩ và dài nhất thế giới...',
                price: '11.519.000',
                time: '5 ngày 4 đêm',
                departureLocation: 'TP. HỒ CHÍ MINH',
                destination: 'ĐÀ NẴNG',
                amount: 50,
                avatarPath: '../../assets/img/tour/hue1.jpg',
                isStatus: true,
                tourGuideId: 2
            },
            {
                //11
                name: 'HUẾ - HỘI AN - CÙ LAO CHÀM - ĐÀ NẴNG - KDL BÀ NÀ HILLS',
                summary: ' Tham quan Kinh Thành Huế - Hoàng Cung của 13 vị Vua triều Nguyễn...',
                price: '10.419.000',
                time: '4 ngày 3 đêm',
                departureLocation: 'TP. HỒ CHÍ MINH',
                destination: 'HUẾ',
                amount: 50,
                avatarPath: '../../assets/img/tour/hue2.jpg',
                isStatus: true,
                tourGuideId: 1
            },
            {
                //12
                name: 'HUẾ - QUẢNG BÌNH - ĐỘNG THIÊN ĐƯỜNG - ĐÀ NẴNG - HỘI AN',
                summary: ' Tham quan bán đảo Sơn Trà và cảng Tiên Sa, viếng chùa Linh Ứng Bãi Bụt ....',
                price: '10.619.000',
                time: '4 ngày 3 đêm',
                departureLocation: 'TP. HỒ CHÍ MINH',
                destination: 'HUẾ - QUẢNG BÌNH',
                amount: 50,
                avatarPath: '../../assets/img/tour/hue3.jpg',
                isStatus: true,
                tourGuideId: 2
            },
            {
                //13
                name: 'HUẾ - ĐÀ NẴNG - SUỐI KHOÁNG NÓNG THẦN TÀI - BÀ NÀ',
                summary: 'Tắm khoáng thư giãn tại Công viên Suối khoáng nóng Núi Thần Tài....',
                price: '9.499.000',
                time: '4 ngày 3 đêm',
                departureLocation: 'TP. HỒ CHÍ MINH',
                destination: 'HUẾ - ĐÀ NẴNG',
                amount: 50,
                avatarPath: '../../assets/img/tour/hue4.jpg',
                isStatus: true,
                tourGuideId: 2
            },
            {
                //14
                name: 'DU LỊCH VINH - NINH BÌNH - HÀ NỘI',
                summary: ' Hành trình tham quan kỉ niệm 130 năm chủ tịch Hồ Chí Minh...',
                price: '5.879.000',
                time: '4 ngày 3 đêm',
                departureLocation: ' NGHỆ AN',
                destination: 'NINH BÌNH - HÀ NỘI',
                amount: 50,
                avatarPath: '../../assets/img/tour/hanoi1.jpg',
                isStatus: true,
                tourGuideId: 3
            },
            {
                //15
                name: 'DU LỊCH QUY NHƠN - TUY HÒA - EO GIÓ - KHU DÃ NGOẠI TRUNG LƯƠNG - QUẢNG ĐỨC XƯA',
                summary: 'Tham quan khu du lịch Ghềnh Ráng – Tiên Sa-Đồi thi nhân Hàn Mạc Tử, Bãi tắm Hoàng Hậu...',
                price: '3.879.000',
                time: '3 ngày 2 đêm',
                departureLocation: 'TP. HỒ CHÍ MINH',
                destination: 'QUY NHƠN - TUY HÒA',
                amount: 50,
                avatarPath: '../../assets/img/tour/quynhon1.jpg',
                isStatus: true,
                tourGuideId: 3
            },
            {
                //16
                name: 'DU LỊCH HẠ LONG - QUY NHƠN - KDL HẦM HÔ - GHỀNH RÁNG',
                summary: 'Đến với xứ "Hoa vàng cỏ xanh" hòa mình với thiên nhiên tuyệt đẹp...',
                price: '1.879.000',
                time: '2 ngày 1 đêm',
                departureLocation: 'QUANG NINH',
                destination: 'HẠ LONG - QUY NHƠN ',
                amount: 50,
                avatarPath: '../../assets/img/tour/halong1.jpg',
                isStatus: true,
                tourGuideId: 3
            },
            {
                //17
                name: 'DU LỊCH QUY NHƠN',
                summary: 'Tham quan khu du lịch Ghềnh Ráng – Tiên Sa- Đồi thi nhân Hàn Mạc Tử, Dốc Mộng Cầm ...',
                price: '5.990.000',
                time: '4 ngày 3 đêm',
                departureLocation: 'HÀ NỘI',
                destination: 'QUY NHƠN',
                amount: 50,
                avatarPath: '../../assets/img/tour/quynhon2.jpg',
                isStatus: true,
                tourGuideId: 3
            },
            {
                //18
                name: ' DU LỊCH BUÔN MA THUỘT - BUÔN ĐÔN - PLEIKU - KOMTUM ',
                summary: 'Tham quan Bảo tàng thế giới Cà phê - được thiết kế theo kiến trúc nhà dài Tây nguyên độc đáo....',
                price: '4.879.000',
                time: '5 ngày 4 đêm',
                departureLocation: 'TP. HỒ CHÍ MINH',
                destination: 'BUÔN MA THUỘT',
                amount: 50,
                avatarPath: '../../assets/img/tour/buonmathuat1.jpg',
                isStatus: true,
                tourGuideId: 3
            },
            {
                //19
                name: 'DU LỊCH BẢO LỘC - HỒ TÀ ĐÙNG - ĐẮK NÔNG - KHU BẢO TỒN THIÊN NHIÊN NẬM NUNG',
                summary: 'Dừng chân tại Tà Đùng top view homestay hay còn gọi là “nhà Chú Đông” ... ',
                price: '2.679.0000',
                time: '3 ngày 2 đêm',
                departureLocation: 'TP. HỒ CHÍ MINH',
                destination: 'ĐẮK NÔNG ',
                amount: 50,
                avatarPath: '../../assets/img/tour/daknong.jpg',
                isStatus: true,
                tourGuideId: 3
            },
            {
                //20
                name: 'DU LỊCH BUÔN MA THUỘT - BUÔN ĐÔN - PLEIKU - KOMTUM',
                summary: 'Tham quan Thác D’ray Nur ngọn thác hùng vĩ và thơ mộng của mảnh đất Tây Nguyên...',
                price: '5.339.000',
                time: '5 ngày 4 đêm',
                departureLocation: 'TP. HỒ CHÍ MINH',
                destination: 'TÂY NGUYEN',
                amount: 50,
                avatarPath: '../../assets/img/tour/buonmathuat2.jpg',
                isStatus: true,
                tourGuideId: 3
            },
            {
                //21
                name: 'DU LỊCH TẾT TÂN SỬU 2021 BUÔN MA THUỘT - ĐÀ LẠT',
                summary: ' Trải nghiệm cảm giác thú vị khi ngồi trên lưng những Chú voi Bản Đôn vượt Sông Serepok...',
                price: '4.490.000',
                time: '4 ngày 4 đêm',
                departureLocation: 'CẦN THƠ',
                destination: 'BUÔN MA THUỘT ',
                amount: 50,
                avatarPath: '../../assets/img/tour/buonmathuat3.jpg',
                isStatus: true,
                tourGuideId: 1
            },
            {
                //22
                name: 'DU LỊCH BUÔN MA THUỘT - BUÔN ĐÔN - KDL SINH THÁI KOTAM',
                summary: 'Trải nghiệm cảm giác thú vị khi ngồi trên lưng những Chú voi Bản Đôn vượt Sông ...',
                price: ' 1.550.000',
                time: '2 ngày 1 đêm',
                departureLocation: 'BUÔN MA THUỘT',
                destination: 'BUÔN MA THUỘT',
                amount: 50,
                avatarPath: '../../assets/img/tour/taynguyen1.jpg',
                isStatus: true,
                tourGuideId: 1
            },
            {
                //23
                name: 'DU LỊCH BUÔN MA THUỘT',
                summary: 'Trekking 500m, men theo những triền đá cổ xưa với hình thù độc đáo...',
                price: '2.350.000',
                time: '2 ngày 1 đêm',
                departureLocation: 'BUÔN MA THUỘT',
                destination: 'BUÔN MA THUỘT',
                amount: 50,
                avatarPath: '../../assets/img/tour/buonmathuat4.jpg',
                isStatus: true,
                tourGuideId: 1
            },
            {
                //24
                name: 'DU LỊCH HẢI PHÒNG - HẠ LONG - NINH BÌNH - HÀ NAM - HÀ NỘI - SAPA - ĐỀN HÙNG',
                summary: 'Chiêm ngưỡng động Thiên Cung, các hòn Đỉnh Hương - Trống Mái (Gà Chọi)- Chó Đá...',
                price: '9.839.000',
                time: '6 ngày 5 đêm',
                departureLocation: 'TP. HỒ CHÍ MINH',
                destination: 'HẠ LONG - NINH BÌNH',
                amount: 50,
                avatarPath: '../../assets/img/tour/haiphong1.jpg',
                isStatus: true,
                tourGuideId: 1
            },
            {
                //25
                name: 'DU LỊCH HÀ NỘI - NINH BÌNH - NAM ĐỊNH - HẠ LONG',
                summary: 'Tham quan Khu du lịch Tràng An - nơi có cảnh quan ngoạn mục với hệ thống sông...',
                price: '6.479.000',
                time: '4 ngày 3 đêm',
                departureLocation: 'TP. HỒ CHÍ MINH',
                destination: 'HẠ LONG',
                amount: 50,
                avatarPath: '../../assets/img/tour/halong1.jpg',
                isStatus: true,
                tourGuideId: 1
            },
            {
                //26
                name: 'DU LỊCH HẢI PHÒNG - HẠ LONG - NINH BÌNH - HÀ NỘI - LÀO CAI - SAPA - ĐỀN HÙNG',
                summary: 'Chinh phục Núi Bà Đen- ngon núi cao nhất Đông Nam Bộ  chỉ mất...',
                price: '8.479.000',
                time: '6 ngày 5 đêm',
                departureLocation: 'TP. HỒ CHÍ MINH',
                destination: ' LÀO CAI',
                amount: 50,
                avatarPath: '../../assets/img/tour/halong2.jpg',
                isStatus: true,
                tourGuideId: 1
            },
            {
                //27
                name: 'DU LỊCH  HÀ NỘI - ĐỀN HÙNG - LÀO CAI - SAPA - NINH BÌNH - HẠ LONG',
                summary: ' Viếng khu di tích Đền Hùng - thăm đền Hạ, đền Trung, đền Thượng, lăng Vua Hùng...',
                price: '13.484.000',
                time: '6 ngày 5 đêm',
                departureLocation: 'TP. HỒ CHÍ MINH',
                destination: ' HẠ LONG',
                amount: 50,
                avatarPath: '../../assets/img/tour/hanoi1.jpg',
                isStatus: true,
                tourGuideId: 1
            },
            {
                //28
                name: 'DU LỊCH HÀ NỘI - HÒA BÌNH - MỘC CHÂU - NINH BÌNH',
                summary: 'Xuống thuyền men theo dòng sông Ngô Đồng uốn lượn qua các vách núi ...',
                price: '10.464.000',
                time: '4 ngày 3 đêm',
                departureLocation: 'TP. HỒ CHÍ MINH',
                destination: 'NINH BÌNH',
                amount: 50,
                avatarPath: '../../assets/img/tour/hanoi2.jpg',
                isStatus: true,
                tourGuideId: 3
            },
            {
                //29
                name: 'DU LỊCH HỒ CHÍ MINH - VĨNH LONG',
                summary: 'Tham quan các làng nghề :đan lục bình, làm bánh tráng rế, may nón đệm/cối...',
                price: '1.879.000',
                time: '2 ngày 1 đêm',
                departureLocation: 'TP. HỒ CHÍ MINH',
                destination: 'VĨNH LONG',
                amount: 50,
                avatarPath: '../../assets/img/tour/hcm.jpg',
                isStatus: true,
                tourGuideId: 2
            },
            {
                //30
                name: 'DU LỊCH HỒ CHÍ MINH - LỄ HỘI ÁO DÀI [KH TỪ CẦN THƠ]',
                summary: 'Lễ hội Áo dài lần 7 - 2020 với chủ đề Tôi yêu áo dài Việt Nam cũng là sự kiện mở đầu...',
                price: '739.000',
                time: '1 ngày',
                departureLocation: 'TP. HỒ CHÍ MINH',
                destination: 'TP. HỒ CHÍ MINH',
                amount: 50,
                avatarPath: '../../assets/img/tour/hcm2.jpg',
                isStatus: true,
                tourGuideId: 1
            },


        ];
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