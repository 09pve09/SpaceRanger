console.log('USERS CONTROLLER IS HERE');

var mongoose = require('mongoose');
var User = mongoose.model('User');

function UsersController(){
  this.show = function(req,res){
    User.find({}, function(err, users){
      if(err) {
        console.log("something went wrong");
        res.json({placeholder: "error"});
      }
      else {
        console.log("back-end users controller response: ",users);
        res.json({users});
      }
    })
  };
  this.create = function(req,res){
    var user = new User({name: req.body.name, score: req.body.score});
    user.save(function(err) {

      if(err) {
        console.log('something went wrong');
        res.json({error: 'there was a problem with creating user'})
      }
      else { // else console.log that we did well and then redirect to the root route
        console.log('successfully added a new friend in users.js!');
        res.json({placeholder: "success"});
      }
    })
  };
}
module.exports = new UsersController();
