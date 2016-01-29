app.directive('introSection', function(){
  return{
    restrict: 'E',
    scope:{
      data: '='
    },
    templateUrl:'js/directives/introSection.html'
  };

});
