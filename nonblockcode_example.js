var fs = require("fs");
//moves onto the next callback(?) and
//executes "Program Ended" before
//the file finishes reading.
fs.readFile('input.txt',function(err,data){
    if(err) return console.error(err);
    console.log(data.toString());
})
console.log("Program Ended");