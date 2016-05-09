/**
 *@name: searchFilter.js
 *@description: AngularJS filter created to perform on search bar
 * that's inside header.
 */

app.filter('searchFilter', function(){
  return function(text, length, end){
    if (text){
       if(isNaN(length)) length = 0;
       if(end === undefined) end = "...";
       if(text.length <= length) return text;
       else return String(text).substring(0, length) + end;
    }
  };
});
