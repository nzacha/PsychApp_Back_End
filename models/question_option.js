const Sequelize = require('sequelize')

module.exports = (sequelize) => {
    class Question_Option extends Sequelize.Model {}
    Question_Option.init({
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        option:{
            type: Sequelize.STRING,
            defaultValue: 'This is a question'
        }
    }, {
        sequelize,
        modelName: 'question_options'});
    return Question_Option
}