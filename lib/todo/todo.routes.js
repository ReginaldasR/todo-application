var router = require('express').Router()

var todos = [
	{id: 1, name: 'First todo', done: false},
	{id: 2, name: 'Second todo', done: true}
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

router.get('/:id', function(req, res) {
	var id = req.params.id;
	if(id == undefined && id == null) {
		res.json({status: false, msg: "idCannotBeNull"})
		return;
	}
	todos.forEach(function(todo) {
		if(todo.id == id) {
			res.json({status: true, todo: todo})
			return;
		}
	})
	
	res.json({status: false, msg: "notFound"})
})

router.put('/:id', function(req, res) {
	var id = req.params.id;
	if(id == undefined || id == null) {
		res.json({status: false, msg: "idCannotBeNull"})
		return;
	}
	var todoReq = req.body;
	if(todoReq == undefined || todoReq == null) {
		res.json({status: false, msg: "todoCannotBeNull"})
		return;
	} else {
		todos.forEach(function(todo) {
		if(todo.id == id) {
			console.log(todoReq)
			todo.done = todoReq.done
			res.json({status: true, todo: todo})
			return;
		}
	})
	}

	
	// res.json({status: false, msg: "notFound"})
})

module.exports = router;