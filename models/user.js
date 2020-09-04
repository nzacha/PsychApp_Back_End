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
        questions_total: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        progress: {
            type: Sequelize.INTEGER,
            defaultValue: 0
        },
        study_length: {
            type: Sequelize.INTEGER,
            defaultValue: 1,
            allowNull: false
        },                
        tests_per_day: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        tests_time_interval: {
            type: Sequelize.INTEGER,
            defaultValue: 3,
            allowNull: false
        },
        allow_individual_times: {
            type: Sequelize.BOOLEAN,
            defaultValue: false
        },
        allow_user_termination: {
            type: Sequelize.BOOLEAN,
            defaultValue: false
        },
        automatic_termination: {
            type: Sequelize.BOOLEAN,
            defaultValue: false
        }
    }, {
        sequelize,
        modelName: 'users'});
    return User 
}