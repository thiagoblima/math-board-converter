/**
 *@name: headSection.js
 *@description: AngularJS directive set to hold the guide-section as template
 *being parsed data through the scope as data.
 */

app.directive("guideSection", function(){
   return{
     restrict: "EA",
     templateUrl: 'js/directives/views/guideSection.html',
     controllerAs:'vm',
     bindToController: true
   };
});
