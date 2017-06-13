'use strict';

describe('ToDo service', function () {
  let todoService, $httpBackend;

  beforeEach(module('ui.router'));
  beforeEach(module("todo"));

  const firstTodo = { "id": 1, "name": "First test todo", "done": false };
  const secondTodo = { "id": 2, "name": "Second test todo", "done": true };

  beforeEach(inject(function (_TodoService_, _$httpBackend_) {
    todoService = _TodoService_;
    $httpBackend = _$httpBackend_;
    $httpBackend.when('GET', '/api/todos').respond([firstTodo, secondTodo]);
  }));

  it('should return todo list', function (done) {
    todoService.getTodoList().then(function (response) {
      expect(response.data.length).toEqual(2);
      expect(response.data[0]).toEqual(firstTodo);
      expect(response.data[1]).toEqual(secondTodo);
      done();
    });
    $httpBackend.flush();
  });
});