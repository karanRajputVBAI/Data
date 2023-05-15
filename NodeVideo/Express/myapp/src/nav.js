 const express = require("express");

 const app= express();
 const PORT=5000;

 app.get("/",(req,res)=>{

    res.send("<h1>welcome to home page<h1>");
 });

 app.get("/about",(req,res)=>{

    res.send("welcome to about page");
 });

 app.get("/about/",(req,res)=>{

    res.send("welcome to about page");
 });
 
 app.get("/contact",(req,res)=>{

    res.send("welcome to contact page");
 });


 app.get("/temp",(req,res)=>{

    res.json([{
      id:1,
      name:"karan",
       },
       {
         id:1,
         name:"karan",
          },
          {
            id:1,
            name:"karan",
             },
             {
               id:1,
               name:"karan",
                },
                {
                  id:1,
                  name:"karan",
                   },
                   {
                     id:1,
                     name:"karan",
                      },
   ]);
 });

 app.listen(PORT,()=>{
    console.log(`listening the port no ${PORT} `)
 });
 
