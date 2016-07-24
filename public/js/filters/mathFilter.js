/**
 *@name: mathFilter.js
 *@description: AngularJS filter created to perform Math core
 * library to convert the table values.
 */


/*
 *@name: ceilFilter 
 */

app.filter('ceilFilter', function(){
    return function(input){
      if(input){
        if (input === undefined) input = "";
        if (isNaN(input)) input = "Insert a float number";
        return Math.ceil(input);
      } 
    };
});

/*
 *@name: floorFilter 
 */

app.filter('floorFilter', function(){
    return function(input){
      if(input){
        if(input === undefined) input = "";
        if(isNaN(input)) input = "Insert a float number";
        return Math.floor(input);  
      }
    };
});

/*
 *@name: roundFilter 
 */

app.filter('roundFilter', function(){
    return function(input){
      if(input){
        if(input === undefined) input = "";
        if(isNaN(input)) input = "Insert a float number";
        return Math.round(input); 
      }
    };
});

/*
 *@name: roundFilter 
 */

app.filter('absoluteFilter', function(){
   return function(input){
     if(input){
       if(input === undefined) input = "";
       if(isNaN(input)) input = "This must be a number";
       return Math.abs(input);  
     }
   };
});