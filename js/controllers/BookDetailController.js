app.controller('BookDetailController',['$scope', 'BookDetail', function($scope, BookDetail){
    console.log(BookDetail);
    BookDetail.inderx().success(function (data) {
        $scope.BookDetail=data;
    })
}]);


