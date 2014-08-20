angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('ScheduleCtrl', ['$scope', '$http', function($scope, $http) {
 	$http.get('json/schedule.json').success(function(data) {
 		// console.log(data);
 		$scope.sessions = data;
 	}); 	
}])

.controller('SessionDetailCtrl', function($scope, $stateParams) {
})






.controller('VendorCtrl', ['$scope', '$http', function($scope, $http) {
	$http.get('json/vendors.json').success(function(data) {
		$scope.vendors = data;
	})
}])

.controller('VendorDetailCtrl', ['$scope', '$stateParams',
	function($scope, $stateParams)
	{	
		$scope.name = $stateParams.name;
	}
]);





// .controller('SessionDetailCtrl', ['$scope', '$stateParams', 'SessionsInfo',
	// function($scope, $stateParams, SessionsInfo, $ionicNavBarDelegate)
	// {	
		// $scope.session = SessionsInfo.get($stateParams.sessionId);
// 		
		// $scope.goBack = function() {
    		// $ionicNavBarDelegate.back();
  	  	// };
	// }
// ])

// .controller('PlaylistsCtrl', function($scope) {
  // $scope.playlists = [
    // { title: 'Reggae', id: 1 },
    // { title: 'Chill', id: 2 },
    // { title: 'Dubstep', id: 3 },
    // { title: 'Indie', id: 4 },
    // { title: 'Rap', id: 5 },
    // { title: 'Cowbell', id: 6 }
  // ];
// })
// 
// .controller('PlaylistCtrl', function($scope, $stateParams) {
// });

