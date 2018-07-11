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
  //   domains: mailInfo.domains,
  //   secureConnection: true,      //secureConnection 使用安全连接
  secure: false,
  port: mailInfo.port,                   //port STMP端口号
  auth: {
    user: mailInfo.userAcount, //Email address 
    pass: mailInfo.userPassword //Email pw
  },
  debug: true
});

function sendMail(mailAddress, content) {
  let options = {
    from: mailInfo.mailFrom,
    to: mailAddress,
    subject: mailInfo.subject,
    html: content + mailInfo.html_context,
    // attachments:
    //   [
    //     {
    //       filename: mailInfo.attachment01_filename,     // attachment_name
    //       path: mailInfo.attachment01_path,            // attachment_path
    //       cid: mailInfo.attachment01_cid              // cid index by mail
    //     }
    //   ]
  };

  transport.sendMail(options)
    .then(res => {
      console.log(res);
      console.log(`Sucess！----------------------------------`);
      logger.info(`Success - ${res.accepted}`);
    },
      err => {
        failToSend.push(mailAddress);
        console.log(err);
        logger.debug(`${err.errno} - ${mailAddress}`);
      }
    )
    .then(() => {
      if (failToSend.length) { console.log(`Failed to send mail to : ${failToSend} `) }
    }
    )
    .catch(err => { console.log(error) }
    );

}

parseExcel.mailList.forEach((mailAddress, index) => {
  setTimeout(sendMail, 5000, mailAddress, parseExcel.mailHtmlContentList[index]);
});





