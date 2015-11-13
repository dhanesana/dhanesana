'use strict';

/**
 * @ngdoc overview
 * @name dhanesanaApp
 * @description
 * # dhanesanaApp
 *
 * Main module of the application.
 */
angular
  .module('dhanesanaApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider, $locationProvider) {
    // locationProvider config for removing #hash from url
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

$('a.mdl-layout__tab').mouseenter(function() {
  $(this).addClass('is-active');
});

$('a.mdl-layout__tab').mouseleave(function() {
  $(this).removeClass('is-active');
});
