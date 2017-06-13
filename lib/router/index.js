module.exports = function(app) {
	app.get('/a', function(req, res) {
		res.json({msg: 'hello'})
	})
}