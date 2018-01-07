/**
 * @author     : <thiagolimasp@live.com> Thiago Lima
 * @name       : app
 * @description: Main entrance for all controllers, services and directives.
 */

import routerConfig from "./router";
import introSection from "./components/welcome/directives/introSection";
import tableSection from "./components/welcome/directives/tableSection";
import tableMessages from "./components/welcome/directives/tableMessages";
import guideSection from "./components/welcome/directives/guideSection";
import contactSection from "./components/welcome/directives/contactSection";
import contactMessages from "./components/welcome/directives/contactMessages";
import userSection from "./components/welcome/directives/userSection";
import userMessages from "./components/welcome/directives/userMessages";
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
  