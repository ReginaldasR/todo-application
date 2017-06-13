'use strict';

var todoApp = angular.module('todo', [])
    .controller("TodoController", function ($scope, $http, $log) {
       
        $http.get('/api/todos')
            .success(function (data) {
                $scope.todos = data;
                $log.info('Got todos: ', data);
            })
            .error(function (error) {
                $log.error(error);
            });
            
    });