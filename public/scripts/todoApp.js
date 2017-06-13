'use strict';

var todoApp = angular.module('todo', [])
    .controller("TodoController", function ($scope, $http, $log) {
       
        $http.get('/api/todos')
            .then(function (response) {
                $scope.todos = response.data;
            },
           function (error) {
                $log.error(error);
            });
            
    });