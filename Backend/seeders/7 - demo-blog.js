'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        let data = [
            // ToudId: 1
            {
                day1: 'TP. HỒ CHÍ MINH - MỸ THO - CẦN THƠ (Ăn sáng, trưa, chiều)',
                content1: 'Đón khách tại văn phòng Lữ Hành Saigontourist (lúc 06h00 sáng tại 45 Lê Thánh Tôn, Quận 1 hoặc lúc 06h30 sáng tại số 1 Nguyễn Chí Thanh, Quận 5) . Đến Mỹ Tho, xe đưa khách tham quan chùa Vĩnh Tràng. Di chuyển ra bến tàu,du thuyền trên sông Mekong ngắm cảnh bốn cù lao Long, Lân Qui, Phụng…Tham quan cảng cá Mỹ Tho, làng nuôi cá bè dọc cù lao Tân Long. Đến cù lao Thới Sơn tham quan nhà dân, trại nuôi ong, thưởng thức trà mật ong, chụp hình với Trăn Gấm. Đi bộ trên đường làng Thới Sơn, tham quan lò kẹo dừa, thưởng thức trái cây theo mùa. Nghe nhạc tài tử Nam Bộ. Sang thăm cồn Phụng với di tích Đạo Dừa, trại nuôi cá sấu, vườn thú mini. Khởi hành đi Cần Thơ. Tối tự do dạo bến Ninh Kiều. Nghỉ đêm tại Cần Thơ. ',
                imagePath1: '../../assets/img/blog/tour1_day1.png',
                day2: 'CẦN THƠ - CÀ MAU  (Ăn sáng, trưa, chiều)',
                content2: 'Xuống thuyền tại bến Ninh Kiều đi tham quan chợ nổi Cái Răng - một chợ nổi lớn của Đồng Bằng sông Cửu Long. Viếng Thiền viện Trúc Lâm Phương Nam. Khởi hành đi Cà Mau. Nghỉ đêm tại Cà Mau.',
                imagePath2: '../../assets/img/blog/tour1_day2.png',
                day3: 'CÀ MAU - BẠC LIÊU (Ăn sáng, trưa, chiều)',
                content3: 'Khởi hành đi Cà Mau, tham quan và chụp ảnh lưu niệm tại Khu Văn Hóa Du Lịch Mũi Cà Mau, Điểm Cực Nam Tổ Quốc, tham quan mốc toạ độ quốc gia - Panô biểu tượng Mũi Cà Mau. Chiều khởi hành đi Bạc Liêu. Viếng nhà thờ Tắc Sậy và thăm nơi an nghỉ của Linh mục Trương Bửu Diệp. Nghỉ đêm tại Bạc Liêu.',
                imagePath3: '../../assets/img/blog/tour1_day3.png',
                day4: 'BẠC LIÊU - SÓC TRĂNG - TP.HỒ CHÍ MINH (Ăn sáng, trưa)',
                content4: 'Buổi sáng, tham quan Khu dinh thự Công tử Bạc Liêu, tìm hiểu cuộc đời của Hắc công tử Trần Trinh Huy nổi tiếng giàu có, ăn chơi, phóng khoáng một thời. Khu lưu niệm nghệ thuật Đờn Ca Tài Tử Nam Bộ và nhạc sĩ Cao Văn Lầu, người sáng tác ra bài Dạ Cổ Hoài Lang, tiền đề của nghệ thuật ca ra bộ, cải lương rất đặc sắc của Nam Bộ. Khởi hành về TP.Hồ Chí Minh, ghé Sóc trăng viếng chùa Mã Tộc (chùa Dơi). Tiếp tục khởi hành về TP.Hồ Chí Minh. Kết thúc chương trình.',
                imagePath4: '',
                day5: '',
                content5: '',
                imagePath5: '',
                day6: '',
                content6: '',
                imagePath6: '',
                day7: '',
                content7: '',
                imagePath7: '',
                isStatus: true,
                tourId: 1,
                tourGuideId: 2
            },
            // ToudId: 2
            {
                day1: 'TP. HỒ CHÍ MINH - HỒ TRÀM (Ăn trưa, chiều)',
                content1: '09h00 sáng quý khách tập trung tại văn phòng Lữ hành Saigontourist 01 Nguyễn Chí Thanh, Q.5. Khởi hành đi Hồ Tràm. Dừng chân viếng chùa Đại Tòng Lâm. Đến Hồ Tràm, quý khách nhận phòng tại The Grand Ho Tram Strip - khu phức hợp nghỉ dưỡng đạt tiêu chuẩn 5 sao cực kỳ sang trọng. Buổi chiều, quý khách nghỉ ngơi, tắm biển, tận hưởng các dịch vụ - tiện nghi cao cấp và sang trọng tại The Grand Ho Tram Strip. Quý khách có thể tham gia loại hình giải trí trò chơi có thưởng tại casino lớn nhất Việt Nam (chỉ áp dụng với khách có quốc tịch nước ngoài). Nghỉ đêm tại Hồ Tràm.',
                imagePath1: '../../assets/img/blog/tour2_day1.png',
                day2: 'HỒ TRÀM - TP. HỒ CHÍ MINH (Ăn sáng, trưa)',
                content2: 'Buổi sáng, quý khách tự do tắm biển, nghỉ ngơi đến giờ trả phòng. Khởi hành về TP.HCM, đưa quý khách về điểm đón ban đầu. Kết thúc chương trình.',
                imagePath2: '',
                day3: '',
                content3: '',
                imagePath3: '',
                day4: '',
                content4: '',
                imagePath4: '',
                day5: '',
                content5: '',
                imagePath5: '',
                day6: '',
                content6: '',
                imagePath6: '',
                day7: '',
                content7: '',
                imagePath7: '',
                isStatus: true,
                tourId: 2,
                tourGuideId: 1
            },
            // ToudId: 3
            {
                day1: 'TP. HCM - PHAN THIẾT (Ăn sáng, trưa, chiều)',
                content1: 'Đón quý khách tại văn phòng Lữ hành Saigontourist (lúc 06h00 sáng tại 45 Lê Thánh Tôn, Quận 1 hoặc lúc 06h30 sáng tại số 1 Nguyễn Chí Thanh, Quận 5), khởi hành đi Bình Thuận. Đến Phan Thiết, vào khu resort Hàm Tiến - Mũi Né nhận phòng. Buổi chiều, quý khách đi vào Hòn Rơm tham quan đồi cát vàng dưới tác động của gió biển đã tạo nên những hình dạng rất tuyệt vời. Nghỉ đêm tại Mũi Né.',
                imagePath1: '../../assets/img/blog/tour3_day1.png',
                day2: 'THAM QUAN PHAN THIẾT (Ăn sáng, chiều)',
                content2: 'Buổi sáng, quý khách tự do nghỉ dưỡng tại resort. Tự túc ăn trưa. Buổi chiều, xe đưa quý khách đến tham quan tham quan Lâu Đài Rượu Vang - tham quan 2 hầm chứa rượu cùng quy trình và mô hình sản xuất rượu khép kín được thiết kế nằm sâu dưới lòng đất. Tiếp đến, xe đưa đoàn đến không gian trưng bày nghệ thuật “Làng chài xưa”. Toàn bộ khu trưng bày có diện tích 1.600m². Đây là không gian trưng bày nghệ thuật và là bảo tàng thu nhỏ, tái hiện lại một phần làng chài xưa của Phan Thiết - Mũi Né cách đây hơn 300 năm. Du khách đến đây sẽ được tham quan làng chài dưới rặng dừa; phố cổ ven sông Cà Ty; nhà ở và nơi sản xuất nước mắm của hàm hộ Phan Thiết; con đường Phan Thiết - Mũi Né xưa; đắm mình vào biển Mũi Né 3D và mua sắm trong không gian chợ quê làng xưa… tận mắt được chứng kiến một làng chài xưa của xứ biển Phan Thiết được tái hiện một cách công phu. Nghỉ đêm tại Mũi Né.',
                imagePath2: '../../assets/img/blog/tour3_day2.png',
                day3: 'PHAN THIẾT- TP. HCM (Ăn sáng, trưa)',
                content3: 'Buổi sáng, quý khách tự do nghỉ dưỡng, tắm biển đến giờ trả phòng. Khởi hành về Tp. HCM. Trên đường về ghé mua sắm đặc sản Phan Thiết. Kết thúc chương trình.',
                imagePath3: '',
                day4: '',
                content4: '',
                imagePath4: '',
                day5: '',
                content5: '',
                imagePath5: '',
                day6: '',
                content6: '',
                imagePath6: '',
                day7: '',
                content7: '',
                imagePath7: '',
                isStatus: true,
                tourId: 3,
                tourGuideId: 2
            },
            // ToudId: 0
            {
                day1: '',
                content1: '',
                imagePath1: '',
                day2: '',
                content2: '',
                imagePath2: '',
                day3: '',
                content3: '',
                imagePath3: '',
                day4: '',
                content4: '',
                imagePath4: '',
                day5: '',
                content5: '',
                imagePath5: '',
                day6: '',
                content6: '',
                imagePath6: '',
                day7: '',
                content7: '',
                imagePath7: '',
                isStatus: true,
                tourId: 7,
                tourGuideId: 2
            },
        ];
        data.map(item => {
            item.createdAt = Sequelize.literal('NOW()');
            item.updatedAt = Sequelize.literal('NOW()');
            return item;
        });
        return queryInterface.bulkInsert('Blogs', data, {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Blogs', null, {});
    }
};