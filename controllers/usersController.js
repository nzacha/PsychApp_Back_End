const models = require('../models')

exports.getUsers = async (request, response, next) =>{
    try{
    	users = await models.User.findAll()
        response.status(200).json(users)
    } catch (e) {
        next(e)
    }
}

var researchers = ["Marianna", "Penelope"]
exports.addUser = async (request, response, next) =>{	
    try{    	
    	researcher = request.body.researcher
    	if(researchers.includes(researcher)){
	    	models.User.create({researcher: request.body.researcher, name: request.body.name})
	    	response.status(200).json('User created')
	    }else{
	    	response.status(400).json("An Error ocurred")
	    }
    } catch (e) {
    	next(e)
    }
}
