const fs = require ("fs");

fs.appendFile("read.txt","another day passed!!!",
(err) => {
    console.log("task completed ");
    
});
