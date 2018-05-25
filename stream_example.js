var fs = require ("fs");
var data = '';
var dat = 'Simply Easy Learning';

//Create a readable stream
var readerStream = fs.createReadStream('input.txt');

//set the encoding to be utf8
readerStream.setEncoding('UTF8');

//handle stream events: data, end, and error
readerStream.on('data',function(chunk) {
    data += chunk;
});

readerStream.on('end', function(){
    console.log(data);
});

readerStream.on('error',function(err){
    console.log(err.stack);
});

console.log("Program Ended");

//creating a writable stream
var writerStream = fs.createWriteStream('output.txt');

//Write the data to stream with encoding to be utf8
writerStream.write(dat,'UTF8');

//Mark the end of file
writerStream.end();

//Handle stream events --> finish, and error
writerStream.on('finish',function(){
    console.log("Write completed.");
});

//outputs stack of error if there is an error?
writerStream.on('error', function(err){
    console.log(err.stack);
});

console.log("Writing to Stream Example Ended.")

