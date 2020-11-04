const nodemailer = require('nodemailer');
const handlebars =require('handlebars');
const fs =require('fs'); 


render = (filename, replacements) =>{
  const source   = fs.readFileSync(filename,'utf8').toString();
  const template = handlebars.compile(source);
  const output = template( replacements);
  return output;
}
let transporter =  nodemailer.createTransport({ 
    // config mail server
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: 'shareblogtravel@gmail.com', //Tài khoản gmail vừa tạo
        pass: 'abc123def456' //Mật khẩu tài khoản gmail vừa tạo
    },
    tls: {
        // do not fail on invalid certs
        rejectUnauthorized: false
    }
});
exports.sendEmail = async (req,res,next)=>{
    
    //const htmlToSend =  render(`${__dirname}/../public/teamplate/email.html`,replacements);
    console.log('SendEmail');
    //console.log(req);
    let mainOptions = { // thiết lập đối tượng, nội dung gửi mail
        from: 'Share_Blog_Travel',
        to: req.email,
        subject: 'Notify account information registered',
        text: 'Thank you for registering an account on our website. ^-^' +
                '\nFullname: ' + req.fullname + 
                '\nUsername: ' + req.username + 
                '\nEmail registered: ' + req.email + '\n'
        // html: htmlToSend
    }
    //console.log(mainOptions);
    res.status(200).send(req);
    transporter.sendMail(mainOptions,function(error, info){
        if (error) { // nếu có lỗi
            console.log('Error Occurs');
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

