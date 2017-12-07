var Schema = mongoose.Schema

var userSchema = new Schema({
  facebookId: String,
  name: String,
  email: String,
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: null
  }
});

var User = mongoose.model('User', userSchema);

module.exports = User;
