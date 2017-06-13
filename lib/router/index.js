var todoRouter = require('../todo/todo.routes')

module.exports = function(app) {
	app.use('/todos', todoRouter);
	
	app.get('/a', function(req, res) {
		res.json({msg: 'hello'})
	})
}