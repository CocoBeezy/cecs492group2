var shredFitApp = angular.module('shredFitApp',['ngRoute']);

shredFitApp.controller('LoginCtrl',['$scope','$http',function($scope,$http){
	$scope.method = 'GET';

	$scope.fetch = function(){
		$http({method:$scope.method, url:'/a'}).
		success(function(data,status){
			console.log(data);
		}).
		error(function(data,status){
			console.log(data);
		});
	}
	
}]);