const models = require('../models')

exports.getResearchers = async (request, response, next) =>{
    try{
        researchers = await models.Researcher.findAll()
        response.status(200).json(researchers)
    } catch (e) {
        next(e)
    }
}

exports.addResearcher = async (request, response, next) =>{	
    try{    	
        email = request.body.email
        password = request.body.password
        if(email && password){
        	models.Researcher.create({name: request.body.name, surname: request.body.surname, email: email, password: password})
            response.status(200).json("Researcher created successfully")
        } else {
            response.status(400).json("Something went wrong")
        }
    } catch (e) {
    	next(e)
    }
}

exports.removeResearcher = async (request, response, next) =>{ 
    try{        
        researcher = await models.Researcher.findOne({where: {id: request.params.id}})
        if (researcher){
            await researcher.destroy()
            response.status(200).json("OK")
        } else {
            response.status(404).json("Researcher not found")
        }
    } catch (e) {
        next(e)
    }
}

exports.updateResearcher = async (request, response, next) =>{ 
    try{        
        researcher = await models.Researcher.findOne({where: {id: request.params.id}})
        if (researcher){
            await researcher.update({name: request.body.name, surname: request.body.surname, email: request.body.email, password: request.body.password, description: request.body.description, phone: request.body.phone})
            response.status(200).json("OK")
        } else {
            response.status(404).json("Researcher not found")
        }
    } catch (e) {
        next(e)
    }
}