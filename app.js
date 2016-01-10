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
    port    = process.env.PORT || 3412;


/**
 *@description: genenral set up for express
 *
 *Setting views and the static path for renderimg
 *swig templates on the build.
 */


 app.engine('html', cons.nunjucks);
 app.set('view engine', 'html');
 app.set("views", __dirname + '/public');
 app.use(express.static( __dirname + '/public'));
 app.use(app.router);

 app.listen(port);
 console.log("Math Server Started");
