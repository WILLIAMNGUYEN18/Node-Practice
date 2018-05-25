/*
    Client − This layer consists of web browsers, mobile browsers or applications which can make HTTP requests to the web server.

    Server − This layer has the Web server which can intercept the requests made by the clients and pass them the response.

    Business − This layer contains the application server which is utilized by the web server to do the required processing. This layer interacts with the data layer via the database or some external programs.

    Data − This layer contains the databases or any other source of data.
*/

var http = require ('http');
var fs = require ('fs');
var url = require ('url');

//Create a server

http.createServer( function (request, response){
    //Parse the request containing file name
    var pathname = url.parse(request.url).pathname;

    //Print the name of the file for which request is made

    console.log("Request for " + pathname + " received.");

    //Read the requested file content from the file system
    fs.readFile(pathname.substr(1),function(err,data){
        if(err){
            console.log(err);
            //HTTP Status: 404: NOT FOUND
            //Content Type: text/plain
            response.writeHead(404,{'Content-Type': 'text/html'});

        } else{
            //Page found
            //HTTP Status: 200: OK
            
            //Content Type: text/plain
            response.writeHead(200,{'Content-Type': 'text/html'});

            //Write the content of the file to response body
            response.write(data.toString());

        }
        //Send the response body
        response.end();

    });
}).listen(8081);

//Console will print the message
console.log('Server running at http://127.0.0.1:8081/');
//have to request for /index.htm