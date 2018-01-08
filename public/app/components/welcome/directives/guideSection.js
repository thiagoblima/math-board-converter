/**
 * @name       : guideSection.js
 * @description: guide section component <guide-section>
 * Binding data to its scope object.
 */
export default class guideSection {
  constructor() {
    this.directive = {
      restrict: "EA",
      templateUrl: "components/directives/welcome/views/guideSection.html",
      controllerAs: "vm",
      bindToController: true
    };
  }
  ngInit() {
    return this.directive;
  }
}
