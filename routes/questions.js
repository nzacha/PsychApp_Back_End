const express = require('express')
const router = express.Router()
const questionsController = require('../controllers/questionsController')

router.get('/', questionsController.getAllQuestions)
router.get('/:researcherId', questionsController.getQuestionsOf)
router.post('/:researcherId', questionsController.addQuestion)
router.delete('/:id', questionsController.removeQuestion)
router.post('/options/:questionId', questionsController.addQuestionOption)
router.delete('/options/:id', questionsController.removeQuestionOption)

module.exports = router