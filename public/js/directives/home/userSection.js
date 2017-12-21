/**
 * @name       : userSection.js
 * @description: user set component <user-section>
 * Binding data to its scope object.
 */

angular.module("app").directive("userSection", function() {
    return {
      restrict: "EA",
      templateUrl: "js/directives/home/views/userSection.html",
      controllerAs: "vm",
      bindToController: true
    };
  });