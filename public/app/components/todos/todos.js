'use strict';
angular.module('app')
    .config(function ($stateProvider) {
        $stateProvider
            .state('todos', {
				parent: 'site',
                url: '/todos',
                views: {
                    'content@': {
                        templateUrl: 'app/todos/todos.html',
                        controller: 'TodosController'
                    }
                },
            });
    });
