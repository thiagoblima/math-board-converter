/**
 * @name       : tableSection.js
 * @description: table set component <table-section>
 * Binding data to its scope object.
 */

export default class tableSection {
  constructor() {
    this.directive = {
      restrict: "EA",
      templateUrl: "components/directives/welcome/views/tableSection.html",
      controllerAs: "vm",
      bindToController: true
    };
  }

  ngInit() {
    return this.directive;
  }
}
