const express =  require("express");
const app =express();
let PORT =5000;

const sendmail= require("./controller/sendmail"); 
app.get("/", (req, res)=>{

    res.send("Ia Am (SeRvEr)");

});


app.get('/mail',sendmail)
const start = async ()=> {
    try {
        app.listen(PORT,()=>{
            console.log(`"I Am Live in port nuber ${PORT}"` );
        });
    } catch (error){}

}
start();
