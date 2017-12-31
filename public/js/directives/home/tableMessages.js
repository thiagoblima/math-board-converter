/**
 * @name       : TableMessagesSection.js
 * @description: table messages component <table-messages>
 * Binding data to its scope object.
 */

export default class tableMessages {
  constructor() {
    this.directive = {
      restrict: "AE",
      templateUrl: "js/directives/home/views/tableMessages.html",
      controllerAs: "vm",
      bindToController: true
    };
  }

  ngInit() {
    return this.directive;
  }
}
