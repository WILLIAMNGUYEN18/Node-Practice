var fs = require ("fs");
var zlib = require ('zlib');
/*
 connect the output of one stream to another stream 
 and create a chain of multiple stream operations. 
 It is normally used with piping operations.
 Now we'll use piping and chaining to first compress a file 
 and then decompress the same.
*/

//Compress the file input.txt to input.txt.gz
fs.createReadStream('input.txt')
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream('input.txt.gz'));//semi after the pipes

console.log("Files Compressed.");

