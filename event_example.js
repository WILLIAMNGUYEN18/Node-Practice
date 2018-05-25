//importinmg events module
var events = require ('events');

//Create an eventEmitter object
var eventEmitter = new events. EventEmitter();
    
//Create an event handler as follows
var connectHandler = function connected(){
    console.log('connection successful.');

    //Fire data_received event
    eventEmitter.emit('data_received');
}
//Binds the connection event with the event handler
eventEmitter.on('connection', connectHandler);

//Binds the data_received event with the anonymous function
eventEmitter.on('data_received', function(){
    console.log('data received successfully.');
});

// Fire the connection event
eventEmitter.emit('connection');
console.log("Program Ended");
