/**
 *@name: headSection.js
 *@description: AngularJS directive set to hold the header as template
 *being parsed data through the scope as data.
 */

app.directive('headSection', function(){
  return{
     restrict: 'EA',
     scope:{
       data: '='
     },
     templateUrl: 'js/directives/views/headSection.html',
     controllerAs:"vm",
     link: function(scope, element, attrs){
       scope.showMe = false;
       scope.searchOpen = function(){
          scope.showMe = !scope.showMe;
      };
      scope.search = "Search a Math Info...";
    }
  };
});
