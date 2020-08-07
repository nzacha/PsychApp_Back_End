const Sequelize = require('sequelize')

module.exports = (sequelize) => {
    class User extends Sequelize.Model {}
    User.init({
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {            
            type: Sequelize.STRING
        },
        surname: {
        	type: Sequelize.STRING
        }
    }, {
        sequelize,
        modelName: 'users'});
    return User 
}