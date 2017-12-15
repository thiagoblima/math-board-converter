/**
 * @name: headSection.js
 * @description: table set component table-section
 * Binding data to its scope object.
 */

angular.module('app').directive("tableSection", function(){
   return{
     restrict: "EA",
     templateUrl: 'js/directives/views/tableSection.html',
     controllerAs:'vm',
     bindToController: true
   };
});