/**
 * @author     : <thiagolimasp@live.com> Thiago Lima
 * @name       : UserController
 * @description: User section objects are set here.
 */

 // Load up controller
app.controller("UserController", UserController);

// dependency injection
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
