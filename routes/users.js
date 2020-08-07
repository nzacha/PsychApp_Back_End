const express = require('express')
const router = express.Router()
const usersController = require('../controllers/usersController')

router.get('/', usersController.getUsers)
router.get('/:id', usersController.findUser)
router.post('/', usersController.addUser)
router.delete('/:id', usersController.removeUser)

module.exports = router