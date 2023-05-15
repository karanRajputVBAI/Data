const express = require("express");
const app = express();

app.get("/" ,(req,res)=>{
    res.send("karan");

})

const start = async ()=>{
    try {
        app.listen(5000,() =>{
             console.log("port 5000");
        });

    }catch(err){
        
    }
}