/**
 *@name: mathFilter.js
 *@description: AngularJS filter created to perform Math core
 * library to convert the table values.
 */

app.filter('ceilFilter', function(){
    return function(input){
      if(input){
        if (input === undefined) input = "";
        if (isNaN(input)) input = "Insert a number";
        return Math.ceil(input);
      } 
    };
});