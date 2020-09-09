const models = require('../models')

exports.authenticateCredentials = async (request, response, next) =>{
    try{
        researcher = await models.Researcher.findOne({where: {email: request.body.username, password: request.body.password}, include:{model: models.Project, as: 'projects'}})
        if(researcher){
            response.status(200).json(researcher)
        } else {
            response.status(400).json("An error ocurred")
        }
    } catch (e) {
        next(e)
    }
}