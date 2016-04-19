/**
 *@name: headSection.js
 *@description: AngularJS directive set to hold the header as template
 *being parsed data through the scope as data.
 */


app.directive('headSection', function(){
  return{
     restrict: 'E',
     scope:{
       data: '='
     },
     templateUrl: 'js/directives/views/headSection.html'
  };
});
