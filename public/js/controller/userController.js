/**
 * @author     : <thiagolimasp@live.com> Thiago Lima
 * @name       : UserController
 * @description: User section objects are set here.
 */

(function() {
  "use strict";
  // Load up controller
  angular.module("app").controller("UserController", UserController);
  angular
    .module("app")
    .controller("UserMessagesController", UserMessagesController);

  // dependency injection
  UserController.$inject = ["userServices", "$scope"];

  function UserController(userServices) {
    var vm = this;
    vm.user = {};
    vm.user.path = "../../assets/";

    vm.addUser = function(user) {
      userServices
        .postUser(user)
        .then(function(data) {
          console.log("User successfully saved!", data);
        })
        .catch("Error while saving the user!");
    };

    vm.regex = {
      username: "^[a-zA-Z0-9]*$",
      password: "^[a-zA-Z0-9]*$",
      email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      firstname: "^[a-zA-Z]*$",
      lastname: "^[a-zA-Z]*$",
      age: "^[0-9]*$"
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
