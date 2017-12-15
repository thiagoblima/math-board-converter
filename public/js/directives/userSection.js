/**
 * @name: headSection.js
 * @description: table set component table-section
 * Binding data to its scope object.
 */

angular.module('app').directive("userSection", function(){
    return{
      restrict: "EA",
      templateUrl: 'js/directives/views/userSection.html',
      controllerAs:'vm',
      bindToController: true
    };
 });