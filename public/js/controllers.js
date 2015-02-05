var shredFitApp = angular.module('shredFitApp',['ngRoute']);

shredFitApp.controller('LoginCtrl',['$scope','$http','$window',function($scope,$http,$window){
	$scope.method = 'GET';

	$scope.fetch = function(){
		// $http({method:$scope.method, url:'/auth/google',dataType:'jsonp'}).
		// success(function(data,status){
		// 	console.log(data);
		// }).
		// error(function(data,status){
		// 	console.log(data);
		// });
 		$window.location = $window.location.protocol + "//" + $window.location.host + $window.location.pathname + "auth/google";
	}
	
}]);