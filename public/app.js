// create the module and name it scotchApp
var personalApp = angular.module('personalApp', ['ngRoute','ngAnimate']);

// configure our routes
personalApp.config(function($routeProvider) {
  $routeProvider

    // route for the home page
    .when('/', {
      templateUrl : 'pages/about.html',
      // controller  : 'mainController'
    })

    // route for the about page
    .when('/about', {
      templateUrl : 'pages/about.html',
      // controller  : 'aboutController'
    })

    // route for the contact page
    .when('/projects', {
      templateUrl : 'pages/projects.html',
      // controller  : 'contactController'
    });
});

// // create the controller and inject Angular's $scope
// personalApp.controller('mainController', function($scope) {
//   // create a message to display in our view
//   $scope.message = 'Everyone come and see how good I look!';
// });
//
// personalApp.controller('aboutController', function($scope) {
//   $scope.message = 'Look! I am an about page.';
// });
//
// personalApp.controller('contactController', function($scope) {
//   $scope.message = 'Contact us! JK. This is just a demo.';
// });
