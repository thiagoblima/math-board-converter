/**
 * @author     : <thiagolimasp@live.com> Thiago Lima
 * @name       : Table Controller
 * @description: Responsable for scope object table data,
 * settings and enchancement model view architecture.
 */

angular.module('app').controller("TableController", TableController);
angular.module('app').controller("MessagesController", MessagesController);

// dependency injection
TableController.$inject = ["$scope"];
MessagesController.$inject = ["$scope"];

function TableController() {
  var vm = this;

  vm.textFun = textFun();
  vm.clearExponential = clearExponential();
  vm.table = table;

  function textFun() {
    vm.val = "-";
    return vm.val.replace(/-/i, "Java Script type methods");
  }

  function clearExponential() {
    vm.value = "-";
    return vm.value.replace(/-/i, "Have Fun!");
  }

  vm.table = {
    intro: {
      text: "Number Testing Tool"
    },

    title: [
      { name: "Esponential" },
      { name: "Fixed" },
      { name: "Precision" },
      { name: "String" },
      { name: "Ceil" },
      { name: "Floor" },
      { name: "Round" },
      { name: "Absolute" }
    ]
  };
}

function MessagesController() {
  var vm = this;

  vm.messages = {
    settings: [
      { name: "required", message: "Enter a number" },
      { name: "pattern", message: "Wrong pattern" },
      { name: "minlength", message: "Too short!" },
      { name: "maxlength", message: "Too long!" }
    ]
  };
}
