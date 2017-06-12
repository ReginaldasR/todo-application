var assert = require('assert');
describe('configuration unit test', function() {
    it('should return default configuration when env parameter not found', function() {
		var config = require('../index')();
		assert.equal(4000, config.port);
    });
	it('should return test configuration NODE_ENV=test passed', function() {
		process.env.NODE_ENV='test'
		var config = require('../index')();		
		assert.equal(5000, config.port);
    });
});


