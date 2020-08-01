const path = require('path');
const Sequelize = require('sequelize');
const db = {};

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  dialect: 'postgres',
  host: process.env.DB_HOST,
  port: process.env.DB_PORT
})

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.User = require('./user')(sequelize)
db.Researcher = require('./researcher')(sequelize)
db.Question = require('./question')(sequelize)
db.Question_Option = require('./question_option')(sequelize)
db.Answer = require('./answer')(sequelize)

db.User.belongsTo(db.Researcher)
db.Researcher.hasMany(db.User)
db.Question.belongsTo(db.Researcher)
db.Researcher.hasMany(db.Question)
db.Question_Option.belongsTo(db.Question)
db.Question.hasMany(db.Question_Option, {onDelete: 'cascade'})
db.Answer.belongsTo(db.User)
db.User.hasMany(db.Answer)
db.Answer.belongsTo(db.Question)
db.Question.hasMany(db.Answer)

module.exports = db;
