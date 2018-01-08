/**
 * @name       : contactSection.js
 * @description: contact setction component <contact-section>
 * Binding data to its scope object.
 */
export default class contactSection {
  constructor() {
    this.directive = {
      restrict: "EA",
      templateUrl: "components/directives/welcome/views/contactSection.html",
      controllerAs: "vm",
      bindToController: true
    };
  }
  ngInit() {
    return this.directive;
  }
}
