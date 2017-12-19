/**
 * @name       : ContactMessagesSection.js
 * @description: messages component contact-messages
 * Binding data to its scope object.
 */


angular.module('app').directive('contactMessages', function(){
    return{
       restrict:"AE",
       templateUrl:'js/directives/views/contactMessages.html',
       controllerAs:"vm",
       bindToController: true
    };
 });