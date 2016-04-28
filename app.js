/*
 *@app.js
 *
 *@description: Nodejs server, application start.
 *
 *Express is set as dependecy on node_modules
 *Other dependencies appear soon
 */


/**
 *@author: thiagolimasp@live.com (Thiago Lima)
 */


var express = require('express'),
    app     = express(),
    port    = process.env.PORT || 3412,
    connect = {
                sucess: function(msg, callback){
                   var msg = console.log("Math Server Started on port: "+ port),
                   callback = function(){
                     return;
                   };
                  return callback(msg);
                }
              };


/**
 *@description: genenral set up for express
 *
 *Setting views and the static path for renderimg
 *swig templates on the build.
 */

 app.use(express.static( __dirname + '/build'));
 app.listen(port);

 connect.sucess();
