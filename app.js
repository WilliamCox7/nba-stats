angular.module("nbaStats", ["ui.router"]).config(function ($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('home', {
    templateUrl: './home.html',
    url: '/',
    controller: 'mainCtrl'
  });

});
