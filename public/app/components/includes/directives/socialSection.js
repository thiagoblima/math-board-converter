/**
 * @name       : socialSection.js
 * @description: social set component social-section
 * Binding data to its scope object.
 */

angular.module('app').directive("socialSection", function() {
  return {
    restrict: "E",
    scope: {},
    templateUrl: "components/directives/includes/views/socialSection.html"
  };
});
