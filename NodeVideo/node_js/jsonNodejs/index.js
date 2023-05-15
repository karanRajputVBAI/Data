const fs= require("fs")
const bioData ={
    name : "Karan",
    age :23,
    class :55,
}

const jsonData = JSON.stringify(bioData);
fs.writeFile("json1.json",jsonData,(err) =>{
    console.log("Done!!!!");

});

fs.readFile("json1.json","utf-8",(err,data)=>{
//console.log(data);
const orgData= JSON.parse(data)
console.log(data);
console.log(orgData);
});
 