var fs = require("fs");

console.log("going to delete directory /tmp/test");

//fs.rmdir(path, callback) to remove a directory
//note, need to recreate test to delete it each time.
fs.rmdir("C:/Users/willi/Desktop/gitgud/test",function(err){
    if(err){
        return console.error(err);
    }
    console.log("Going to read directory C:/Users/willi/Desktop/gitgud/test");

//fs.readdir(path,callback) to read a directory
    fs.readdir("/Users/willi/Desktop/gitgud/",function(err,files){
        if(err){
            return console.error(err);
        }
        //files library, for each file, print out file
        files.forEach(function(file){
            console.log(file);
        });
    });
});

