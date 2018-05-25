/* intercept unhandled errors via: 
internal (error emitter executing within run method)
external (error emitter added explicitly to domain using add method)
*/

/* Methods
domain.run(function)
Run the supplied function in the context of the domain,
implicitly binding all event emitters, timers, and low
level requests that are created in that context. 
This is the most basic way to use a domain.


domain.add(emitter)
Explicitly adds an emitter to the domain. 
If any event handlers called by the emitter throw an error, 
or if the emitter emits an error event, 
it will be routed to the domain's error event, 
just like with implicit binding.


domain.remove(emitter)
The opposite of domain.add(emitter). Removes domain handling 
from the specified emitter.

domain.bind(callback)
The returned function will be a wrapper around the 
supplied callback function. When the returned function is called, 
any errors that are thrown will be routed to the domain's error event.

domain.intercept(callback)
This method is almost identical to domain.bind(callback). 
However, in addition to catching thrown errors, 
it will also intercept Error objects sent as the 
first argument to the function.


domain.enter()
The enter method is plumbing used by the run, bind, 
and intercept methods to set the active domain. 
It sets domain.active and process.domain to the domain, 
and implicitly pushes the domain onto the domain stack 
managed by the domain module (see domain.exit() 
for details on the domain stack). The call to enter 
delimits the beginning of a chain of asynchronous calls 
and I/O operations bound to a domain.
	

domain.exit()
The exit method exits the current domain, 
popping it off the domain stack. Whenever the 
execution switches to the context of a different chain 
of asynchronous calls, it's important to ensure that the
current domain is exited. The call to exit delimits either 
the end of or an interruption to the chain of asynchronous calls 
and I/O operations bound to a domain.

domain.dispose()
Once dispose has been called, the domain will no longer be 
used by callbacks bound into the domain via run, bind, or intercept, 
and a dispose event is emit

 	

domain.members
An array of timers and event emitters that have been 
explicitly added to the domain.
*/

var EventEmitter = require("events").EventEmitter;
var domain = require("domain");

var emitter1 = new EventEmitter();

//Create a domain
var domain1 = domain.create();

domain1.on('error',function(err){
console.log("domain1 handled this error (" + err.message + ")");
});

//explicit binding

domain1.add (emitter1);

emitter1.on('error',function(err){
    console.log("listener handled this error (" + err.message + ")");
});

emitter1.emit('error', new Error('To be handled by listener'));

emitter1.removeAllListeners('error');

emitter1.emit('error',new Error('to be handled by domain1'));

var domain2 = domain.create();

domain2.on('error', function(err){
    console.log("domain 2 handled this error (" + err.message + ")");
});

//implicit binding

domain2.run(function(){
    var emitter2 = new EventEmitter();
    emitter2.emit('error',new Error('To be handled by domain2'));
});

domain1.remove(emitter1);
emitter1.emit('error', new Error('Converted to exception. System will crash!'));