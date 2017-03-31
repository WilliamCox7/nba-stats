angular.module("nbaStats").controller("mainCtrl", function($scope, mainSvc) {
  (() => {
    mainSvc.getPlayers().then((players) => {
      var playersArray = [];
      for (var prop in players) {
        playersArray.push(players[prop]);
      }
      $scope.players = playersArray;
    });
  })();
  $scope.ob = 'cont';
  $scope.changeOrderBy = function(orderBy) {
      $scope.ob = orderBy;
  }
});
