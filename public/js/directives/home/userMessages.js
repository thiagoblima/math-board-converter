/**
 * @name       : UserMessagesSection.js
 * @description: messages component user-messages
 * Binding data to its scope object.
 */

export default class userMessages {
  constructor() {
    this.directive = {
      restrict: "AE",
      templateUrl: "js/directives/home/views/userMessages.html",
      controllerAs: "vm",
      bindToController: true
    };
  }
  ngInit() {
    return this.directive;
  }
}
