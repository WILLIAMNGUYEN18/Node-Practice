var buffer1 = new Buffer('ABC');
var buffer2 = new Buffer('ABCD');


//3 octets of raw data for buffer 3
var buffer3 = new Buffer(3);

//compares buffer and returns a number indicating before,after,
//or the same in sort order
var result = buffer1.compare(buffer2);

if(result < 0){
    console.log(buffer1 + " comes before " + buffer2);
} else if(result == 0){
    console.log(buffer1 + " is same as " + buffer2);
} else{
    console.log(buffer1 + " comes after " + buffer2);
}
//buf.copy(targetBuffer[, targetStart][, sourceStart][, sourceEnd])

//copying data of buffer1 to buffer3[target]
buffer1.copy(buffer3);
console.log("buffer3 content: " + buffer3.toString());

//buf.slice([start][, end])
//new buffer referencing old one and croppable
buffer1 = 'TutorialsPoint';
var buffer4 = buffer1.slice(0,9);
console.log("buffer4 content: " + buffer4.toString());
console.log("buffer length: " + buffer1.length);

