var {defineSupportCode} = require('cucumber');

defineSupportCode(function ({ setDefaultTimeout }) {
    setDefaultTimeout(120 * 1000);
});