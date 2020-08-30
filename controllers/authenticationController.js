const models = require('../models')

exports.authenticateCredentials = async (request, response, next) =>{
    try{
        researchers = await models.Researcher.findOne({where: {email: request.params.username, password: request.params.password}})
        if(researchers){
            response.status(200).json(researchers)
        } else {
            response.status(400).json("An error ocurred")
        }
    } catch (e) {
        next(e)
    }
}