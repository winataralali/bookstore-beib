app.service('BookDetail', ['$http', function ($http) {
	this.index = function () {
		return $http.get('http://192.168.123.233/intern-api/detail.php?id=1');
	}
}]);