# Node-xlxs-mail

Send mail with data extracted from excel   获取Excel里的邮件地址并发送邮件

  - nodemailer
  - node-xlsx
  - log4js

# Features

  - You can easily to send mails to those email address stored in excel
  - You can review the logs to check the status

####Success 
<img src="img/Success.jpg" style="margin: 0 auto;width:300px"><br>
####Error - ETIMEOUT
<img src="img/Error.jpg" style="margin: 0 auto;width:300px"><br>

>####Note
>I use google smtp service to send mails, obiviously the network is not stable in CN /* you can use `ping mail.google.com` to check */,so the programme will hit the issue  `ETIMEOUT ==> Error Timeout` sometimes,you can try to login on google mail with web browser(work for me) or use other smtp service (such as mailgrid,mailgun,qq.etc.) 

# Preparation
- update emailAddress info or replace **test.xlxs** in root path
- update **src/mailContext.js**  with your own mail smtp service 

# Build
``` bash
# install dependencies
npm install

# run the script
node index.js

```

### ToDo
- Work out a better solution to handle ETIMEOUT issue.
- Fetch the list of return/blocked mails

~(≧▽≦)/~ Encourage me a start🌟 if you like it~(≧▽≦)/<br>
~(≧▽≦)/~  如果有那么一丁点儿喜欢 请随手🌟~(≧▽≦)/~啦啦啦 

