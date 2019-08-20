app.controller('MainController', ['$scope', 'Books', function ($scope, Books) {
    console.log(Books);
    Books.index().success(function (data) {
        $scope.Books = data;
    });
}]);
