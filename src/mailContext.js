const host = "smtp.gmail.com";
const domains = ["gmail.com", "googlemail.com"];
const port = 465;

const userAcount = "xxxx@gmail.com";
const userPassword = "xxxxxx";

const mailFrom = "fcc樱桃妹 freecodecampguangzhou@gmail.com" ;
const subject = "fcc-广州线下面基(25号-周六)提醒";

var html_context = [];

html_context[0] = "<h3>Mail Sent！！！</h3>";
html_context[1] = "<div><i>本次邮件由nodexlxs & nodemailer开发的脚本自动发送,懒惰万岁！！</i></div>";
html_context[2] = "<div><i>Github Repo: <a href='https://github.com/CaiYiLiang/Node-xlxs-mail' target='_blank' style='color:rgb(51, 102, 255)'>CaiYiLiang/Node-xlxs-mail</a></i></div>";
html_context[3] = "<div><i>如果你喜欢请给一个小星星star，我应该会高兴1小时-60分钟-3600秒O(∩_∩)O</i></div>";
//......

exports.host = host;
exports.domains = domains;
exports.port = port;
exports.userAcount = userAcount;
exports.userPassword = userPassword;
exports.mailFrom = mailFrom;
exports.subject = subject;
exports.html_context = html_context.join("");