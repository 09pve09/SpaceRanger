console.log('USERS MODEL IS HERE');
var mongoose = require('mongoose');

var NewSchema = new mongoose.Schema({
  name: {type: String, required: true, minlength: 3},
  score: {type: Number, required: true}
})

var User = mongoose.model('User', NewSchema);
