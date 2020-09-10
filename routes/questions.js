const express = require('express')
const router = express.Router()
const questionsController = require('../controllers/questionsController')

router.get('/', questionsController.getAllQuestions)
router.get('/:projectId', questionsController.getQuestionsOf)
router.post('/:projectId', questionsController.addQuestion)
router.delete('/:id', questionsController.removeQuestion)
router.post('/options/:questionId', questionsController.addQuestionOption)
router.delete('/options/:id', questionsController.removeQuestionOption)
router.patch('/:id', questionsController.updateQuestion)
router.patch('/options/:id', questionsController.updateQuestionOption)

module.exports = router