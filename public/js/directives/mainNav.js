/**
 *@name: mainNav.js
 *@description: AngularJS directive with the purpose of setting a better
 *HTML5 organization, having a proper HTML5 template parsing data
 */

app.directive('mainNav', function(){
   return{
     restrict: 'E',
     scope:{
      data: '='
    },
     templateUrl:'/js/directives/mainNav.html'
   }
});
