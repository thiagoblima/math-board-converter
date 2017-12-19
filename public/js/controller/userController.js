/**
 * @author     : <thiagolimasp@live.com> Thiago Lima
 * @name       : UserController
 * @description: User section objects are set here.
 */

(function() {
  // Load up controller
  angular.module("app").controller("UserController", UserController);
  angular
    .module("app")
    .controller("UserMessagesController", UserMessagesController);

  // dependency injection
  UserController.$inject = ["userServices", "$scope"];

  function UserController(userServices) {
    var vm = this;

    vm.addUser = function(user) {
      userServices
        .postUser(user)
        .then(function(data) {
          console.log("User successfully saved!", data);
        })
        .catch("Error while saving the user!");
    };
  }

  function UserMessagesController() {
    var vm = this;

    vm.messages = {
      settings: [
        { name: "required", message: "Can't leave this field empty" },
        { name: "pattern", message: "Wrong pattern" },
        { name: "minlength", message: "Too short!" },
        { name: "maxlength", message: "Too long!" }
      ]
    };
  }
})();
