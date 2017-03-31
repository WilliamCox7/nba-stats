angular.module("nbaStats").service("mainSvc", function($http) {
  this.getPlayers = function() {
    return $http({
      method: 'GET',
      url: './parser/players.json'
    }).then(function(result) {
      return result.data;
    });
  }
});
