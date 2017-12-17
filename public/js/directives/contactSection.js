/**
 * @name       : contactSection.js
 * @description: table set component table-section
 * Binding data to its scope object.
 */

angular.module('app').directive("contactSection", function(){
    return{
      restrict: "EA",
      templateUrl: 'js/directives/views/contactSection.html',
      controllerAs:'vm',
      bindToController: true
    };
 });