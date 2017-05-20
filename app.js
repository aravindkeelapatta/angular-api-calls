var app = angular.module("myApp", []);



app.controller("myController", ["$scope", "$http", function($scope,$http) {
	$scope.message = "Angular Api Calls";



	$scope.getWeatherDetails = function() {
	$http.get("https://jsonplaceholder.typicode.com/posts/1")
	.then(function(response) {
		console.log(response.data)
	 })
   }

}])