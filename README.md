# Node-xlxs-mail
---
Send mail with data extracted from excel   获取Excel里的邮件地址并发送邮件

  - nodemailer
  - node-xlsx
  - log4js

# Features

  - You can easily to send mails to those email address stored in excel
  - You can review the logs to check the status

Sucess 

Error - ETIMEOUT

I use google smtp service to send mails, obiviously the network is not stable /* you can use `ping mail.google.com` to check */ in CN,so the programme will hit the timeout will hit `ETIMEOUT ==> Error Timeout` issue sometimes,you can try to login in google mail with web browser or use other smtp service (such as mailgrid,mailgun,qq.etc.) 

# Preparation
- update emailAddress info or replace test.xlxs in root path
- update src/mailContext.js  with your own mail smtp service 

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

