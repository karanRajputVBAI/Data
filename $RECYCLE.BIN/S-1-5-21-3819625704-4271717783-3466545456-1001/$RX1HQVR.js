var con =require("./connection");

var express =require("express");

var app=express();
var bodyParser = require("body-parser");

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended:true}));


app.get("/",function(req,res){
    res.sendFile(__dirname+"/register.html");
}
);


app.post('/',function(req,res){
    var name = req.body.name;
    var email = req.body.email;
    var mno = req.body.mno;

    con.connect(function(error){
        if(error) throw error;
        var sql ="INSERT INTO student (name,email,mno) VALUES(?,?,?)";
        con.query(sql,[name,email,mno],function(error,result){
            res.send("Student registed suuccsseessffuullyy!!"+ result.insertId);

        });
    });

})
app.listen(7000);
