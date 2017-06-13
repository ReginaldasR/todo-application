'use strict';

describe('ToDo service', function () {
  let todoService, httpBackend;

  beforeEach(module('ui.router'));
  beforeEach(module("todo"));

  const firstTodo = { "id": 1, "name": "First test todo", "done": false };
  const secondTodo = { "id": 2, "name": "Second test todo", "done": true };

  beforeEach(inject(function (_todoService_, $httpBackend) {
    todoService = _todoService_;
    httpBackend = $httpBackend;
    httpBackend.when('GET', '/api/todos').respond([firstTodo, secondTodo]);
  }));

  it('should return todo list', function (done) {
    todoService.getTodoList().then(function (response) {
      expect(response.data.size).toEqual(3);
      expect(response.data[0]).toEqual(firstTodo);
      expect(response.data[1]).toEqual(secondTodo);
      done();
    });
    httpBackend.flush();
  });
});