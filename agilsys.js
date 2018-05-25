/*
Question 2:
Decode the message that is sent after you successfully connect to: ws://206.189.172.118
 
Please include:
Your code
Your output
The date and times you completed the exercise
Your remote IP address (optional)
*/
/*
var http = require('http');

// Options to be used by request 
var options = {
   host: 'localhost',
   port: '8081',
   path: '/index.htm'  
};

// Callback function is used to deal with response
var callback = function(response){
   // Continuously update stream with data
   var body = '';
   response.on('data', function(data) {
      body += data;
   });
   
   response.on('end', function() {
      // Data received completely.
      console.log(body);
   });
}
// Make a request to the server
var req = http.request(options, callback);
req.end();
*/

//12 PM 05/14/18
const WebSocket = require('ws');
const w = new WebSocket('ws://206.189.172.118');

w.on('open', function open() {
    w.send('something');
});

w.on('message', function incoming(data) {
    console.log(data);
});
process.on('uncaughtException', function (err) {
    console.log(err);
}); 



/*
Sending/Receiving Text
ws.on('open', function open() {
  ws.send('something');
});
 
ws.on('message', function incoming(data) {
  console.log(data);
});
*/

/*
Sending/Receiving Binary
w.on('open', function open() {
  const array = new Float32Array(5);
 
  for (var i = 0; i < array.length; ++i) {
    array[i] = i / 2;
  }
 
  w.send(array);
});
*/


/*
const ws = require('ws')
const w = new ws('wss://api.bitfinex.com/ws/2')

w.on('message', (msg) => {
    console.log(msg)
})

let msg = JSON.stringify({ 
  event: 'subscribe', 
  channel: 'ticker', 
  symbol: 'tBTCUSD' 
})

 w.on('open', () => {
    w.send(msg)
 })  

*/