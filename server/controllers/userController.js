const User = require('../models/userModel')
const ObjectId = require('mongodb').ObjectId
const generateToken = require('../helpers/jwt')

class UserController {
  static create (req, res) {
    console.log(req.body)
    User.findOne({ facebookId: req.body.id })
    .then(user => {
      if (user) {
        generateToken(user)
        .then(token => {
          console.log(token)
          res.send({ token: token})
        })
        .catch(err => {
          // console.log(err)
          res.status(500).send(err)
        })
      }
    })
    .catch(err => {
      // console.log(err)
      res.status(500).send(err)
    })

    let newUser = new User({
      facebookId: req.body.name,
      name: req.body.name,
      email: req.body.name,
    })
    // console.log(newUser)
    newUser.save()
    .then(newUser => res.send(newUser))
    .catch(err => {
      // console.log(err)
      res.status(500).send(err)
    })
  }

  static getAll (req, res) {
    User.find()
    .then(users => res.send(users))
    .catch(err => {
      // console.log(err)
      res.status(500).send(err)
    })
  }

  static update (req, res) {
    let id = { _id: ObjectId(req.params.id)}
    User.findById(id)
    .then(user => {
      user.name = req.body.name || user.name,
      user.email = req.body.email || user.email,
      user.save()
      .then(newUser => res.send(newUser))
      .catch(err => {
        // console.log(err)
        res.status(500).send(err)
      })
    })
    .catch(err => {
      // console.log(err)
      res.status(500).send(err)
    })
  }

  static remove (req, res) {
    let id = { _id: ObjectId(req.params.id)}
    User.findByIdAndRemove(id)
    .then(user => {
      // console.log(user)
      res.send(user)
    })
    .catch(err => {
      // console.log(err)
      res.status(500).send(err)
    })
  }
}

module.exports = UserController;
