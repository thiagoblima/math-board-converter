/**
 * @name       : introSection.js
 * @description: intro set component intro-section
 * Binding data to its scope object.
 */

angular.module('app').directive("introSection", function() {
  return {
    restrict: "EA",
    templateUrl: "js/directives/home/views/introSection.html",
    controllerAs: "vm",
    bindToController: true
  };
});
