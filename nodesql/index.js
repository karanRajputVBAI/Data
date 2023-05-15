var con = require('./connection');

var express =require("express");

var app =express();

var bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended:true}));


app.set('view engine','ejs');


app.get('/', function(req,res){

    res.sendFile(__dirname+'/register.html');
});

app.post('/',function(req,res){
    var name = req.body.name;
    var email = req.body.email;
    var mno = req.body.mno;
  


    con.connect(function(error){
        if(error) throw error;

       //1st method== var sql = "INSERT INTO students(name,email,mno)VALUES('"+name+"','"email"',"mno")";
      //2nd method var sql = "INSERT INTO students(name,email,mno)VALUES(?,?,?)";
      var sql = "INSERT INTO students(name,email,mno)VALUES?";

      var values=[
        [name,email,mno]
      ];

      con.query(sql,[values],function(error,result){
            if(error) throw error;
        res.redirect('/students');
           // res.send('student register successful    '  +   result.insertId);
        });
    });

});
 

app.get('/students',function(req,res){
        con.connect(function(error){
             if(error) console.log(error);
    
        var sql="select * from students";
        con.query(sql,function(error,result){
            if(error)console.log(error);
            res.render(__dirname+"/students",{students:result});
         });

   });
});




app.get('/delete-student',function(req,res){

    con.connect(function(error){
        if(error) console.log(error);

    
        var sql = "DELETE  FROM students WHERE id=?";
        
        var id=req.query.id;

        con.query(sql,[id],function(error,result){
         if (error) 
        console.log(error);
        
         res.redirect('/students');
        });

    });   

 });


    app.get('/update-student',function(req,res){
    
        con.connect(function(error){
            if(error) console.log(error);
   
        var sql = "SELECT *  FROM students WHERE id=?";
        
        var id=req.query.id;

        con.query(sql,[id],function(error,result){
         if (error) 
        console.log(error);
        
         res.render(__dirname+"/update-student",{student:result});
        });

       
    });
 });
    


    app.post('/update-student',function(req,res){
        con.connect(function(error){
            if(error) console.log(error);
   
        
        var name= req.body.name;
        var email= req.body.email;
        var mno= req.body.mno;
         var id= req.body.id;
        var sql = "UPDATE students set name=? ,email=?,mno=? WHERE id=?";
        
        

        con.query(sql,[name,email,mno,id],function(error,result){
         if (error)  console.log(error);
        
         res.redirect("/students");
        });
    });

});


app.get('/search-students',function(req,res){con.connect(function(error){
    if(error) console.log(error);

var sql="select * from students";
con.query(sql,function(error,result){
   if(error)console.log(error);
   res.render(__dirname+"/search-students",{students:result});
});

});
});



app.get('/search',function(req,res){
    var name = req.query.name;
    var email = req.query.email;
    var mno = req.query.mno;

con.connect(function(error){
    if(error) console.log(error);

    var sql = "SELECT * FROM students WHERE name LIKE '%"+name+"%' AND email LIKE '%"+email+"%' AND mno LIKE '%"+mno+"%' ";

        con.query(sql,function(error,result){
            if(error) console.log(error);

            res.render(__dirname+"/search-students",{students:result});

        });
   
   
    });

});

app.listen(7000); 