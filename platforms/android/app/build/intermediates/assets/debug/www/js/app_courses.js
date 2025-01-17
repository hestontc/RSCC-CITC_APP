// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('CITC', ['ionic', 'CITC.controllers','CITC.services'])
.run(function($ionicPlatform,$rootScope, $ionicLoading) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
	
	 $rootScope.$on('loading:show', function () {
        $ionicLoading.show({
            template: '<ion-spinner></ion-spinner> Loading ...'
        })
    });

    $rootScope.$on('loading:hide', function () {
        $ionicLoading.hide();
    });

    $rootScope.$on('$stateChangeStart', function () {
        console.log('Loading ...');
        $rootScope.$broadcast('loading:show');
    });

    $rootScope.$on('$stateChangeSuccess', function () {
        console.log('done');
        $rootScope.$broadcast('loading:hide');
    });
})


  
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/sidebar_courses.html',
    controller: 'AppCtrl'
  })
	

  /*
    To change the entries on the homepage, change the id for the corresponding entry below.
  */
  .state('app.home', {
    url: '/home',
    views: {
      'mainContent': {
        templateUrl: 'templates/home_courses.html',
        controller: 'IndexController',
        resolve: {
          course: ['menuFactory', function (menuFactory) {
            return menuFactory.get({
              id: 13
            })
          }],
          promotion: ['promotionFactory', function (promotionFactory) {
            return promotionFactory.get({
              id: 1
            });
          }],
          professor: ['corporateFactory', function (corporateFactory) {
            return corporateFactory.get({
              id: 2
            });
          }]
        }
      }
    }
  })
  
  
  .state('app.aboutus', {
    url: '/aboutus',
    views: {
      'mainContent': {
        templateUrl: 'templates/aboutus_professors.html',
        controller: 'AboutController',
        resolve: {
          professors: ['corporateFactory', function (corporateFactory) {
            return corporateFactory.query();
          }],
          members: ['memberFactory', function (memberFactory) {
            return memberFactory.query();
          }]
        }
      }
    }
  })

   .state('app.contactus', {
      url: '/contactus',
      views: {
        'mainContent': {
          templateUrl: 'templates/contactus.html'
        }
      }
    })

   .state('app.favorites', {
      url: '/favorites',
      views: {
        'mainContent': {
          templateUrl: 'templates/favorites_courses.html',
            controller:'FavoritesController',
          resolve: {
              courses:  ['menuFactory', function(menuFactory){
                return menuFactory.query();
              }],
               favorites: ['favoriteFactory', function(favoriteFactory) {
               return favoriteFactory.getFavorites();
              }]
          }
        }
      }
    })
  
  .state('app.menu', {
    url: '/menu',
    views: {
      'mainContent': {
        templateUrl: 'templates/menu_courses.html',
        controller: 'MenuController',
        resolve: {
          courses: ['menuFactory', function (menuFactory) {
            return menuFactory.query();
          }]
        }
      }
    }
  })
  
  .state('app.dishdetails', {
    url: '/menu/:id',
    views: {
      'mainContent': {
        templateUrl: 'templates/dishdetail_courses.html',
        controller: 'DishDetailController',
        resolve: {
            course: ['$stateParams','menuFactory', function($stateParams, menuFactory){
                return menuFactory.get({id:parseInt($stateParams.id, 10)});
            }]
        }
      }
    }
  });
  

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');

});