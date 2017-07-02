var seleniumWebdriver = require('selenium-webdriver');
var {defineSupportCode} = require('cucumber');
var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");

chai.use(chaiAsPromised);

// Then either:
var expect = chai.expect;

defineSupportCode(function({Given, When, Then}) {
  Given('I am on homepage', function() {
    return browser.get('http://localhost:4000/index.html');
  });

  Then(/^I should see (\d+) todos?$/, function(todoNum) {
      return expect(element.all(by.repeater('todo in todos')).count()).to.eventually.equal(todoNum);
  });
});