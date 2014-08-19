// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
      url: "/app",
      abstract: true,
      templateUrl: "templates/menu.html",
      controller: 'AppCtrl'
    })

    // .state('app.playlists', {
      // url: "/playlists",
      // views: {
        // 'menuContent' :{
          // templateUrl: "templates/playlists.html",
          // controller: 'PlaylistsCtrl'
        // }
      // }
    // })
// 
    // .state('app.single', {
      // url: "/playlists/:playlistId",
      // views: {
        // 'menuContent' :{
          // templateUrl: "templates/playlist.html",
          // controller: 'PlaylistCtrl'
        // }
      // }
          // })
          
      .state('app.schedule', {
      url: "/schedule",
      views: {
        'menuContent' :{
          templateUrl: "templates/schedule.html",
          controller: 'ScheduleCtrl'
        }
      }
    })
    
    .state('app.session-detail', {
      url: "/session-detail/:sessionId",
      views: {
      	'menuContent': {
      	  templateUrl: "/templates/detail.html",
          controller: 'SessionDetailCtrl'
      	}
      }
    })
      
      .state('app.presentations', {
      url: '/presentations',
      views: {
        'menuContent' :{
      templateUrl: 'templates/presentations.html'
      }
      }
    })
    .state('app.speakers', {
      url: '/speakers',
      views: {
        'menuContent' :{
      templateUrl: 'templates/speakers.html'
      }
      }
    })
    .state('app.feedback', {
      url: '/feedback',
      views: {
        'menuContent' :{
      templateUrl: 'templates/feedback.html'
      }
      }
    })
    .state('app.map', {
      url: '/map',
      views: {
        'menuContent' :{
      templateUrl: 'templates/map.html'
      }
      }
    })
    .state('app.vendors', {
      url: '/vendors',
      views: {
        'menuContent' :{
      templateUrl: 'templates/vendors.html',
      controller: 'VendorCtrl'
      }
      }
    })
    .state('vendorDetail/:vendorId', {
      url: "/vendors/vendorDetail/:vendorId",
      	  templateUrl: "/templates/vendorDetail.html" 
    })
    .state('app.information', {
      url: '/information',
      views: {
        'menuContent' :{
      templateUrl: 'templates/information.html'
      }
      }
    });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/schedule');
});

