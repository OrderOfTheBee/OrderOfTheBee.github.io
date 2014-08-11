var app = angular.module('app', [ ]);

app.controller('MembersCtrl', ['$scope', '$http', function($scope, $http){
    $scope.members = [];
    $http.get('/assets/data/members.json').success(function(data) {
      $scope.members = data;
    });
  }]);


