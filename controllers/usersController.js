const models = require('../models')

exports.getUsers = async (request, response, next) =>{
    try{
    	users = await models.User.findAll()
        response.status(200).json(users)
    } catch (e) {
        next(e)
    }
}

exports.addUser = async (request, response, next) =>{	
    try{    	
    	researcher = await models.Researcher.findOne({where: {id: request.body.researcherId}})
    	if(researcher){
	    	models.User.create({researcherId: request.body.researcherId, name: request.body.name})
	    	response.status(200).json('User created')
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
        if(user){
            await user.destroy()
            response.status(200).json('User removed')
        }else{
            response.status(400).json("An Error ocurred")
        }
    } catch (e) {
        next(e)
    }
}