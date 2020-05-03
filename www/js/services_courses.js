'use strict';

angular.module('CITC.services', ['ngResource'])
  .constant("baseURL", "http://localhost:3000/")

  // T: menu
  .factory('menuFactory', ['$resource', 'baseURL', function ($resource, baseURL) {

    return $resource(baseURL + "courses/:id", null, {
      'update': {
        method: 'PUT'
      }
    });

  }])
  
  // T: promotion
  .factory('promotionFactory', ['$resource', 'baseURL', function ($resource, baseURL) {
    return $resource(baseURL + "promotions/:id");

  }])

  // T: corporate
  .factory('corporateFactory', ['$resource', 'baseURL', function ($resource, baseURL) {

    return $resource(baseURL + "professors/:id");

  }])

  // T: members
  .factory('memberFactory', ['$resource', 'baseURL', function ($resource, baseURL) {
    
    return $resource(baseURL + "members/:id");

  }])
  
  // T: feedback
  .factory('feedbackFactory', ['$resource', 'baseURL', function ($resource, baseURL) {

    return $resource(baseURL + "feedback/:id");

  }])

  // T: favorite
  // T: fac
  .factory('favoriteFactory', ['$resource', 'baseURL', '$localStorage', function ($resource, baseURL, $localStorage) {
    var favFac = {};
    var favorites = $localStorage.getObject('favorites', '[]');

    // T: delete
    favFac.deleteFromFavorites = function (index) {
      for (var i = 0; i < favorites.length; i++) {
        if (favorites[i].id == index) {
          favorites.splice(i, 1);
        }
      }
      $localStorage.storeObject('favorites', favorites);
    }
    // T: get
    favFac.getFavorites = function () {
      return favorites;

    };

    // T: add
    favFac.addToFavorites = function (index) {
      for (var i = 0; i < favorites.length; i++) {
        if (favorites[i].id == index)
          return;
      };

      favorites.push({

        id: index
      });
      $localStorage.storeObject('favorites', favorites);

    };

    return favFac;

  }])

  // T: local
  .factory('$localStorage', ['$window', function ($window) {
    return {
      store: function (key, value) {
        $window.localStorage[key] = value;
      },
      get: function (key, defaultValue) {
        return $window.localStorage[key] || defaultValue;
      },
      storeObject: function (key, value) {
        $window.localStorage[key] = JSON.stringify(value);
      },
      getObject: function (key, defaultValue) {
        return JSON.parse($window.localStorage[key] || defaultValue);
      }
    }
  }])
  ;
