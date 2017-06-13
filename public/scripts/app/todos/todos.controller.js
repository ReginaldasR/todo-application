'use strict';
angular.module('app')
    .controller('TodosController', function ($scope, $http) {
			$http.get('/api/todos').then(function(response) {
				$scope.todos = response.data;
			},
			function(err) {
				console.log(err)
			}
		)
	})