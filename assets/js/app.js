var app = angular.module('app', [ 'ui.bootstrap' , 'ngSanitize' ]);

app.controller('MembersCtrl', ['$scope', '$http', '$timeout', '$modal', function($scope, $http, $timeout, $modal, $log){
	$scope.members = [];
	$http.get('/assets/data/members.json').success(function(data) {
		$scope.members = data;
		$scope.fullList = [];
		var n = 0;
		var array = [];
		while (n < $scope.members.length) {
			var index = Math.floor(Math.random()*$scope.members.length);
			if ($.inArray(index, array) == -1) {
				array[n+1] = index;
				n++;
			}
		}
		for (n=1; n < $scope.members.length+1; n++) {
			$scope.fullList.push(
				$scope.members[array[n]]
			);
		};
		$scope.rankedList = [];
		for (n=1; n < 7; n++) {
			$scope.rankedList.push(
				$scope.fullList[array[n]]
			);
		};
	});
	$scope.open = function (_member) {
		var modalInstance = $modal.open({
			controller: "ModalInstanceCtrl",
			templateUrl: 'MemberModalContent.html',
			scope: $scope,
			resolve: {
				member: function()
				{
					$scope.currentMember = _member;
				}
			}
		});
	};
}]);

app.controller('ModalInstanceCtrl', function ($scope, $modalInstance, member) {

  $scope.member = $scope.$parent.currentMember;

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
});

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
		$scope.fullList = [];
		var n = 0;
		var array = [];
		while (n < $scope.items.length) {
			var index = Math.floor(Math.random()*$scope.items.length);
			if ($.inArray(index, array) == -1) {
				array[n+1] = index;
				n++;
			}
		}
		for (n=1; n < $scope.items.length+1; n++) {
			$scope.fullList.push(
				$scope.items[array[n]]
			);
		};
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

app.controller('UpdatesCtrl', ['$scope', '$http', function($scope, $http){
    $scope.updates = [];
    $http.get('/assets/data/updates.json').success(function(data) {
      $scope.updates = data;
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

