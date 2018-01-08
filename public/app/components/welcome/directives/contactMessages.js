/**
 * @name       : ContactMessagesSection.js
 * @description: contact messages component contact-messages
 * Binding data to its scope object.
 */

 export default class contactMessages {
  constructor() {
    this.directive = {
      restrict: "AE",
      templateUrl: "components/directives/welcome/views/contactMessages.html",
      controllerAs: "vm",
      bindToController: true
    };
  }
  ngInit() {
    return this.directive;
  }
}
