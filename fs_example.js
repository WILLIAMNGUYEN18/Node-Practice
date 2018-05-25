var fs = require("fs");

//Asynchronous read
fs.readFile('input.txt', function(err,data){
    if(err){
        return console.error(err);
    }
    console.log("Asynchronous read: " + data.toString());
});


//Synchronous read
var data = fs.readFileSync('input.txt');
console.log("Synchronous read: " + data.toString());

console.log("Program Ended");

//opening a file via: fs.open(path, flags[, mode], callback)

console.log("Going to open file!");
fs.open('input.txt', 'r+', function(err,fd){
    if(err){
        return console.error(err);
    }
    console.log("File opened successfully");
})

//getting file info via: fs.stat(path, callback)

fs.stat('input.txt', function(err,stats){
    if(err){
        return console.error(err);
    }
    console.log(stats);
    console.log("Got file info successfully!");

    //Check file type
    console.log("isFile ? " + stats.isFile());
    console.log("isDirectory ? " + stats.isDirectory());
});

//necessary for changes
data = 'Simply Easy Learning!';
console.log("Going to write into existing file");
//Tutorials Point is giving self learning content
//to teach the world in simple and easy way!!!!!
//fs.writeFile('input.txt', 'Tutorials Point is giving self learning content\nto teach the world in simple and easy way!!!!!', function(err){
fs.writeFile('input.txt', 'Simply Easy Learning!', function(err){
        
    if(err){
        return console.error(err);
    }

    console.log("Data written successfully!");
    console.log("Let's read newly written data");
    fs.readFile('input.txt', function(err, data){
        if(err){
            return console.error(err);
        }
        console.log("Asynchronous read: " + data.toString());
        //will appear twice due to being part of previous examples
        //will read the same thing (Simply Easy Learning!)
        //as it doesn't wait for callbacks.

    });
});

