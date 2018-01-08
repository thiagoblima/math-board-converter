/**
 * @name       : introSection.js
 * @description: intro section component <intro-section>
 * Binding data to its scope object.
 */

export default class introSection {
  constructor() {
    this.directive = {
      restrict: "EA",
      templateUrl: "components/directives/welcome/views/introSection.html",
      controllerAs: "vm",
      bindToController: true
    };
  }

  ngInit() {
    return this.directive;
  }
}
