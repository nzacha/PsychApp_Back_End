const Sequelize = require('sequelize')

module.exports = (sequelize) => {
    class Question extends Sequelize.Model {}
    Question.init({
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        question:{
            type: Sequelize.STRING,
            defaultValue: 'This is a question'
        }
    }, {
        sequelize,
        modelName: 'questions'});
    return Question 
}