console.log('ROUTES RE HERE');
var users = require('../controllers/users.js');
module.exports = function(app){
  app.post('/users', users.create);
  // app.post('/questions', qa.createq);
  app.get('/users', users.show);
  // app.post('/answers/:id', qa.createa);
  // app.post('/likes/:id', qa.update);
  // app.post('/friends', friends.create);
  // app.put('/friends/:id', friends.update);
  // app.delete('/friends/:id', friends.delete);
}
