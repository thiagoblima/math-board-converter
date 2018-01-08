/**
 * @name       : userSection.js
 * @description: user set component <user-section>
 * Binding data to its scope object.
 */
export default class userSection {
  constructor() {
    this.directive = {
      restrict: "EA",
      templateUrl: "components/directives/welcome/views/userSection.html",
      controllerAs: "vm",
      bindToController: true
    };
  }
  ngInit() {
    return this.directive;
  }
}
