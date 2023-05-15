const chalk = require ("chalk");
const validator=require("validator");

//console.log(chalk.red.underline.inverse('System Failuer'));



const res = validator.isEmail("kara@gmail.com");

console.log(res ? chalk.green.inverse(res):chalk.red.inverse(res));

