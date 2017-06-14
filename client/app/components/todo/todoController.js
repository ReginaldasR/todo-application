'use strict';
angular.module('todo')
    .controller('TodoController', function ($scope, $http, TodoService) {
		$scope.todo = {};

		TodoService.getTodoList().then(function(response) {
				$scope.todos = response.data;
			},
			function(err) {
				console.log(err)
			}
		);

		$scope.update = function(todo) {
			// console.log(todo);
			todo.done = !todo.done;
			TodoService.saveTodo(todo).then(function(response){
			}, function(response) {
				console.log('error');
			})
		}

		$scope.save = function() {
			TodoService.saveTodo($scope.todo).then(function(response) {
				console.log(response.data.todo);
				$scope.todos.push(response.data.todo);
				$scope.todo = {}; 
			},
			function(err) {
				console.log(err);
			})
		}
	});