import mongoose from 'mongoose';
var Schema = mongoose.Schema;

var user = new Schema({
  firstName: {
    type: String
  },
  lastName: {
      type: String
  },
  email: {
    type: String
  },
  password: {
    type: String
  },
  role: {
    type: String,
  }
});

mongoose.models = {};

var User = mongoose.model('User', user);

export default User;