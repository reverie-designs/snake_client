/**
 * Establishes connection with the game server
 */
const net = require('net');
const connect = function() {
  const conn = net.createConnection({ 
    host: '172.46.2.204', //server ip address
    port: 50541 //port that is open for connection
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
  });
  return conn;
}

module.exports = connect;