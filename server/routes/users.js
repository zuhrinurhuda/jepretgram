const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')

// create
router.post('/', userController.create)

// read
router.get('/', userController.getAll)

// update
router.put('/:id', userController.update)

// delete
router.delete('/:id', userController.remove)

module.exports = router
