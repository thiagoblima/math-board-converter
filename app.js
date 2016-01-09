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

 };

 app.get('/:index', function(req, res, next){
   var index = req.params.index;
   res.render("index", {index : index});
 });


app.use(errorHandler);

app.listen(port);
 console.log("Math Server Started");
