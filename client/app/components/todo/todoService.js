angular.module('todo').service("TodoService", function ($http) {
    return {
        getTodoList: function () {
            return $http.get('/api/todos');
        },
        saveTodo: function (todo) {
            if(todo.id == null || todo.id == undefined) {
                return $http.post('/api/todos', todo);
            } else {
                return $http.put('/api/todos/'+todo.id, todo);
            }
        }
    }
});