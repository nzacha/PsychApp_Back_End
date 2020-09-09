const Sequelize = require('sequelize')

module.exports = (sequelize) => {
    class Project extends Sequelize.Model {}
    Project.init({
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        description: {
            type: Sequelize.TEXT
        },
        study_length: {
            type: Sequelize.INTEGER,
            defaultValue: 1,
            allowNull: false
        },
        tests_per_day: {
            type: Sequelize.INTEGER,
            defaultValue: 1,
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
        modelName: 'projects'});
    return Project 
}

