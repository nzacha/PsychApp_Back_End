const models = require('../models')

exports.getResearchers = async (request, response, next) =>{
    try{
        researchers = await models.Researcher.findAll()
        response.status(200).json(researchers)
    } catch (e) {
        next(e)
    }
}

exports.getResearcher = async (request, response, next) =>{
    try{
        researcher = await models.Researcher.findOne({where: {id: request.params.id}})
        response.status(200).json(researcher)
    } catch (e) {
        next(e)
    }
}

exports.addResearcher = async (request, response, next) =>{	
    try{    	
        email = request.body.email
        password = request.body.password
        if(email && password){
        	researcher = await models.Researcher.create({name: request.body.name, surname: request.body.surname, email: email, password: password, phone: request.body.phone, description: request.body.description})
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
        var {name, surname, email, password, description, phone, study_length, tests_per_day, tests_time_interval, allow_individual_times, allow_user_termination, automatic_termination} = request.body
        if (researcher){
            researcher = await researcher.update({name: name, surname: surname, email: email, password: password, description: description, phone: phone, study_length: study_length, tests_per_day: tests_per_day, tests_time_interval: tests_time_interval, allow_individual_times: allow_individual_times, allow_user_termination: allow_user_termination, automatic_termination: automatic_termination})
            response.status(200).json(researcher);
        } else {
            response.status(404).json("Researcher not found")
        }
    } catch (e) {
        next(e)
    }
}