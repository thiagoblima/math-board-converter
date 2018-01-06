/**
 * @author     : <thiagolimasp@live.com> Thiago Lima
 * @name       : app
 * @description: Main entrance for all controllers, services and directives.
 */

import routerConfig from "./router";
import introSection from "./directives/home/introSection";
import tableSection from "./directives/home/tableSection";
import tableMessages from "./directives/home/tableMessages";
import guideSection from "./directives/home/guideSection";
import contactSection from "./directives/home/contactSection";
import contactMessages from "./directives/home/contactMessages";
import userSection from "./directives/home/userSection";
import userMessages from "./directives/home/userMessages";
import userServices from "./services/userService";

angular
  .module("app", [
    "ngRoute",
    "ngAnimate",
    "ngSanitize",
    "ngMessages",
    "ui.mask"
  ])

  .config(routerConfig)
  .factory("userServices", ["$http", $http => new userServices($http)])
  .directive("introSection", () => new introSection().ngInit())
  .directive("tableSection", () => new tableSection().ngInit())
  .directive("tableMessages", () => new tableMessages().ngInit())
  .directive("guideSection", () => new guideSection().ngInit())
  .directive("contactSection", () => new contactSection().ngInit())
  .directive("contactMessages", () => new contactMessages().ngInit())
  .directive("userSection", () => new userSection().ngInit())
  .directive("userMessages", () => new userMessages().ngInit());
  