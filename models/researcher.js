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
            type: Sequelize.STRING
        }
    }, {
        sequelize,
        modelName: 'researchers'});
    return Researcher 
}

