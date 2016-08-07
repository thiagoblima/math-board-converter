/**
 *@name: introSection.js
 *@description: Intro section is now divided and being rendered as template
 *HTML5 / AngularJS directive which has data parsing data through the scope
 */



app.directive('introSection', function(){
  return{
    restrict: 'EA',
    templateUrl:'js/directives/views/introSection.html',
    controllerAs:"vm",
    bindToController: true
  };
});
