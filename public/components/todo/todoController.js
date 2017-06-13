'use strict';
angular.module('todo')
    .controller('TodoController', function ($scope, $http) {
			$http.get('/api/todos').then(function(response) {
				$scope.todos = response.data;
			},
			function(err) {
				console.log(err)
			}
		);
	});