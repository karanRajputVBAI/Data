
const http = require ("http");
const fs = require("fs");
 


const server = http.createServer((req,res)=>{
    
       if (req.url == "/"){
        res.end("Hello From the Home Side");
         
    } else if(req.url == "/about"){
        res.end("Hello From the about Side");
        
    }  else if(req.url == "/contact"){
        res.end("Hello From the contact Side");
       
        
    } else if(req.url == "/userapi"){
     fs.readFile(`${__dirname}/UserApi/userapi.json`,"utf-8",(err,data)=>{
        console.log(data);
        
     }); 
     res.end("user api "); 
        
             
    }else{ 
     
           res.writeHead(404,{"Content-type": "text/html"}); 
            res.end("<h1>404 ERROE Pages ...Page dosen't exist<h1>");

    }

});

server.listen(8000,"127.0.0.1",()=>{
        console.log("listening to the port no 8000 ");
});