/**
 * @author     : <thiagolimasp@live.com> Thiago Lima
 * @name       : ContactController
 * @description: Contact section objects are set here.
 */

(function() {
  'use strict';
  // Load up controller
  angular.module("app").controller("ContactController", ContactController);
  angular
    .module("app")
    .controller("ContactMessagesController", ContactMessagesController);

  // dependency injection
  ContactController.$inject = ["contactService", "$scope"];
  ContactMessagesController.$inject = ["$scope"];

  function ContactController(contactService) {
    var vm = this;
    vm.contacts = contactService.list();

    vm.saveContact = function() {
      contactService.save(vm.newcontact);
      vm.newcontact = {};
    };

    vm.delete = function(id) {
      contactService.delete(id);
      if (vm.newcontact.id == id) vm.newcontact = {};
    };

    vm.edit = function(id) {
      vm.newcontact = angular.copy(contactService.get(id));
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
})();