var mysql = require('mysql');
const { connected } = require('process');

var con = mysql.createConnection({
    host: "localhost",
    user:"root",
    password:"3000"
});

con.connect(function(err){
    if(err) throw err;
    console.log("connected!!!");

});