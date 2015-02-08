'use strict';

angular.module('core').controller('HeaderController', ['$scope', '$http', '$location', 'Authentication', 'Menus',
	function($scope, $http, $location, Authentication, Menus) {
		$scope.authentication = Authentication;
		$scope.isCollapsed = false;
		$scope.menu = Menus.getMenu('topbar');

		$scope.toggleCollapsibleMenu = function() {
			$scope.isCollapsed = !$scope.isCollapsed;
		};

		// Collapsing the menu after navigation
		$scope.$on('$stateChangeSuccess', function() {
			$scope.isCollapsed = false;
		});

		$scope.signout = function(){
			$http.get('/auth/signout').success(function(res){
				$scope.authentication.user = null;

				$location.path('/');
			}).error(function(res){
				$scope.error = res.message;
			});
		};
	}
]);