const mail = require('nodemailer');
const log4js = require('log4js');
const mailInfo = require('./src/mailContext');
const parseExcel = require('./src/parseExcel');

//config log4js
log4js.configure('log4js_confg.json');
var logger = log4js.getLogger('nodemailer');

const transport = mail.createTransport({
      host: mailInfo.host,      //mail service mail host
      domains: mailInfo.domains,
      secureConnection:true,      //secureConnection 使用安全连接
      port: mailInfo.port,                   //port STMP端口号
      auth:{
        user: mailInfo.userAcount, //Email address 
        pass: mailInfo.userPassword //Email pw
     },
     debug: true
});

function sendMail(mailAddress){
  return function(){
  let options = {
      from:mailInfo.mailFrom,
      to: mailAddress, 
      subject: mailInfo.subject,    
      html: mailInfo.html_context,
      attachments: 
                  [
                      {
                          filename: 'QR.jpg',            // attachment_name
                          path: 'img/QR.jpg',            // attachment_path
                          cid : '00000001'               // cid index by mail
                      }
                  ]
      };

    transport.sendMail(options,function (err, res) {
      if(err) {
               console.log(err); 
               logger.debug(`${err.errno} - ${mailAddress}`); 
              }
      else {
              console.log(res);
              console.log(`Sucess！--------------------------
                          `);
              logger.info(`Success - ${res.accepted}`);
          }
    });
    
  }
}

//To avoid mail service party block your mails when you sent to their port at a time
parseExcelmailList.forEach(mailAddress => {
    setTimeout(sendMail(mailAddress), 5000);
});





