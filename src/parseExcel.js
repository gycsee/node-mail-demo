const XLSX = require('xlsx');
const log4js = require('log4js');

//config log4js
log4js.configure('log4js_confg.json');
var logger = log4js.getLogger('parseExcel');

const workbook = XLSX.readFile('test.xlsx'); //excel's name

// GET all the sheetNames of the excel.xlsx 获取 Excel 中所有表名
const sheetNames = workbook.SheetNames; 
console.log(sheetNames);

// GET data in JSON format from sheet tbls 针对单个表，返回序列化json数据
const worksheet = workbook.Sheets[sheetNames[0]];
const mailInfo = XLSX.utils.sheet_to_json(worksheet);

//Record the mailList update time
logger.warn(`Refresh mailList at:${(new Date()).toDateString()}`); 
var mailList = [];
var mailHtmlContentList = [];
mailInfo.forEach(el => {
	// console.log(JSON.stringify(el));
	let entry = Object.entries(el);
	let content = '';
	let email = '';
	let name = '';
	entry.forEach((item) => {
		switch (item[0]) {
			case '邮箱':
				email = item[1];
				break;
			case '姓名':
				name = item[1];
				break;
			case '序号':		
				break;
			default:
				content += `${item[0]}: ${item[1]}<br/> `;
				break;
		}
	})
	console.log(content);
	mailList.push(email); //mail address
	mailHtmlContentList.push(`<h3>hi, ${name}:</h3><p>工资单如下</p>${content}`); //mail content
	logger.info(`Push ${email} into mailList scuessfully`);
});

console.log(mailList);

exports.mailList =  mailList;
exports.mailHtmlContentList =  mailHtmlContentList;