console.log('App is here');
var app = angular.module('app', ['ngRoute']);

app.config(function ($routeProvider) {
$routeProvider
  .when('/',{
      templateUrl: 'partials/index.html',
      controller: 'gameController'
  })
  .when('/game',{
      templateUrl: 'partials/game.html',
      controller: 'gameController'
  })
  .when('/gameover',{
      templateUrl: 'partials/gameover.html',
      controller: 'gameController'
  })
  .when('/highscores',{
      templateUrl: 'partials/highscores.html',
      controller: 'gameController'
  })
  .otherwise({
    redirectTo: '/'
  });
});

app.run( function($rootScope, $location) {

    // register listener to watch route changes
    $rootScope.$on( "$locationChangeStart", function(event, next, current) {
      if ( $rootScope.loggedUser == null ) {
        console.log('u shall not pass...unless u log in');
        $location.url( "/" );
      }
    });
})
