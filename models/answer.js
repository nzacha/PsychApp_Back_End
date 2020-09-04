const Sequelize = require('sequelize')

module.exports = (sequelize) => {
    class Answer extends Sequelize.Model {}
    Answer.init({
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        text: {
            type: Sequelize.STRING,
            allowNull: false
        },
        index: {
            type: Sequelize.INTEGER,
            allowNull: false
        }
    }, {
        sequelize,
        modelName: 'answer'});
    return Answer 
}

