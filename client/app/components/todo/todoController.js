'use strict';
angular.module('todo')
    .controller('TodoController', function ($scope, $http, TodoService) {
			TodoService.getTodoList().then(function(response) {
				$scope.todos = response.data;
			},
			function(err) {
				console.log(err)
			}
		);

		$scope.update = function(todo) {
			todo.done = !todo.done;
		}
	});