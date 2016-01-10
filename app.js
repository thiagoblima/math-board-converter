var express = require('express'),
    cons    = require("consolidate"),
    app     = express(),
    port    = process.env.PORT || 3412;

 app.engine('html', cons.swig);
 app.set('view engine', 'html');
 app.set("views", __dirname + '/public');
 app.use(express.static( __dirname + '/public'));
 app.use(app.router);

app.listen(port);
 console.log("Math Server Started");
