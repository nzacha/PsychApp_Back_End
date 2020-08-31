const models = require('../models')

exports.getAllAnswers = async (request, response, next) =>{
    try{
        answers = await models.Answer.findAll()
        response.status(200).json(answers)
    } catch (e) {
        next(e)
    }
}

exports.getAnswersOf = async (request, response, next) =>{
    try{
        answers = await models.Answer.findAll({include:{model: models.Question}},{where: {userId: request.params.userId}})
        response.status(200).json(answers)
    } catch (e) {
        next(e)
    }
}

exports.addAnswer = async (request, response, next) =>{	
    try{
    	models.Answer.create({questionId: request.params.questionId, userId: request.params.userId, text: request.body.text})
        .then(function(){
            response.status(200).json('Answer created')    
        })    	
    } catch (e) {
        next(e)
    }
}

exports.removeAnswer = async (request, response, next) =>{ 
    try{        
        answer = await models.Answer.findOne({where: {id: request.params.id}})        
        if(answer){
           await answer.destroy()
            response.status(200).json('Answer destroyed')
        }else{
            response.status(400).json("An Error ocurred")
        }
    } catch (e) {        
        next(e)
    }
}