var app = angular.module('FirstApp', ['ngRoute']);

//directives here
app.directive('bookItem', function () {
	return {
		templateUrl: 'directives/book-item.html'
	};
});

