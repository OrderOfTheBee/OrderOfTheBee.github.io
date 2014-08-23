var app = angular.module('app', [ 'ui.bootstrap' ]);

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

app.controller('AddonsCtrl', ['$scope', '$http', function($scope, $http){
    $scope.addons = [];
    $http.get('/assets/data/addons.json').success(function(data) {
      $scope.addons = data;
    })
  }]);

app.controller('PSNCtrl', ['$scope', '$http', function($scope, $http){
    $scope.items = [];
    $http.get('/assets/data/psn.json').success(function(data) {
      $scope.items = data;
    })
  }]);

app.controller('StoriesCtrl', ['$scope', '$http', function($scope, $http){
    $scope.stories = [];
    $http.get('/assets/data/stories.json').success(function(data) {
      $scope.stories = data;
    })
  }]);

app.controller('PostsCtrl', ['$scope', '$http', function($scope, $http){
    $scope.posts = [];
    $http.get('/assets/data/posts.json').success(function(data) {
      $scope.posts = data;
    })
  }]);

function NavBarCtrl($scope) {
    $scope.isCollapsed = true;
}

app.directive("header", function() {
    return {
       restrict: 'E',
       templateUrl: "/elements/header.html"
    };
});

app.directive("social", function() {
    return {
       restrict: 'E',
       templateUrl: "/elements/social.html"
    };
});

