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
  conn.on('connect', ()=>{
    console.log('Successflly connected to game server');
    conn.write('Name: DAH');
  });
  return conn;
}

module.exports = connect;