const express = require('express')
const router = express.Router()
const UserController = require('../controllers/userController')

// create
router.post('/', UserController.create)

// read
router.get('/', UserController.getAll)

// update
router.put('/:id', UserController.update)

// delete
router.delete('/:id', UserController.remove)

module.exports = router
