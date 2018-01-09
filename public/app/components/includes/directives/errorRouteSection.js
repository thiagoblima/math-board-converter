/**
 * @name       : errorRoute.js
 * @description: errorRoute set component <error-route>
 * Binding data to its scope object.
 */

angular.module("app").directive("errorRoute", () => {
  return {
    restrict: "EA",
    templateUrl: "components/directives/includes/views/errorRouteSection.html",
    controllerAs: "vm",
    bindToController: true
  };
});
