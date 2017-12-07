const Photo = require('../models/photoModel')
const ObjectId = require('mongodb').ObjectId

class PhotoController {
  static create (req, res) {
    // console.log('--> masuk req.body ', req.body)
    // console.log('--> masuk req.verify ',req.verifyUser)
    let newPhoto = new Photo({
      uploader: req.verifyUser.id,
      caption: req.body.caption,
      url: req.body.url,
    })
    console.log(newPhoto)
    newPhoto.save()
    .then(newPhoto => {
      res.send(newPhoto)
    })
    .catch(err => {
      console.log(err)
      res.status(500).send(err)
    })
  }

  static getAll (req, res) {
    Photo.find().populate('uploader')
    .then(photo => res.send(photo))
    .catch(err => {
      console.log(err)
      res.status(500).send(err)
    })
  }

  static update (req, res) {
    // console.log(req.body);
    let id = { _id: ObjectId(req.params.id)}
    Photo.findById(id)
    .then(photo => {
      photo.caption = req.body.caption || photo.caption,
      photo.save()
      .then(newPhoto => res.send(newPhoto))
      .catch(err => {
        console.log(err)
        res.status(500).send(err)
      })
    })
    .catch(err => {
      console.log(err)
      res.status(500).send(err)
    })
  }

  static remove (req, res) {
    let id = { _id: ObjectId(req.params.id)}
    Photo.findByIdAndRemove(id)
    .then(photo => {
      console.log(photo)
      res.send(photo)
    })
    .catch(err => {
      console.log(err)
      res.status(500).send(err)
    })
  }

  static like (req, res) {
    console.log(req.body);
    let id = { _id: ObjectId(req.params.id)}
    Photo.findById(id)
    .then(photo => {
      let checkIndex = photo.likes.findIndex(element => {
        return element == req.verifyUser.id
      })

      if (checkIndex === -1) {
        photo.likes.push(req.verifyUser.id)
      } else {
        photo.likes.splice(checkIndex, 1)
      }

      photo.save()
      .then(newPhoto => res.send(newPhoto))
      .catch(err => {
        console.log(err)
        res.status(500).send(err)
      })
    })
    .catch(err => {
      console.log(err)
      res.status(500).send(err)
    })
  }
}

module.exports = PhotoController;
