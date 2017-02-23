const mail = require('nodemailer');
const log4js = require('log4js');
const mailOptions = require('./src/mailOptions');

//config log4js
log4js.configure('log4js_confg.json');
var logger = log4js.getLogger('nodemailer');

const transport = mail.createTransport({
      host:'smtp.gmail.com',      //mail service mail host
      domains: ["gmail.com", "googlemail.com"],
      secureConnection:true,      //secureConnection 使用安全连接
      port:465,                   //port STMP端口号
      auth:{
        user:"userAccount@gmail.com", //gmail address 
        pass:"XXXXXX"     //gmail pw
     },
     debug: true
});

transport.sendMail(mailOptions.options,function (err, res) {
    if(err) {console.log(err); logger.debug(err.Error);}
    else {
          console.log(`发送成功！`);
          console.log(res);
          logger.info(`Mail has sent to : ${res.accepted}`);
        }
    //transport.close(); // 如果没用，关闭连接池
  });