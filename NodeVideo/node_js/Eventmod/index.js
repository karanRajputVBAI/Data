const EventEmitter =require("events");
//const event = require("events");
//optonal way
const event =new EventEmitter();

event.on(`checkPage`,(sc,msg)=>{

     console.log("status code is ${sc} and the page is ${msg}");
});

event.emit("CheckPage",200,"ok");
 






