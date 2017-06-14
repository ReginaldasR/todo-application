angular.module('todo').service("TodoService", function ($http) {
    return {
        getTodoList: function () {
            return $http.get('/api/todos');
        },
        updateTodo: function (todo) {
            return $http.put('/api/todos/'+todo.id, todo);
        }
    }
});