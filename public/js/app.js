/**
 * @author     : <thiagolimasp@live.com> Thiago Lima
 * @name       : pp
 * @description: Main entrance for all controllers, services and directives.
 */

import angular from 'angular';
import routerConfig from './router';

angular.module("app", ["ngRoute","ngAnimate","ngSanitize", "ngMessages", "ui.mask"]).config(routerConfig);
