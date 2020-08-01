const Sequelize = require('sequelize')

module.exports = (sequelize) => {
    class Question extends Sequelize.Model {}
    Question.init({
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        question_type: {
            type: Sequelize.STRING,            
            defaultValue: "Text",
            validate:{
                isIn: [["Text", "Slider"]],
            }
        },
        question_text:{
            type: Sequelize.STRING,
            defaultValue: 'This is a question'
        },
        levels: {
            type: Sequelize.INTEGER,
            defaultValue: '1'
        }
    }, {
        sequelize,
        modelName: 'questions'});
    return Question 
}