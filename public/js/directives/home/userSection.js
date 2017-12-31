/**
 * @name       : userSection.js
 * @description: user set component <user-section>
 * Binding data to its scope object.
 */
export default class userSection {
  constructor() {
    this.directive = {
      restrict: "EA",
      templateUrl: "js/directives/home/views/userSection.html",
      controllerAs: "vm",
      bindToController: true
    };
  }
  ngInit() {
    return this.directive;
  }
}
