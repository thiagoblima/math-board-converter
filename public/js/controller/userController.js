/**
 * @author     : <thiagolimasp@live.com> Thiago Lima
 * @name       : UserController
 * @description: User section objects are set here.
 */

/**
 * @name       : app
 * @description: Controller importing.
 */

app.controller("UserController", UserController);

/**
 * @name       : Dependency Injection
 * @description: This is where you just import the
 * dependencies to the $scope, never forget it, otherwise
 * app won't work correctly and may cause a break on the components.
 */

UserController.$inject = ["UserService", "$scope"];

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
}
