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
        }
    }, {
        sequelize,
        modelName: 'researchers'});
    return Researcher 
}

