/**
 * Establishes connection with the game server
 */
const net = require('net');
const {IP, PORT} = require('./constants');
// const PORT = require('./constants');
const connect = function() {
  const conn = net.createConnection({ 
    host: IP, //server ip address
    port: PORT //port that is open for connection
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 
  conn.on('data', (data) => { //once connection established
    console.log('Server says: ', data); //recieve data
  });
  conn.on('connect', ()=>{ //once connected to server
    console.log('Successflly connected to game server'); //log to client
    conn.write('Name: DAH'); //send to server
    // conn.write('Move: up');
    // setInterval(() => conn.write('Move: up'), 180);
    // setInterval(()=> conn.write('Move: up'), 900);
    // setTimeout(()=> conn.write('Move: left'), 50);
    // setInterval(()=> conn.write('Move: right'), 650);
    let shoe = 'snakes in a shoe!'
    // conn.write('Say: snakes in a shoe');
  });
  return conn;
}

module.exports = connect;