app.directive('headSection', function(){
  return{
     restrict: 'E',
     scope:{
       data: '='
     },
     templateUrl: 'js/directives/headSection.html'
  };
});
