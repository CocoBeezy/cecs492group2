'use strict';

// Setting up route
angular.module('home').config(['$stateProvider',
	function($stateProvider) {

		// Home state routing
		$stateProvider.
		state('home', {
			url: '/home',
			templateUrl: 'modules/home/views/home.client.view.html',
			authenticate: true
		});
	}
]).config(['$locationProvider',
	function($locationProvider){
		//Use HTML5 History API
		$locationProvider.html5Mode(true);
	}
]).run(function($rootScope, $state, Authentication){
	$rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams){
		if(toState.authenticate && !Authentication.user){
			$state.transitionTo('signin');
			event.preventDefault();
		}
	});
});