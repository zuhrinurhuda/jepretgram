const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
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
})

const User = mongoose.model('User', userSchema)

module.exports = User
