const mongoose = require('mongoose')
const Schema = mongoose.Schema

const photoSchema = new Schema({
  uploader: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  caption: String,
  url: String,
  like: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }],
  uploadedAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: null
  }
})

const Photo = mongoose.model('Photo', photoSchema)

module.exports = Photo
