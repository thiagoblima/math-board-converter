/**
 * @name       : errorRoute.js
 * @description: errorRoute set component <error-route>
 * Binding data to its scope object.
 */

angular.module('app').directive("errorRoute", function() {
    return {
      restrict: "EA",
      templateUrl: "js/directives/includes/views/errorRouteSection.html",
      controllerAs: "vm",
      bindToController: true
    };
  });
  