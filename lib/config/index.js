function defaultSettings() {
	return {
		port: 4000
	}
}

function testSettings() {
	var conf = defaultSettings();
	return conf;
}

module.exports = function() {
	switch(process.env.NODE_ENV) {
		case 'test':
			return testSettings();
		default:
			return testSettings();
	}
}()