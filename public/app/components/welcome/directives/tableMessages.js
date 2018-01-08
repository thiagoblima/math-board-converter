/**
 * @name       : TableMessagesSection.js
 * @description: table messages component <table-messages>
 * Binding data to its scope object.
 */

export default class tableMessages {
  constructor() {
    this.directive = {
      restrict: "AE",
      templateUrl: "components/directives/welcome/views/tableMessages.html",
      controllerAs: "vm",
      bindToController: true
    };
  }

  ngInit() {
    return this.directive;
  }
}
