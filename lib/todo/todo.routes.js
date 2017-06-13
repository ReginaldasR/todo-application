var router = require('express').Router()

router.get('', function(req, res) {
	res.json([{name: 'First todo'}])
})

module.exports = router;