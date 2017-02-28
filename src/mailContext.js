const host = "smtp.gmail.com";
const domains = ["gmail.com", "googlemail.com"];
const port = 465;

const userAcount = "xxxxxx@gmail.com";
const userPassword = "xxxxxx";

const mailFrom = "Nickname xxxx@gmail.com" ;
const subject = "This is sent by project:Node-xlxs-mail";

var html_context = [];

html_context[0] = "<h3>Mail Sent！！！</h3>";
html_context[1] = "<div><i>本次邮件由nodexlxs & nodemailer开发的脚本自动发送,懒惰万岁！！</i></div>";
html_context[2] = "<div><i>Github Repo: <a href='https://github.com/CaiYiLiang/Node-xlxs-mail' target='_blank' style='color:rgb(51, 102, 255)'>CaiYiLiang/Node-xlxs-mail</a></i></div>";
html_context[3] = "<div><i>如果你喜欢请给一个小星星star，我应该会高兴1小时-60分钟-3600秒O(∩_∩)O</i></div>";
//......

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