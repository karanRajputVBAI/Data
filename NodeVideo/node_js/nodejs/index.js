 const fs = require("fs");
//creating a new file (synch)
 //fs.writeFileSync('read.txt',"welcome to nide js");
// fs.writeFileSync('read.txt',"hey ...welcome to nide js");

//file appending
//fs.appendFileSync('read.txt', "   how are you iam fine   thank you");



const buf_data =fs.readFileSync('read.txt');

console.log(buf_data);

org_data = buf_data.toString();

console.log(org_data);


//rename 
fs.renameSync('read.txt','readWrite.txt');
