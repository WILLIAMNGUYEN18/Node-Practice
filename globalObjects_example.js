console.log("Printing filename based on location of program:");
console.log( __filename);

console.log("printing directory that current script resides in");
console.log(__dirname);

//setTimeout(cb, ms) global function run callback cb after atleast ms
//milliseconds, maxes out at 24.8 days
function printHello(){
        console.log("Hello World");
}
//Now call above function after 2 seconds
//setTimeout(printHello,2000);

//var t = setTimeout(printHello,2000);

//clearTimeout(t) stop timer previously created with setTimeout()
//clearTimeout(t);

//setInterval(cb, ms) run callback cb repeateadly after atleast
//ms milliseconds

setInterval(printHello,2000);