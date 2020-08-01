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
        name = request.body.name
        if(name){
        	models.Researcher.create({name: request.body.name})
            response.status(200).json("Researcher created successfully")
        }else{
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
            response.sendStatus(200)
        } else {
            response.status(404).json("Researcher not found")
        }
    } catch (e) {
        next(e)
    }
}