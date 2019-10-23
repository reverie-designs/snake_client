const net = require('net');
const connect = require('./client');
console.log('Connecting ...');
connect();

/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */
const  handleUserInput = function(data){
  // stdin.on(data => {
    if (data === '\u0003') {
      process.exit();
    }
  // }); 
};
const setupInput = function() {
  const stdin = process.stdin;
  
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  const  handleUserInput = function(){
    stdin.on('data', (key) => {
      if (key === '\u0003') {
        process.exit();
      }
    }); 
  };
  handleUserInput();
  return stdin;
};
setupInput();


