/**
 * @name       : contactSection.js
 * @description: contact set component <contact-section>
 * Binding data to its scope object.
 */

angular.module("app").directive("contactSection", function() {
  return {
    restrict: "EA",
    templateUrl: "js/directives/home/views/contactSection.html",
    controllerAs: "vm",
    bindToController: true
  };
});
