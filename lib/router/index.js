var todoRouter = require('../todo/todo.routes')

module.exports = function(app) {
	app.use('/api/todos', todoRouter);
	
	app.get('/a', function(req, res) {
		res.json({msg: 'hello'})
	})
}