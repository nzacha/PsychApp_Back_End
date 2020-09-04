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
            },
            allowNull: false
        },
        question_text:{
            type: Sequelize.STRING,
            defaultValue: 'This is a question',
            allowNull: false
        },
        levels: {
            type: Sequelize.INTEGER,
            defaultValue: '1',
            allowNull: false
        },
        orientation: {
        	type: Sequelize.STRING,
        	defaultValue: 'Vertical',
            validate:{
                isIn: [["Vertical", "Horizontal"]],
            }
        },
        request_reason: {
            type: Sequelize.BOOLEAN,
            defaultValue: true
        }
    }, {
        sequelize,
        modelName: 'questions'});
    return Question 
}