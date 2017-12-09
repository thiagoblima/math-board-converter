/**
 * @name: messagesSection.js
 * @description: messages component messages-section
 * Binding data to its scope object.
 */


app.directive('messagesSection', function(){
   return{
      restrict:"AE",
      templateUrl:'js/directives/views/messagesSection.html',
      controllerAs:"vm",
      bindToController: true
   };
});