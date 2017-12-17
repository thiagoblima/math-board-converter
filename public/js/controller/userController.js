/**
 * @author     : <thiagolimasp@live.com> Thiago Lima
 * @name       : UserController
 * @description: User section objects are set here.
 */

// Load up controller
angular.module("app").controller("UserController", UserController);
angular
  .module("app")
  .controller("UserMessagesController", UserMessagesController);

// dependency injection
UserController.$inject = ["UserService", "$scope"];
UserMessagesController.$inject = ["$scope"];

function UserController(UserService) {
  var vm = this;
  vm.users = UserService.list();

  vm.saveUser = function() {
    UserService.save(vm.newuser);
    vm.newuser = {};
  };

  vm.delete = function(id) {
    UserService.delete(id);
    if (vm.newuser.id == id) vm.newuser = {};
  };

  vm.edit = function(id) {
    vm.newuser = angular.copy(UserService.get(id));
  };

  vm.regex = {
    name: "^[a-zA-Z]*$",
    email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    phone: "/^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-s./0-9]*$/g"
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
