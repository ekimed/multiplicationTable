angular.module('myApp', [])
	.controller('MultiplicationCtrl', function ($scope, $attrs) {
		// $scope.numbers = [1,2,3,4,5,6,7,8,9,10];
		$scope.numberLimit = $attrs.initalNumberLimit || 10;

		$scope.numbers = function () {
			var numbers = [];
			for (var i = 0; i < $scope.numberLimit; i++) {
				numbers[i] = i + 1;
			}

			return numbers;
		};

		$scope.compute = function (a,b) {
			return a * b;
		}

	});