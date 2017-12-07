const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.Promise = Promise;
mongoose.connect('mongodb://localhost/energyPlanUsers', { useMongoClient: true });

const UserSchema = Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String, 
    required: true,
  }
});

module.exports = mongoose.model('User', UserSchema);