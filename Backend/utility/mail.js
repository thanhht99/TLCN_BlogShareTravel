const nodemailer = require('nodemailer');
const handlebars =require('handlebars');
const fs =require('fs'); 


render = (filename, replacements) =>{
  const source   = fs.readFileSync(filename,'utf8').toString();
  const template = handlebars.compile(source);
  const output = template( replacements);
  return output;
}
const transporter =  nodemailer.createTransport({ 
    // config mail server
    service: 'Gmail',
    auth: {
        user: 'anhruemngu123@gmail.com',
        pass: 'abc123def456'
    }
});
exports.sendEmail = async (req,res,next)=>{
    const replacements = {
        username: req.body.username
    };
    //const htmlToSend =  render(`${__dirname}/../public/teamplate/email.html`,replacements);
   
    const mainOptions = { // thiết lập đối tượng, nội dung gửi mail
        from: 'Website Share Blog Travel',
        to: req.body.email,
        subject: 'Notify account information',
        text: 'Email registered: ' + req.body.email + '\nUsername registered: ',
        // html: htmlToSend
    }
    await transporter.sendMail(mainOptions,function(error, info){
        if (error) { // nếu có lỗi
            console.log(error);
        } else { //nếu thành công
            console.log('Email sent: ' + info.response);
        }     
    });
}

exports.send = async (req,res,next)=>{
    const resetURL = `${req.protocol}://${req.get(
        'host'
      )}/users/resetPassword/${req.resetToken}`;
    const  replacements = {
        url: resetURL,
        username: req.user.fullname
    };
    const htmlToSend =  render(`${__dirname}/../public/teamplate/email_resetPassword.html`,replacements);
    const mainOptions = { // thiết lập đối tượng, nội dung gửi mail
        from: 'Online Banking',
        to: req.body.email,
        subject: 'Reset Password',
        text: 'You recieved message from ' + req.body.email,
        html: htmlToSend
    }
    await transporter.sendMail(mainOptions,function(err, info){
        if (err) {
           return next(new Error());
        } 
        console.log(info);
        res.render('checkSMS',{
            email:  req.body.email,
            title:'Login'
        });     
    });
}

exports.sendOTP = async (req,res,next)=>{
    const  replacements = {
        username: req.session.user.fullname,
        soTien: req.session.chuyenTienInfo.soTien,
        otp:req.session.chuyenTienInfo.otp
    };
    const htmlToSend =  render(`${__dirname}/../public/teamplate/otp.html`,replacements);
    const mainOptions = { // thiết lập đối tượng, nội dung gửi mail
        from: 'Online Banking',
        to: req.session.user.username,
        subject: 'OTP xác thực chuyển tiền',
        text: 'Bạn đã nhận được email từ ' + req.body.email,
        html: htmlToSend
    }
    await transporter.sendMail(mainOptions,function(err, info){
        if (err) {
           return next(new Error());
        } 
        console.log(info);
        res.status(200).json({
            status:'success'
        });     
    });
}
exports.SendThongTinChuyenTien = async (req,res,next)=>{
    const replacements = {
        username: req.session.chuyenTienInfo.nguoiNhan,
        soTien: req.session.chuyenTienInfo.soTien,
        loiNhan: req.session.chuyenTienInfo.loiNhan,
        nganHang: 'EC2002-04'
    }
    const htmlToSend =  render(`${__dirname}/../public/teamplate/thongTinChuyenTien.html`,replacements);
    const mainOptions = { // thiết lập đối tượng, nội dung gửi mail
        from: 'Online Banking',
        to: req.session.chuyenTienInfo.emailNguoiNhan,
        subject: 'Thông báo chuyển tiền',
        text: 'Bạn đã nhận được email từ ' + req.body.email,
        html: htmlToSend
    }
    await transporter.sendMail(mainOptions,function(err, info){
        if (err) {
            console.log(err);
           return next(new Error());
        } 
        console.log(info);
    });
}