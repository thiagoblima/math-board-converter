/**
 * @name: scroll.js
 * @description: Scroll event that modifies the way header and content-wrapper
 * Behaves. Important to observe the tags on index.html.
 * Excellent alternative, code less, build more.
 */

angular.module('app').directive("scrollHeader", function($window) {
  return function(scope, element, attrs) {
    angular.element($window).bind("scroll", function() {
      if (this.pageYOffset >= 100) {
        scope.headAnimate = true;
        console.log("Scrolled bellow header.");
      } else {
        scope.headAnimate = false;
        console.log("Header is viewed.");
      }
      scope.$apply();
    });
  };
});

angular.module('app').directive("scrollNav", function($window) {
  return function(scope, element, attrs) {
    angular.element($window).bind("scroll", function() {
      if (this.pageYOffset >= 220) {
        scope.navAnimate = true;
        console.log("Scrolled bellow Nav");
      } else {
        scope.navAnimate = false;
        console.log("Nav is viewed");
      }
      scope.$apply();
    });
  };
});

angular.module('app').directive("scrollTable", function($window) {
  return function(scope, element, attrs) {
    angular.element($window).bind("scroll", function() {
      if (this.pageYOffset >= 907) {
        scope.mathTable = true;
        console.log("Scrolled bellow table");
      } else {
        scope.mathTable = false;
        console.log("Math is viewed");
      }
      scope.$apply();
    });
  };
});
