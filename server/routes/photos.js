const express = require('express')
const router = express.Router()
const photoController = require('../controllers/photoController')
const checkAuth = require('../middleware/checkAuth')

// create
router.post('/', checkAuth.isLogin, photoController.create)

// read
router.get('/', photoController.getAll)

// update
router.put('/:id', photoController.update)

// delete
router.delete('/:id', photoController.remove)

module.exports = router
