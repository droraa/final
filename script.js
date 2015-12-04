var app = angular.module("MSROrder", []);


app.controller("menuController", function($scope) {
	$scope.menu = ["Fill", "Show", "Send"];
});

app.controller("userController", function($scope, $http) {

	$scope.displayUsers = function(json) {
		$http.get(json).success(function(data) {
			$scope.users = data;
		});
	}
});
