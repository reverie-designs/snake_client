let connection;
const setUpInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  const  handleUserInput = function(){
    stdin.on('data', (key) => {
      if (key === '\u0003') {
        process.exit();
      }
      if (key === '\u0077'){
        conn.write('Move: up');
      }
      if (key === '\u0061'){
        conn.write('Move: left');
      }
      if (key === '\u0073'){
        conn.write('Move: down');
      }
      if (key === '\u0064'){
        conn.write('Move: right');
      }
      if (key === '\u0067'){
        conn.write('Say: snakeySss');
      }
      if (key === '\u0068'){
        conn.write('Say: hahahaha🤣');
      }
      
    }); 
  };
  handleUserInput();
  return stdin;
};

module.exports = setUpInput;