angular.module('app', [
	'ui.router',

	'app.controllers.application',
	'app.controllers.index'
])

.config(function ($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise('/')

	$stateProvider

	.state('app', {
		abstract: true,
		templateUrl: 'views/layouts/default.html',
		controller: 'ApplicationController'
	})

	.state('app.index', {
		url: '/',
		views: {
			'mainView': {
				templateUrl: 'views/index/index.html',
				controller: 'index#index'
			}
		}
	})

})
