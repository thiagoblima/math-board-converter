/**
 * @name       : headSection.js
 * @description: head set component head-section
 * Binding data to its scope object.
 */

angular.module('app').directive("headSection", function() {
  return {
    restrict: "EA",
    templateUrl: "js/directives/includes/views/headSection.html",
    controller: "HeadController",
    controllerAs: "vm"
  };
});
