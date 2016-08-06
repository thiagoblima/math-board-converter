/**
 *@name: headSection.js
 *@description: AngularJS directive set to hold the table-section as template
 *being parsed data through the scope as data.
 */

app.directive("tableSection", function(){
   return{
     restrict: "EA",
     templateUrl: 'js/directives/views/tableSection.html',
     controllerAs:'vm',
     bindToController: true
   };
});