var seleniumWebdriver = require('selenium-webdriver');
var { defineSupportCode } = require('cucumber');
var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
var promisifyAll = require('bluebird').promisifyAll;
var Stubby = require('stubby').Stubby;
promisifyAll(Stubby.prototype);

chai.use(chaiAsPromised);

var stubby = new Stubby();

var singleTodoStub = require('../data/stubs/single.json');
var twoTodosStub = require('../data/stubs/two.json');

// Then either:
var expect = chai.expect;

defineSupportCode(function ({ Given, When, Then }) {
  Given('I am on homepage', function () {
    return browser.get('http://localhost:4000/index.html');
  });

  Given('one todo exists', function () {
    return stubby.stopAsync().then(function () {
      stubby = new Stubby();
      stubby.startAsync({
        stubs: 3000,
        data: singleTodoStub
      })
    });
  });

  Given('two todos exists', function () {
    return stubby.stopAsync().then(function () {
      stubby = new Stubby();
      stubby.startAsync({
        stubs: 3000,
        data: twoTodosStub
      })
    });
  });

  Then(/^I should see (\d+) todos?$/, function (todoNum) {
    return expect(element.all(by.repeater('todo in todos')).count()).to.eventually.equal(todoNum);
  });
});