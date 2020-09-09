const Sequelize = require('sequelize')

module.exports = (sequelize) => {
    class User extends Sequelize.Model {}
    User.init({
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        code: {
            type: Sequelize.STRING,
            unique: true
        },
        name: {            
            type: Sequelize.STRING
        },
        surname: {
        	type: Sequelize.STRING
        },
        isActive: {
        	type: Sequelize.BOOLEAN,
        	defaultValue: true
        },
        reason_for_exit: {
            type: Sequelize.STRING
        },
        progress: {
            type: Sequelize.INTEGER,
            defaultValue: 0
        }
    }, {
        sequelize,
        modelName: 'users'});
    return User 
}