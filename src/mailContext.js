const config = require('./config');

const host = "smtp.mxhichina.com";
const domains = ["gmail.com", "googlemail.com"];
const port = 25;

const userAcount = config.userAcount;
const userPassword = config.userPassword;

const mailFrom = '"小仙女 👻" <yachen@shanshu.ai>';
const subject = 'Hello, 工资单来了 ✔';

var html_context = [];

html_context[0] = "<h3>Mail Sent！！！</h3>";
html_context[1] = "<div><i>本次邮件由小仙女脚本自动发送,懒惰万岁！！</i></div>";

const attachment01_filename = "QR.jpg";
const attachment01_path = "img/QR.jpg";
const attachment01_cid = "00000001";
// attachment02....

exports.host = host;
exports.domains = domains;
exports.port = port;
exports.userAcount = userAcount;
exports.userPassword = userPassword;
exports.mailFrom = mailFrom;
exports.subject = subject;
exports.html_context = html_context.join("");
exports.attachment01_filename = attachment01_filename;
exports.attachment01_path = attachment01_path;
exports.attachment01_cid = attachment01_cid;