var fs = require("fs");

fs.readFile('input.txt', function (err,data){
    //if error occurs,
    //err object contains error
    //else
    //data contains contents of file

    //passed back to callback function when complete
    if(err){
        console.log(err.stack);
        return;
    }
    console.log(data.toString());
});
console.log("Program Ended");