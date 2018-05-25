var fs = require ("fs");

/* 
 * Piping:
 * provide the output of one stream as the input to another stream.
 */

//create a readable stream
var readerStream = fs.createReadStream('input.txt');

//create a writable stream
var writerStream = fs.createWriteStream('output.txt');

//Pipe the read and write operations
//read input.txt and write data to output.txt

readerStream.pipe(writerStream);
console.log("Program Ended");