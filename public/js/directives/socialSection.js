/**
 *@name: socialSection.js
 *@description: AngularJS directive with the purpose of setting a better
 *HTML5 organization, having a proper HTML5 template parsing data
 */

app.directive('socialSection', function(){
   return{
    restrict: 'E',
    scope:{},
    templateUrl:'js/directives/socialSection.html'
  };
});
