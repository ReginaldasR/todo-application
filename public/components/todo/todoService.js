angular.module('todo').service("todoService", function($http) {
    return {
        getTodoList: function() {
            return $http.get('/api/todos').then(function(response) {
				return {
                    data: response.data
                };
			},
			function(err) {
				console.log(err)
			});
        }
    };
});