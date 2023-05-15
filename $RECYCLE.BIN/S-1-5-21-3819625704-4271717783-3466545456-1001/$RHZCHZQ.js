const fs = require ('fs');



fs.writeFile('read.txt', "today is Awesome day...",
(err,data) => {

    console.log("file created");

    console.log(err);
});
