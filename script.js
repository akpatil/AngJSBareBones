var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider) {
	$routeProvider

	.when('/', {
		templateUrl: 'home.html',
		controller: 'mainController'
	})

	.when('/contact', {
		templateUrl: 'contact.html',
		controller: 'contactController'
	})

	.when('/about', {
		templateUrl: 'about.html',
		controller: 'aboutController'
	});
});

myApp.controller('mainController', function($scope) {
	$scope.message = "You're inside of the main page";
});

myApp.controller('contactController', function($scope) {
	$scope.message = "You're inside of contact page";
});

myApp.controller('aboutController', function($scope) {
	$scope.message = "You're inside of about page";
});