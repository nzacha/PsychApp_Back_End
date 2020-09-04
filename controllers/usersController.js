const models = require('../models')

exports.getUsers = async (request, response, next) =>{
    try{
    	users = await models.User.findAll()
        response.status(200).json(users)
    } catch (e) {
        next(e)
    }
}

exports.getUsersOf = async (request, response, next) =>{
    try{
        users = await models.User.findAll({where: {researcherId: request.params.id}})
        response.status(200).json(users)
    } catch (e) {
        next(e)
    }
}

exports.findUser = async (request, response, next) =>{
    try{
    	user = await models.User.findOne({where: {code: request.params.id}, include:{model: models.Researcher}})    	
        if (!user)
            response.status(404).json({"error": "User not found"})
        if (user.isActive){
	        response.status(200).json(user)
        } else {
	    	response.status(400).json({"error": "User is inactive"})
        }
    } catch (e) {
        next(e)
    }
}

const crypto = require('crypto')
SECRET_KEY = "2612"
const getDigitsCode = (message, length) => {
  const hash = crypto
    .createHmac('sha256', Buffer.from(SECRET_KEY, 'hex'))
    .update(message)
    .digest('hex')

  return hash.slice(0, length)
}

exports.addUser = async (request, response, next) =>{	
    try{    	
    	researcher = await models.Researcher.findOne({where: {id: request.body.researcherId}})
    	var {name, surname, study_length, tests_per_day, tests_time_interval, allow_individual_times, allow_user_termination, automatic_termination} = request.body
    	if(researcher){
	    	user = await models.User.create({researcherId: researcher.id, name: name, surname: surname, questions_total: study_length*tests_per_day, study_length: study_length, tests_per_day: tests_per_day, tests_time_interval: tests_time_interval, allow_individual_times: allow_individual_times, allow_user_termination: allow_user_termination, automatic_termination: automatic_termination})
  	    	
  	    	code = researcher.name + researcher.id + user.id
  	    	var token = getDigitsCode(code, 8);
  	    	user = await user.update({code: token})

	    	response.status(200).json({"message":"User created", "id": user.id, "code": token})
	    }else{
	    	response.status(400).json("An Error ocurred")
	    }

    } catch (e) {
    	next(e)
    }
}

exports.removeUser = async (request, response, next) =>{   
    try{        
        user = await models.User.findOne({where: {id: request.params.id}})
        if(user && user.isActive){
            await user.update({isActive: false, reason_for_exit: request.body.reason})
            response.status(200).json({"message": "User removed", "reason": request.body.reason})
        }else{
            response.status(400).json({"error": "An Error ocurred"})
        }
    } catch (e) {
        next(e)
    }
}

exports.updateUser = async (request, response, next) =>{   
    try{        
        user = await models.User.findOne({where: {id: request.params.id}})
        if(user){
            await user.update({name: request.body.name, surname: request.body.surname, reason_for_exit: request.body.reason, progress: request.body.progress})
            response.status(200).json({"message": "OK"})
        }else{
            response.status(400).json({"error": "An Error ocurred"})
        }

    } catch (e) {
        next(e)
    }
}

exports.trackProgress = async (request, response, next) =>{
    try{
        user = await models.User.findOne({where: {id: request.params.id}})
        if(user && user.automatic_termination && user.isActive){
            user = await user.update({progress: request.body.progress})
            if(user.progress > user.questions_total){
                user = await user.update({isActive: false})                
                response.status(200).json(user)
                return;
            }
            response.status(200).json({"message": "progress updated"})
            return;     
        }else{
            response.status(400).json({"error": "user not found"})
        }
    } catch (e) {
        next(e)
    }
}
