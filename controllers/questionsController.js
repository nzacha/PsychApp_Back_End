const models = require('../models')

exports.getAllQuestions = async (request, response, next) =>{
    try{
        questions = await models.Question.findAll({include:{model: models.Question_Option}})
        response.status(200).json(questions)
    } catch (e) {
        next(e)
    }
}

exports.getQuestionsOf = async (request, response, next) =>{
    try{
        questions = await models.Question.findAll({where: {researcherId: request.params.researcherId}, include:{model: models.Question_Option}})
        response.status(200).json(questions)
    } catch (e) {
        next(e)
    }
}

var types = ["Text", "Slider"]
exports.addQuestion = async (request, response, next) =>{	
    try{    	
    	type = request.body.type
        researcher = await models.Researcher.findOne({where: {id: request.params.researcherId}})
        levels = request.body.levels
        if(!levels)
            levels = 1
    	if(types.includes(type) && researcher){
	    	models.Question.create({question_type: request.body.type, question_text: request.body.question, researcherId: request.params.researcherId, levels: levels})
	    	response.status(200).json('Question created')
	    }else{
	    	response.status(400).json("An Error ocurred")
	    }
    } catch (e) {
    	next(e)
    }
}

exports.removeQuestion = async (request, response, next) =>{   
    try{        
        question = await models.Question.findOne({where: {id: request.params.id}})
        if(question){
            await  question.destroy()            
            response.status(200).json('Question destroyed')
        }else{
            response.status(400).json("An Error ocurred")
        }
    } catch (e) {
        next(e)
    }
}

exports.addQuestionOption = async (request, response, next) =>{   
    try{        
        question = await models.Question.findOne({where: {id: request.params.questionId}})        
        if(question){
            models.Question_Option.create({questionId: request.params.questionId, option: request.body.text})
            response.status(200).json('Question Option created')
        }else{
            response.status(400).json("An Error ocurred")
        }
    } catch (e) {
        next(e)
    }
}


exports.removeQuestionOption = async (request, response, next) =>{   
    try{        
        questionOption = await models.Question_Option.findOne({where: {id: request.params.id}})
        if(questionOption){
            await  questionOption.destroy()            
            response.status(200).json('Question destroyed')
        }else{
            response.status(400).json("An Error ocurred")
        }
    } catch (e) {
        next(e)
    }
}