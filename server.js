var app = require('./app');
var debug = require('debug')('wascrapperbackend:server');
var dbConnection = require('./db/dbConnect')
require('dotenv').config();

dbConnection.connect((err) => {
            if (err) {
                console.error('error connecting: ' + err.stack);
                return;
            }
            
            console.log('connected as id ' + dbConnection.threadId);
        });
var port = normalizePort(process.env.PORT || '3000');
app.listen(port, ()=>{
    console.log(`server running on http://localhost:${port}`)
})


function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}