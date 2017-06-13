'use strict';

angular.module('app', ['ui.router', 'todo'])
	.config(function ($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('todo');
	})