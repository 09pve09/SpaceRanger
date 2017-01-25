console.log('GameFactory is here');
app.factory('gameFactory', ['$http', function($http) {

  function gameFactory(){
    this.index = function(callback){
      //call this method if you want to update or set the friends variable
      $http.get('/users').then(function(returned_data){
        friends = returned_data.data;
        callback(friends);
      });
    } 


    this.create = function(newUser, callback){
      console.log("Creating a new user");
      $http.post('/users', newUser).then(function(returned_data){
        console.log("RETURNED USER",returned_data.data);
        // currentUser = returned_data.data;
        if (typeof(callback) == 'function'){
          callback(returned_data.data);
        }
      });
    };
  }
  return new gameFactory();
}]);
