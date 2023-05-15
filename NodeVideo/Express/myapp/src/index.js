const path =require("path")
const express = require ("express");
const app = express( );
app.set('view engin','hbs');
app.get("/",(req,res)=>{
    res.send("HElloooo From Express");
})
app.get("/about",(req,res)=>{
    res.send("HElloooo From ABOUT Express");
});
app.get('*',(req,res)=>{
    res.send("HElloooo From CONtact Express");
  
})

 

app.listen(5000,()=>{
    console.log("listening the port at 5000");
})
