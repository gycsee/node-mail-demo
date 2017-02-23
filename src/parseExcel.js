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

mailInfo.forEach(el => {
	                    let index = Object.keys(el);
	                    mailList.push(el[index[2]]); //mail address column
	                    logger.info(`Push ${el[index[2]]} into mailList scuessfully`);
	                    }
	             );

console.log(mailList);

exports.mailList =  mailList;