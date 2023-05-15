var con = require ('./connection');
var express = require ('express');

var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended:true}));

app.set('view engine', 'ejs');

app.get('/',function(req,res){
    res.sendFile(__dirname+'/reg.html');
});




app.listen(3000);