app.directive('scroll', function($window){
  return function(scope, element, attrs){
    angular.element($window).bind('scroll', function(){
      if(this.pageYOffset >= 100){
        scope.navChange = true;
        console.log("Scrolled bellow header.");
      }else{
        scope.navChange = false;
        console.log("Header is viewed.");
      }
      scope.$apply();
    });
  };
});
