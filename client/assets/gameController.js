console.log('GameController is here');
var play = false;
var player = false;
var endGame = false;
app.controller('gameController', ['$scope', '$location', '$routeParams', 'gameFactory', '$rootScope', '$timeout', '$interval', function($scope, $location, $routeParams, gameFactory, $rootScope, $timeout, $interval) {
  // $scope.$watch('score', function() {
  //       return $scope.score;
  //   });

  $scope.play = function(){
    if(!$rootScope.loggedUser){
      $rootScope.loggedUser = $scope.newUser.name;
    }
    if(!$scope.newUser){
      $scope.newUser = {};
    }

    // else(){
    //
    // }
    console.log($rootScope.loggedUser, "Welcome ");
    $location.url('/game');
    player = new Player();
    flame = new Flame();
    score = 0;
    play = true;
    endGame = false;
    var promise;

    $scope.start = function() {
      $scope.stop();
      promise = $interval(function(){
        if(endGame == true){
          console.log('END OF THE GAME');
          console.log();
          allEnemies = [];
          allShoots = [];
          allDestroys = [];
          console.log('SCORE:',score);
          $rootScope.score = score;
          $scope.newUser.name = $rootScope.loggedUser;
          $scope.newUser.score = score;
          console.log($scope.newUser);
           gameFactory.create($scope.newUser, function() {
             $location.url('/gameover');
           })
          $scope.stop();
        }
        else{
          spawn();
        }
      }, 5000)
    };

    $scope.stop = function() {
      $interval.cancel(promise);
    };
    //
    $scope.start();
  }

  $scope.highscores = function(){
    gameFactory.index(function(returnedData){
      $location.url('/highscores');

      $rootScope.users = returnedData;
      // console.log($rootScope.users.users);
      $rootScope.topUsers = [];
      for(var i=0;i<$rootScope.users.users.length;i++){
        var temp;
        for(var j=0;j<$rootScope.users.users.length-1;j++){
          // console.log('$rootScope.users.users[j]:',$rootScope.users.users[j]['score']);
          if($rootScope.users.users[j]['score']>$rootScope.users.users[j+1]['score']){
              temp = $rootScope.users.users[j+1];
              $rootScope.users.users[j+1] = $rootScope.users.users[j];
              $rootScope.users.users[j] = temp;
          }
        }
      }
      // console.log($rootScope.users.users);
      if($rootScope.users.users.length < 10){
        console.log("length is less than 10");
        console.log($rootScope.users.users.length-1);
        for(var k=$rootScope.users.users.length-1; k > 0; k--){
        // for(var k=$rootScope.users.users.length-1; k <= 0;k--){
          console.log('$rootScope.users.users[k]:',$rootScope.users.users[k]);
          $rootScope.topUsers.push($rootScope.users.users[k]);
          console.log('$rootScope.topUsers:',$rootScope.topUsers);
        }
      }
      else{
        console.log("length is equal or more than 10");
        for(var k=$rootScope.users.users.length-1; k > $rootScope.users.users.length-11; k--){
          $rootScope.topUsers.push($rootScope.users.users[k]);
        }
      }
      console.log($rootScope.topUsers);
    })
  }



}]);
