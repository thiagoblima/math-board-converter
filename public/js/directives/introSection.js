/**
 *@name: introSection.js
 *@description: Intro section is now divided and being rendered as template
 *HTML5 / AngularJS directive which has data parsing data through the scope
 */


app.directive('introSection', function(){
  return{
    restrict: 'E',
    scope:{
      data: '='
    },
    templateUrl:'js/directives/introSection.html'
  };

});
