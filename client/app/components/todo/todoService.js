angular.module('todo').service("TodoService", function ($http) {
    return {
        getTodoList: function () {
            return $http.get('/api/todos');
        }
    }
});