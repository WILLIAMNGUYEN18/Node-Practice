buf = new Buffer(26);
for(var i = 0; i < 26; i++){
    buf[i] = i +97;
}
//outputs whole alphabet
console.log(buf.toString('ascii'));

//outputs abcde, first 6 letters (0-5)
console.log(buf.toString('ascii',0,5));

//outputs abcde, first 6 letters
console.log(buf.toString('utf8',0,5));

//default encoding for buffers is utf8, outputs abcde
console.log(buf.toString(undefined,0,5));


