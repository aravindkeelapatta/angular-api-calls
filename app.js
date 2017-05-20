var app = angular.module("myApp", ['ngResource']);



app.controller("myController", ["$scope", "$resource", function($scope,$resource) {
	$scope.message = "Angular Api Calls";



	$scope.getWeatherDetails = function() {
	$resource("https://jsonplaceholder.typicode.com/posts/1")
	.get(function(data) {
		console.log(data)
	 })
   }

}])