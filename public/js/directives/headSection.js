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
     link: function(data, element, attrs){
       data.showMe = false;
       data.searchOpen = function(){
          data.showMe = !data.showMe;
      };
    }
  };
});
