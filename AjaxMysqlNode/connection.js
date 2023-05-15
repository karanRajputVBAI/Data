var mysql =require("mysql");

var con = mysql.createConnection({

host:"127.0.0.1",
user:"root",
password:"3000",
database:"mydb"

});

module.exports = con;

