const Sequelize = require('sequelize')

module.exports = (sequelize) => {
    class Question extends Sequelize.Model {}
    Question.init({
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        type: {
            type: Sequelize.STRING,            
            defaultValue: "Text",
            validate:{
                isIn: [["Text", "Slider", "Multiple_Choice"]],
            }
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