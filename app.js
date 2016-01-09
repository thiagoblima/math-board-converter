var express = require('express'),
    cons    = require("consolidate"),
    app     = express(),
    port    = process.env.PORT || 3412;

 app.engine('html', cons.swig);
 app.set('view engine', 'html');
 app.set("views", __dirname + '/public');
 app.use(express.static( __dirname + '/public'));
 app.use(app.router);



 function errorHandler(err, req, res, next){
     console.error(err.message);
     console.error(err.stack);
     res.status(500);
     res.render('error_template', { error: err });

 }
 app.get('/', function(req, res, next){
   var name = req.params.name;
   res.render("index", { name : 'Math Board Converter' });
 });


app.use(errorHandler);

app.listen(port);
 console.log("Math Server Started");
