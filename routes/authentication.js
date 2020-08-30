const express = require('express')
const router = express.Router()
const authenticationController = require('../controllers/authenticationController')

router.get('/:username/:password', authenticationController.authenticateCredentials)

module.exports = router