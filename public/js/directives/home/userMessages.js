/**
 * @name       : UserMessagesSection.js
 * @description: messages component user-messages
 * Binding data to its scope object.
 */


angular.module('app').directive('userMessages', function(){
    return{
       restrict:"AE",
       templateUrl:'js/directives/home/views/userMessages.html',
       controllerAs:"vm",
       bindToController: true
    };
 });