const mail = require('nodemailer');
const log4js = require('log4js');
const mailInfo = require('./src/mailContext');
const parseExcel = require('./src/parseExcel');

//config log4js
log4js.configure('log4js_confg.json');
var logger = log4js.getLogger('nodemailer');

var failToSend = [];

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
  let options = {
      from:mailInfo.mailFrom,
      to: mailAddress, 
      subject: mailInfo.subject,    
      html: mailInfo.html_context,
      attachments: 
                  [
                      {
                          filename: mailInfo.attachment01_filename,     // attachment_name
                          path: mailInfo.attachment01_path,            // attachment_path
                          cid : mailInfo.attachment01_cid              // cid index by mail
                      }
                  ]
      };

  /*
    1.If callback argument is not set then the method returns a Promise object. 
      Nodemailer itself does not use Promises internally but it wraps the return 
      into a Promise for convenience.
  */

   transport.sendMail(options)
    .then(function(res){
            console.log(res); 
            console.log(`Sucess！----------------------------------`);
            logger.info(`Success - ${res.accepted}`);
          }, 
          function(err){
            failToSend.push(mailAddress);
            console.log(err); 
            logger.debug(`${err.errno} - ${mailAddress}`);
          }
     )
    .then(function(){
          if(failToSend.length)
          {console.log(`Failed to send mail to : ${failToSend} `)} 
         }  
     )
    .catch(function(error) { console.log(error)}
     );
    
}

/*
    1.If the message includes several recipients 
      then the message is considered sent if at least one recipient is accepted
    2.To avoid mail service party block your mails when you sent to their port at a time 
*/
parseExcel.mailList.forEach(mailAddress => {
    setTimeout(sendMail, 5000 , mailAddress);
});





