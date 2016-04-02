/*
 *@app.js
 *
 *@description: Nodejs server, application start.
 *
 *Express, Consolidate and Swig are set on
 *node_modules as dependencies
 */


/**
 *@author: thiagolimasp@live.com (Thiago Lima)
 */


var express = require('express'),
    app     = express(),
    port    = process.env.PORT || 3412,
    connect = {

              sucess: function(msg, callback){
                      msg = console.log("Math Server Started on port: "+ port),
                 callback = function(){
                    return;
                  };

                  callback(msg);

                    return {
                     callback
                  };
              }

             };


/**
 *@description: genenral set up for express
 *
 *Setting views and the static path for renderimg
 *swig templates on the build.
 */

 app.use(express.static( __dirname + '/public/build'));
 app.listen(port);

 connect.sucess();
