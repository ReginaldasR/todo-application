angular.module('todo').service("todoService", function ($http) {
    return {
        getTodoList: function () {
            return $http.get('/api/todos');
        }
    }
});