var { defineSupportCode } = require('cucumber');
var mockserver = require('../support/mockserver');

defineSupportCode(function ({ After }) {
    After(function () {
        return mockserver.stop();
    });
});