angular.module('fickle.services', [])

.factory('Auth', function ($http, $location, $window) {
    var signin = function (user) {
      return $http({
          method: 'POST',
          url: '/signin',
          data: user
        })
        .then(function (resp) {
          return resp.data.token;
        });
    }
    var signup = function (user) {
      console.log("in service controller signup")
      return $http({
          method: 'POST',
          url: '/signup',
          data: user
        })
        .then(function (resp) {
          return resp.data;
        });
    };
    return {
      signin: signin,
      signup: signup,
    };
})

.factory('Podcasts', function ($http, $location, $window) {
  var resources = [];
    var getTags = function () {
       return $http({
            method: 'GET',
            url: '/tags',
          })
          .then(function (resp) {
            return resp.data;
          });
    };
    var getPodcasts = function (resource) {
      // TO DO AJ
      return $http({
        method: 'POST',
        url: '/getResource',
        data: resource
      })
      .then(function (resp) {
        resources = resp.data;
      });
      
    };
    var GetRec = function (callback) {
        callback(resources);
    }

    return {
      getTags: getTags,
      getPodcasts: getPodcasts,
      GetRec: GetRec
    };
});