'use strict';
angular.module('app')
    .config(function ($stateProvider) {
        var todos = {
            name: 'todos',
            url: '/todos',
            templateUrl: 'scripts/app/todos/todos.html',
            controller: 'TodosController'
        }

        $stateProvider.state(todos);
    });
