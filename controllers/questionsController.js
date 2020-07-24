const models = require('../models')

exports.getQuestions = async (request, response, next) =>{
    try{
        questions = await models.Question.findAll()
        response.status(200).json(questions)
    } catch (e) {
        next(e)
    }
}