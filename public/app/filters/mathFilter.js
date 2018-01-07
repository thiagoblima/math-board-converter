/**
 * @name       : mathFilter.js
 * @description: filters created to perform Math core
 * library to convert table values.
 */

(function() {
  angular.module("app").filter("exponentialFilter", function() {
    return function(input) {
      if (parseInt(input)) {
        if (input === undefined) input = "";
        if (isNaN(input)) input = "Insert any number";
        return JSON.stringify([{ result: input.toExponential() }]);
      }
    };
  });

  /**
   * @name: fixedFilter
   */

  angular.module("app").filter("fixedFilter", function() {
    return function(input) {
      if (input) {
        if (input === undefined) input = "";
        if (isNaN(input)) input = "Insert any number";
        return JSON.stringify([{ result: input.toFixed(2) }]);
      }
    };
  });

  /**
   * @name: precisionFilter
   */

  angular.module("app").filter("precisionFilter", function() {
    return function(input) {
      if (input) {
        if (input === undefined) input = "";
        if (isNaN(input)) input = "Insert any number";
        return JSON.stringify([{ result: input.toPrecision() }]);
      }
    };
  });

  /**
   * @name: stringFilter
   */

  angular.module("app").filter("stringFilter", function() {
    return function(input) {
      if (input) {
        if (input === undefined) input = "";
        if (isNaN(input)) input = "Insert any number";
        return JSON.stringify([{ result: input.toString() }]);
      }
    };
  });

  /**
   * @name: ceilFilter
   */

  angular.module("app").filter("ceilFilter", function() {
    return function(input) {
      if (input) {
        if (input === undefined) input = "";
        if (isNaN(input)) input = "Insert a float number";
        return JSON.stringify([{ result: Math.ceil(input) }]);
      }
    };
  });

  /**
   * @name: floorFilter
   */

  angular.module("app").filter("floorFilter", function() {
    return function(input) {
      if (input) {
        if (input === undefined) input = "";
        if (isNaN(input)) input = "Insert a float number";
        return JSON.stringify([{ result: Math.floor(input) }]);
      }
    };
  });

  /**
   * @name: roundFilter
   */

  angular.module("app").filter("roundFilter", function() {
    return function(input) {
      if (input) {
        if (input === undefined) input = "";
        if (isNaN(input)) input = "Insert a float number";
        return JSON.stringify([{ result: Math.round(input) }]);
      }
    };
  });

  /**
   * @name: absoluteFilter
   */

  angular.module("app").filter("absoluteFilter", function() {
    return function(input) {
      if (input) {
        if (input === undefined) input = "";
        if (isNaN(input)) input = "This must be a number";
        return JSON.stringify([{ result: Math.abs(input) }]);
      }
    };
  });
})();
