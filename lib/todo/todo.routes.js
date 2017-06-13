var router = require('express').Router()

var todos = [
	{id: 1, name: 'First todo', done: false},
	{id: 2, name: 'Second todo', done: false}
]

router.get('', function(req, res) {
	res.json(todos)
})

router.post('', function(req, res) {
	var todo = req.body;
	todo.id = todos.length + 1
	todo.done = false;
	todos.push(todo);
	res.json({status: true, todo: todo});
})

module.exports = router;