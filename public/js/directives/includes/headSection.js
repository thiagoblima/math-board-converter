/**
 * @name       : headSection.js
 * @description: head set component head-section
 * Binding data to its scope object.
 */

angular.module('app').directive("headSection", function() {
  return {
    restrict: "EA",
    scope: {
      data: "="
    },
    templateUrl: "js/directives/includes/views/headSection.html",
    controllerAs: "vm",
    link: function(data, element, attrs) {
      data.showMe = false;
      data.searchOpen = function() {
        data.showMe = !data.showMe;
      };
      data.search = "Search a Math Info...";
    }
  };
});
