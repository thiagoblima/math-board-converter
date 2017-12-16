/**
 * @name       : messagesSection.js
 * @description: messages component messages-section
 * Binding data to its scope object.
 */


angular.module('app').directive('tableMessages', function(){
   return{
      restrict:"AE",
      templateUrl:'js/directives/views/tableMessages.html',
      controllerAs:"vm",
      bindToController: true
   };
});