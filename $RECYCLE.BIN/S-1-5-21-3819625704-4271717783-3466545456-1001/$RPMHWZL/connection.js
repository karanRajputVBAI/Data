//const { error } = require("console");

var mysql = require("mysql");
var con =mysql.createConnection({
    host:"localhost",
    user:"root",
    password :"3000",
    database:"mydb"


});

module.exports = con;
