const models = require('../models')

exports.getQuestions = async (request, response, next) =>{
    try{
        questions = await models.Question.findAll()
        response.status(200).json(questions)
    } catch (e) {
        next(e)
    }
}

var types = ["Text", "Slider", "Multiple_Choice"]
exports.addQuestion = async (request, response, next) =>{	
    try{    	
    	type = request.body.type
    	if(types.includes(type)){
	    	models.Question.create({type: request.body.type, question: request.body.question})
	    	response.status(200).json('Question created')
	    }else{
	    	response.status(400).json("An Error ocurred")
	    }
    } catch (e) {
    	next(e)
    }
}