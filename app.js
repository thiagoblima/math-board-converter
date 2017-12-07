/**
 * @name: app.js
 * @author: <thiagolimasp@live.com> (Thiago Lima)
 * @description: Nodejs server, application start.
 * The main nodejs server is going to be organized
 * into controllers which will be called later on
 * server.js
 * @see: More detailed info can be found on README.md
 * as well as on the proper server.js file with contains
 * more detailed instructions of the server organization. 
 * 
 */

const express = require('express');
const app = express();
const port = process.env.PORT || 3412;
const connect = (message) => console.log(message + port);


/**
 * @description: genenral/custom static directory
 * settings which points to the front-end build.
 * As normally set the static directory pointing
 * to root *build* directory.
 * 
 * @todo: import all the controllers here, they're going
 * to be started once app.js is run.  
 */

app.use(express.static(__dirname + '/build'));
app.listen(port);

connect("Math Server Started on port: http://localhost:");
