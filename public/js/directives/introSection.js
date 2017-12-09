/**
 * @name: introSection.js
 * @description: intro set component intro-section
 * Binding data to its scope object.
 */

app.directive("introSection", function() {
  return {
    restrict: "EA",
    templateUrl: "js/directives/views/introSection.html",
    controllerAs: "vm",
    bindToController: true
  };
});
