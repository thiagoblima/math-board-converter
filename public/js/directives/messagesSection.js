/**
 *@name: messagesSection.js
 *@description: Responsable for error messages which come out the Mathtable
 *application. It's parsed as vm from the controller to view-model.
 */


app.directive('messagesSection', function(){
   return{
      restrict:"AE",
      templateUrl:'js/directives/views/messagesSection.html',
      controllerAs:"vm",
      bindToController: true
   };
});