var { defineSupportCode } = require('cucumber');

defineSupportCode(function ({ After }) {
    After(function () {
        console.log('after');
        return this.driver.quit();
    });
});