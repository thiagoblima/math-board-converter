/**
 * @name       : TableMessagesSection.js
 * @description: messages component table-messages
 * Binding data to its scope object.
 */


angular.module('app').directive('tableMessages', function(){
   return{
      restrict:"AE",
      templateUrl:'js/directives/home/views/tableMessages.html',
      controllerAs:"vm",
      bindToController: true
   };
});