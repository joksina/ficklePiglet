// angular.module('fickle', ['fickle.search'])
// .config(function ($stateProvider) {
// 	$stateProvider
// 		.when('/', {
// 			templateUrl: 'app/Search/search.html',
// 			controller: 'searchController'
// 	})
// })

angular.module('fickle', ['ngMaterial', 'ngRoute', 'fickle.search'])
	.config(function ($routeProvider){
		$stateProvider
    .when('/', {
      templateUrl: "Search/search.html",
      controller: 'searchController'
    });
	})