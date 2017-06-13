'use strict';

angular.module('app', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise('/');

	var siteState = {
    	abstract: true,
		url: '/'
	}
	$stateProvider.state('site', siteState);
	
})