var fs = require("fs");
//fs.mkdir(path[, mode], callback)
console.log("Going to create directory /tmp/test")
//C:\Users\willi\Desktop\gitgud

//directory created in default gitgud
fs.mkdir('C:/Users/willi/Desktop/gitgud/test',function(err){
    if(err){
        return console.error(err);
    }
    console.log("Directory created successfully!");
});