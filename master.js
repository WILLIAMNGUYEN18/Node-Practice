const fs = require ('fs');
const child_process = require ('child_process');
/*
child_process.exec method runs a command in a shell and 
buffers the output. It has the following signature −
child_process.exec(command[, options], callback)

The exec() method returns a buffer with a max size 
and waits for the process to end and tries to return 
all the buffered data at once.

for (var i = 0; i<3; i++) {
    var workerProcess = child_process.exec('node support.js ' + i, function
    (error,stdout,stderr){
        
        //If there is an error, display 
        //the error stack, error code, and error signal
        if(error){
            console.log(error.stack);
            console.log('Error code '+ error.code);
            console.log('Signal received: ' + error.signal);
        }
        
        console.log('stdout: ' + stdout);
        console.log('stderr: ' + stderr);

    });
    workerProcess.on('exit', function(code){
        console.log('Child process exited with exit code ' + code);
    });
}
*/

/*
child_process.spawn method launches a new process with a given command. 
It has the following signature −
child_process.spawn(command[, args][, options])

spawn() method returns streams (stdout &stderr) and 
it should be used when the process returns a volume amount of data. 
spawn() starts receiving the response as soon as 
the process starts executing.

for (var i = 0; i<3; i++){
    var workerProcess = child_process.spawn('node',['support.js',i]);

    workerProcess.stdout.on('data', function(data){
        console.log('stdout: ' + data);
    });
    workerProcess.stdout.on('data', function(data){
        console.log('stderr: ' + data);
    });

    workerProcess.on('close',function(code){
        console.log('child process exited with code ' + code);
    });
}
*/

/*
child_process.fork method is a special case of spawn() 
to create Node processes. It has the following signature −

fork method returns an object with a built-in 
communication channel in addition to having all 
the methods in a normal ChildProcess instance.
*/

for(var i = 0; i<3; i++){
    var worker_process = child_process.fork("support.js", [i]);

    worker_process.on('close',function(code){
        console.log('child process exited with code ' + code);
    });
}