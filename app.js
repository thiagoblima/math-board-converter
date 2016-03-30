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
    cons    = require("consolidate"),
    app     = express(),
    port    = process.env.PORT || 35729;


/**
 *@description: genenral set up for express
 *
 *Setting views and the static path for renderimg
 *swig templates on the build.
 */

 app.engine('html', cons.swig);
 app.set('view engine', 'html');
 app.set("views", __dirname + '/public/build/js/directives');
 app.use(express.static( __dirname + '/public'));

 app.listen(port);
 console.log("Math Server Started");
