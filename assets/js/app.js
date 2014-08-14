var app = angular.module('app', [ ]);

app.controller('MembersCtrl', ['$scope', '$http', function($scope, $http){
    $scope.members = [];
    $http.get('/assets/data/members.json').success(function(data) {
      $scope.members = data;
    $scope.rankedList = [];
    var n = 0;
    var array = [];
    while (n < 6) {
        var index = Math.floor(Math.random()*$scope.members.length);
        if ($.inArray(index, array) == -1) {
            array[n+1] = index;
            n++;
        }
    }
    for (n=1; n < 7; n++) {
       $scope.rankedList.push(
            $scope.members[array[n]]
        );
    }
    });
  }]);


