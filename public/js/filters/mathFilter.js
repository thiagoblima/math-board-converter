/**
 *@name: mathFilter.js
 *@description: AngularJS filter created to perform Math core
 * library to convert the table values.
 */


/*
 *@name: exponentialFilter 
 */

app.filter('exponentialFilter', function(){
   return function(input){
     if(input){
       if(input === undefined) input = "";
       if(isNaN(input)) input = "Insert any number";
       return input.toExponential();  
     }
   };
});

/*
 *@name: fixedFilter 
 */

app.filter('fixedFilter', function(){
   return function(input){
     if(input){
       if(input === undefined) input = "";
       if(isNaN(input)) input = "Insert any number";
       return input.toFixed(2);  
     }  
   };
});

/*
 *@name: precisionFilter 
 */

app.filter('precisionFilter', function(){
   return function(input){
     if(input){
       if(input === undefined) input = "";
       if(isNaN(input)) input = "Insert any number";
       return input.toPrecision();  
     }  
   };
});

/*
 *@name: stringFilter 
 */

app.filter('stringFilter', function(){
   return function(input){
     if(input){
       if(input === undefined) input = "";
       if(isNaN(input)) input = "Insert any number";
       return input.toString();  
     }
   };
});


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
 *@name: absoluteFilter 
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
