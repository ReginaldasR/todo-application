'use strict';

angular.module('todo', [])
    .config(function ($stateProvider) {
        var todo = {
            name: 'todo',
            url: '/todo',
            templateUrl: './components/todo/todoList.html',
            controller: 'TodoController'
        }

        $stateProvider.state(todo);
    });
