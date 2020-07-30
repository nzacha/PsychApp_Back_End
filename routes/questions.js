const express = require('express')
const router = express.Router()
const questionsController = require('../controllers/questionsController')

router.get('/', questionsController.getQuestions)
router.post('/', questionsController.addQuestion)

module.exports = router