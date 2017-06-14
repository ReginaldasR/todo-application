'use strict';

describe('ToDo service', function () {
  let todoService, $httpBackend;

  beforeEach(module('ui.router'));
  beforeEach(module("todo"));

  const firstTodo = { "id": 1, "name": "First test todo", "done": false };
  const secondTodo = { "id": 2, "name": "Second test todo", "done": true };
  const emptyTodo = { "name": "Second test todo", "done": true };
  const savedTodo = { "id": 3,"name": "Second test todo", "done": true };

  beforeEach(inject(function (_TodoService_, _$httpBackend_) {
    todoService = _TodoService_;
    $httpBackend = _$httpBackend_;
    $httpBackend.when('GET', '/api/todos').respond([firstTodo, secondTodo]);
    $httpBackend.when('PUT', '/api/todos/1', firstTodo).respond({status: true, todo: firstTodo});
    $httpBackend.when('POST', '/api/todos', emptyTodo).respond({status: true, todo: savedTodo});
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

  it('should return updated todo', function (done) {
    todoService.saveTodo(firstTodo).then(function (response) {
      expect(response.data).toEqual({status: true, todo: firstTodo});
      done();
    });
    $httpBackend.flush();
  });

  it('should return newly created todo', function (done) {
    todoService.saveTodo(emptyTodo).then(function (response) {
      expect(response.data).toEqual({status: true, todo: savedTodo});
      done();
    });
    $httpBackend.flush();
  });
});