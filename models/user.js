const Sequelize = require('sequelize')

module.exports = (sequelize) => {
    class User extends Sequelize.Model {}
    User.init({
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        researcher:{
            type: Sequelize.STRING,
            allowNull: false,
            validate:{
                isIn: [["Marianna", "Penelope"]]
            }
        },
        name: {
            type: Sequelize.STRING            
        }
    }, {
        sequelize,
        modelName: 'users'});
    return User 
}