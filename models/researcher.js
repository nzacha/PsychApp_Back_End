const Sequelize = require('sequelize')

module.exports = (sequelize) => {
    class Researcher extends Sequelize.Model {}
    Researcher.init({
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        surname: {
            type: Sequelize.STRING,
            allowNull: false
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false
        },
        description: {
            type: Sequelize.TEXT
        },
        phone: {
            type: Sequelize.INTEGER
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
        modelName: 'researchers'});
    return Researcher 
}

