# node-xlxs-mail

获取Excel里的邮件地址并发送邮件

## 环境要求
> 安装node.js, [下载地址](http://nodejs.cn/download/)，安装完成后， 在当前文件夹下运行 npm install


## 操作步骤
1. 进入当前文件夹；
2. 修改/src/config.js文件，假如你的邮箱(必须使用阿里企业邮箱)为 xiaoxiannv@shanshu.com, 密码为 123456, 修改文件如下：

```
// 你的邮箱
const email = "xiaoxiannv@shanshu.com";
// 你的邮箱密码
const password = "123456";
```

3. 使用你的excel文件替换当前文件夹下的test.xlsx文件，文件中必须有 序号、姓名、邮箱 这三列
4. 在命令行中运行

```
node index.js
```
为了避免ip被拉入黑名单，会每5秒自动发送一封邮件，请耐心等待！！