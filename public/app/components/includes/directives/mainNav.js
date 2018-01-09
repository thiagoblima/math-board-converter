/**
 * @name       : mainNav.js
 * @description: mainNav set component main-nav
 * Binding data to its scope object.
 */

angular.module('app').directive("mainNav", function() {
  return {
    restrict: "EA",
    templateUrl: "components/directives/includes/views/mainNav.html",
    controllerAs: "vm",
    bindToController: true
  };
});
