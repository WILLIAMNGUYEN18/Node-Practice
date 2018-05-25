var fs = require("fs");

console.log("Going to delete an existing file");
//fs.unlink(path, callback)
fs.unlink('output.txt',function(err){
    if(err){
        return console.error(err);
    }
});