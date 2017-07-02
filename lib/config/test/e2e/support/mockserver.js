var promisifyAll = require('bluebird').promisifyAll;
var Stubby = require('stubby').Stubby;
promisifyAll(Stubby.prototype);

class MockServer {
    constructor() {
        this.stubby = new Stubby();
    }

    stub(endpointData) {
        var self = this;
        return self.stubby.stopAsync().then(function() {
            self.stubby = new Stubby();
            return self.stubby.startAsync({
                stubs: 3000,
                data: endpointData
            })
        });
    }

    stop() {
        return this.stubby.stopAsync();
    }
}

var mockserver = new MockServer();

module.exports = mockserver;