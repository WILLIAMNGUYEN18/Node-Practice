var http = require("http");

http.createServer(function(request,response)
{
   // Send the HTTP header 
   // HTTP Status: 200 : OK
   // Content Type: text/plain

    //response body as "Hello World"
    response.end('Hello World\n');

}).listen(8081)

console.log('Server running at hhtp://127.0.0.1:8081/');
//bind it at port 8081 using the 
//listen method associated with the server instance.
