/**
 * @author     : <thiagolimasp@live.com> Thiago Lima
 * @name       : UserController
 * @description: User section objects are set here.
 */

// Load up controller
angular.module("app").controller("ContactController", ContactController);
angular
  .module("app")
  .controller("ContactMessagesController", ContactMessagesController);

// dependency injection
ContactController.$inject = ["ContactService", "$scope"];
ContactMessagesController.$inject = ["$scope"];

function ContactController(ContactService) {
  var vm = this;
  vm.contacts = ContactService.list();

  vm.saveContact = function() {
    ContactService.save(vm.newcontact);
    vm.newcontact = {};
  };

  vm.delete = function(id) {
    ContactService.delete(id);
    if (vm.newcontact.id == id) vm.newcontact = {};
  };

  vm.edit = function(id) {
    vm.newcontact = angular.copy(ContactService.get(id));
  };

  vm.regex = {
    name: "^[a-zA-Z]*$",
    email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    phone: "/^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-s./0-9]*$/g"
  };
}

function ContactMessagesController() {
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
