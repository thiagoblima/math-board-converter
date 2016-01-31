app.directive('mainNav', function(){
   return{
     restrict: 'E',
     scope:{
      data: '='
    },
     templateUrl:'/js/directives/mainNav.html'
   }
});
