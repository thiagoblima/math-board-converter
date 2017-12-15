/**
 * @name: guideSection.js
 * @description: directive component guide-section 
 * Binding data to its scope object.
 */

angular.module('app').directive("guideSection", function() {
  return {
    restrict: "EA",
    templateUrl: "js/directives/views/guideSection.html",
    controllerAs: "vm",
    bindToController: true
  };
});
